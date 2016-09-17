Ticket = new Meteor.Collection('ticket');

Ticket.deny({
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

var TicketSchema = new SimpleSchema({
    "name": {
        type: String,
        label: "Requestor"
    },
    "dateOfBirth": {
        type: String,
        label: "Date of Birth"
    },
    "custom": {
        type: Boolean,
        label: "Custom Ticket"
    },
    "ownerId": {
        type: String,
        label: "Ticket Owner's User ID",
        optional: true
    }
});

Ticket.attachSchema(TicketSchema);
