import { Template } from 'meteor/templating';

import { Logins } from '../../api/logins.js';

import './login.html';

Template.login.helpers({

});

Template.login.events({
    'submit .login-user': function(event) {
        event.preventDefault();
        const target = event.target;
        const loginPhone = target.loginPhone.value;
        const loginPass = target.loginPassword.value;

        Meteor.loginWithPassword(loginPhone, loginPass);
    }
});
