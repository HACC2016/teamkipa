import { Template } from 'meteor/templating';

import { Registers } from '../../api/registers.js';

import './register.html';

Template.register.helpers({

});

Template.register.events({
    'submit .register-user': function(event) {
        event.preventDefault();

        // Insert a new user into the collection
        Meteor.call('registers.update', registerPhone);
    }
});
