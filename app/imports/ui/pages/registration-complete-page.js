import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Visitors } from '/imports/api/visitor/visitors';

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
});