import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Roles } from 'meteor/alanning:roles';
import { getVisitorFromMeteor } from '../../../imports/api/visitor/visitors';

Template.Login_Page.onCreated(function onCreated() {
  // placeholder: typically you will put global subscriptions here if you remove the autopublish package.
});

Template.Login_Page.helpers({
  // placeholder: if you display dynamic data, you will put your template helpers here.
});

Template.Login_Page.events({
  submit: (event) => {
    event.preventDefault();
    const username = event.target.phonenumber.value;
    const password = event.target.pin.value;
    Meteor.loginWithPassword(username, password, (err) => {
      if (err) {
        // need to set an error message on the login page.
        alert(err);
      } else {
        const userId = Meteor.userId();
        if (Roles.userIsInRole(userId, ['admin'])) {
          FlowRouter.go('/admin-week');
        } else {
          const visitor = getVisitorFromMeteor()._id;
          FlowRouter.go(`/visitor-home/${visitor}`);
        }
      }
    });
  },
});
