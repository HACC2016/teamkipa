Meteor.publish('ticketProfile', function() {

    var user = this.userId;

    var data = [
        Ticket.find({ $or: [{ "custom": true, "ownerId": user }, { "custom": false }] }),
        Visitors.find({ "userId": user }),
        Requests.find({ "userId": user })
    ];

    if (data) {
        return data;
    }

    return this.ready();
});
