import { Template } from 'meteor/templating';

import { Registers } from '../../api/registers.js';

import './signup.html';

Template.signup.helpers({

});

Template.signup.events({
    'submit .new-user': function(event) {
        event.preventDefault();

        const target = event.target
        const registerPhone = target.registerPhone.value;
        const registerPassword = target.registerPassword.value;

        /* Create new username */
        Accounts.createUser({
            username: registerPhone,
            password: registerPassword
        });

        target.registerPhone.value = "";

        return false;
    }
});
