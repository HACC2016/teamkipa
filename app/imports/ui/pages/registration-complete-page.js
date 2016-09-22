import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Visitors } from '/imports/api/visitor/visitors';
import { Meteor } from 'meteor/meteor';

Template.Registration_Complete_Page.onCreated(function onCreated() {
  // placeholder: typically you will put global subscriptions here if you remove the autopublish package.
});

Template.Registration_Complete_Page.helpers({
  pin: () => {
    const visitorId = FlowRouter.getParam('id');
    const visitor = Visitors.findOne({ _id: visitorId });
    return visitor.pin;
  },
  phonenumber: () => {
    const visitorId = FlowRouter.getParam('id');
    const visitor = Visitors.findOne({ _id: visitorId });
    return visitor.phonenumber;
  }

});

Template.Registration_Complete_Page.events({
  // placeholder: if you have a form, handle the associated events here.
  'submit': (event, instance) => {
    event.preventDefault();
    const username = event.target.phonenumber.value;
    const password = event.target.pin.value;
    Meteor.loginWithPassword(username, password, (err) => {
      if (err) {
        alert(err);
      } else {
        const userId = Meteor.userId();
        if (Roles.userIsInRole(userId, ['admin'])) {
          FlowRouter.go('/admin/');
        } else {
          FlowRouter.go('/visitor');
        }
      }
    })
  }
});