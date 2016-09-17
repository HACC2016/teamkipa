Inmates = new Meteor.Collection('inmates');

Inmates.deny({
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

var InmatesSchema = new SimpleSchema({
    "name": {
        type: String,
        defaultValue: "",
        label: "Inmate Name"
    },
    "dateOfBirth": {
        type: String,
        defaultValue: "",
        label: "Date of Birth"
    },
    "stateId": {
        type: String,
        defaultValue: "",
        label: "State ID"
    },
    "userId": {
        type: String,
        label: "Associated Inmate ID"
    }
});

Inmates.attachSchema(InmatesSchema);
