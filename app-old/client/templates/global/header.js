Template.header.onCreated(function() {

});

Template.header.onRendered(function() {

});

Template.header.helpers({
    example: function() {
    }
});

Template.header.events({
    'click .logout': function() {
        Meteor.logout(function(error) {
            if (error) {
                Bert.alert(error.reason, 'danger');
            } else {
                Bert.alert('Succesfully logged out!', 'success');
                Router.go('index');
            }
        });
    }
});
