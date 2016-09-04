import { Template } from 'meteor/templating';

import { Users } from '../api/registers.js';

import './register.html';

Template.register.helpers({

});

Template.register.events({
  'submit .new-user': function(event){
    event.preventDefault();
    // var firstName = event.target.firstName.value;
    // var lastName = event.target.lastName.value;
    var phoneNumber = event.target.phoneNumber.value;
    var registerEmail = event.target.registerEmail.value;
    var registerPassword = event.target.registerPassword.value;

    Accounts.createUser({
      username: phoneNumber,
      email: registerEmail,
      password: registerPassword
    });
  }
});
