Template.requests.helpers({
    requests: function() {
        var getRequests = Requests.find();

        if (getRequests) {
            return getRequests;
        }
    },
    ticket: function(ticketId) {
        var getTicket = Ticket.findOne({ "_id": ticketId });

        if (getTicket) {
            return getTicket;
        }
    },
    visitor: function(userId) {
        var getVisitor = Visitors.findOne({ "userId": userId });

        if (getVisitor) {
            return getVisitor;
        }
    }
});
