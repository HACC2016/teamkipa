import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Visitors } from '/imports/api/visitor/visitors';

Template.Admin_Manage_Visitor_Page.onCreated(function onCreated() {
  // placeholder: typically you will put global subscriptions here if you remove the autopublish package.
});

Template.Admin_Manage_Visitor_Page.helpers({
  firstname: () => {
    const visitorId = FlowRouter.getParam('id');
    const visitor = Visitors.findOne({ _id: visitorId });
    if (typeof visitor !== 'undefined') {
      return visitor.firstname;
    }
    return '';
  },
  lastname: () => {
    const visitorId = FlowRouter.getParam('id');
    const visitor = Visitors.findOne({ _id: visitorId });
    if (typeof visitor !== 'undefined') {
      return visitor.lastname;
    }
    return '';
  },
  phonenumber: () => {
    const visitorId = FlowRouter.getParam('id');
    const visitor = Visitors.findOne({ _id: visitorId });
    if (typeof visitor !== 'undefined') {
      return visitor.phonenumber;
    }
    return '';
  },
  dateofbirth: () => {
    const visitorId = FlowRouter.getParam('id');
    const visitor = Visitors.findOne({ _id: visitorId });
    if (typeof visitor !== 'undefined') {
      return visitor.dateofbirth;
    }
    return '';
  },
  detaineefirstname: () => {
    const visitorId = FlowRouter.getParam('id');
    const visitor = Visitors.findOne({ _id: visitorId });
    if (typeof visitor !== 'undefined') {
      return visitor.detaineefirstname;
    }
    return '';
  },
  detaineelastname: () => {
    const visitorId = FlowRouter.getParam('id');
    const visitor = Visitors.findOne({ _id: visitorId });
    if (typeof visitor !== 'undefined') {
      return visitor.detaineelastname;
    }
    return '';
  },
  detaineeisfemale: () => {
    const visitorId = FlowRouter.getParam('id');
    const visitor = Visitors.findOne({ _id: visitorId });
    if (typeof visitor !== 'undefined') {
      if (visitor.isfemale) {
        return '(Female)';
      }
    }
    return '';
  },
});

Template.Admin_Manage_Visitor_Page.events({
  // placeholder: if you have a form, handle the associated events here.
});
