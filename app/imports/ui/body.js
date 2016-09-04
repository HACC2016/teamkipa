import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Registers } from '../api/registers.js';
import { Logins } from '../api/logins.js';
import { Dashboards } from '../api/dashboards.js';
import './register.js';
import './login.js';
import './dashboard.js';
import './body.html';

Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('registers');
});


Template.body.helpers({

});

Template.body.events({
  'submit .new-user'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const registerEmail = target.registerEmail.value;

    // Insert a new user into the collection
    Meteor.call('registers.insert', registerEmail);

    // Clear form
    target.registerEmail.value = '';
  }
});