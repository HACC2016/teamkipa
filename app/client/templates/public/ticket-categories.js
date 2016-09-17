Template.ticketCategories.helpers({
    myTickets: function() {
        var tickets = Ticket.find({ "custom": true, "ownerId": Meteor.userId() });
        return { "context": "request", "content": tickets };
    },
    popularTickets: function() {
        var tickets = Ticket.find({ "custom": false });
        return { "context": "request", "content": tickets };
    }
});
