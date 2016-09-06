import { Template } from 'meteor/templating';

import { Registers } from '../../api/registers.js';

import './signup.html';

Template.signup.helpers({

});

Template.signup.events({
  'submit .new-user': function(event){
    event.preventDefault();

    var signupPhone = event.target.signupPhone.value;
    var signupPassword = event.target.signupPassword.value;

    Accounts.createUser({
      username: signupPhone,
      password: signupPassword
    });
  }
});
