import { Template } from 'meteor/templating';

import { Register } from '../api/registers.js';

import './register.html';

Template.register.helpers({

});

Template.register.events({
  'submit .new-user': function(event){
    event.preventDefault();

    var registerPhone = event.target.registerPhone.value;
    var registerPassword = event.target.registerPassword.value;

    Accounts.createUser({
      username: registerPhone,
      password: registerPassword
    });
  }
});
