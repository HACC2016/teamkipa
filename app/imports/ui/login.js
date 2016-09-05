import { Template } from 'meteor/templating';

import { Logins } from '../api/logins.js';

import './login.html';

Template.login.helpers({

});

Template.login.events({
  'submit .login-user': function(event){
    event.preventDefault();
    var loginPhone = event.target.loginPhone.value;
    var loginPass = event.target.loginPassword.value;
    Meteor.loginWithPassword(loginPhone, loginPass);
  }
});
