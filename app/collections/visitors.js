Visitors = new Meteor.Collection('visitors');

Visitors.deny({
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

var VisitorsSchema = new SimpleSchema({
    "name": {
        type: String,
        defaultValue: "",
        label: "Visitor Name"
    },
    "dateOfBirth": {
        type: String,
        defaultValue: "",
        label: "Date of Birth"
    },
    "mobilePhone": {
        type: String,
        defaultValue: "",
        label: "Mobile Phone"
    },
    "stateId": {
        type: String,
        defaultValue: "",
        label: "State ID"
    },
    "streetAddress": {
        type: String,
        defaultValue: "",
        label: "Street Address"
    },
    "secondaryAddress": {
        type: String,
        defaultValue: "",
        label: "Secondary Address"
    },
    "city": {
        type: String,
        defaultValue: "",
        label: "City"
    },
    "state": {
        type: String,
        defaultValue: "",
        label: "State"
    },
    "zipCode": {
        type: String,
        defaultValue: "",
        label: "Zip Code"
    },
    "userId": {
        type: String,
        label: "Associated User ID"
    }
});

Visitors.attachSchema(VisitorsSchema);
