import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

// The Header menu does not use dropdown menus, but most menus do.
// Here's how to do the required initialization for Semantic UI dropdown menus.
Template.Header.onRendered(function enableDropDown() {
  this.$('.dropdown').dropdown();
});

Template.Header.events({
  'click .logout': (event) => {
    event.preventDefault();

    Meteor.logout((error) => {
      if (error) {
        console.log('ERROR: ' + error.reason);
      }
    });
    FlowRouter.go('/');
  },
});
