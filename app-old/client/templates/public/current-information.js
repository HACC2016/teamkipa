Template.currentInformation.helpers({
    isProfile: function(location) {
        return Template.instance().data.context === "profile" ? true : false;
    },
    fullName: function() {
        return Meteor.user().profile.name;
    },
    dateOfBirth: function() {
        return Meteor.user().profile.dateOfBirth;
    },
    mobilePhone: function() {
        return Meteor.user().profile.mobilePhone;
    },
    stateId: function() {
        return Meteor.user().profile.stateId;
    },
    streetAddress: function() {
        return Meteor.user().profile.streetAddress;
    },
    secondaryAddress: function() {
        return Meteor.user().profile.secondaryAddress;
    },
    city: function() {
        return Meteor.user().profile.city;
    },
    state: function() {
        return Meteor.user().profile.state;
    },
    zipCode: function() {
        return Meteor.user().profile.zipCode;
    }
});