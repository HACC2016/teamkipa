Meteor.methods({
    placeRequest: function(request) {
        check(request, Object);

        var handleRequest = {
            createUser: function(credentials) {
                try {
                    var userId = Accounts.createUser(credentials);
                    return userId;
                } catch (exception) {
                    return exception;
                }
            },
            createVisitor: function(visitor, userId) {
                visitor.userId = userId;
                var visitorId = Visitors.insert(visitor);

                return visitorId;
            },
            createTicket: function(ticket, userId) {
                ticket.ownerId = userId;

                var ticketId = Ticket.insert(ticket);
                return ticketId;
            },
            createRequest: function(userId, ticketId) {
                var requestId = Requests.insert({
                    userId: userId,
                    ticketId: ticketId,
                    date: (new Date())
                });
                return requestId;
            }
        }

        try {
            var userId    = request.credentials   ? handleRequest.createUser(request.credentials)       : request.visitor,
                visitorId = request.visitor.name  ? handleRequest.createVisitor(request.visitor, userId): null,
                ticketId  = request.ticket.custom ? handleRequest.createTicket(request.ticket, userId)  : request.ticket;
                requestId = handleRequest.createRequest(userId, ticketId);

            return requestId;
        } catch (exception) {
            return exception;
        }
    }
});
