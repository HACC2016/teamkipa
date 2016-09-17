Requests = new Meteor.Collection('requests');

Requests.deny({
    insert: function() {
        return true;
    },
    update: function() {
        return true;
    },
    remove: function() {
        return true;
    }
});

var RequestsSchema = new SimpleSchema({
    "userId": {
        type: String,
        label: "Visitor User ID"
    },
    "ticketId": {
        type: String,
        label: "ID of request"
    },
    "date": {
        type: String,
        label: "Date of request"
    }
});

Requests.attachSchema(RequestsSchema);
