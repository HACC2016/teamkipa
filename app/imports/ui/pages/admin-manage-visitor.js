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
    return visitor.firstname;
  },
  lastname: () => {
    const visitorId = FlowRouter.getParam('id');
    const visitor = Visitors.findOne({ _id: visitorId });
    return visitor.lastname;
  },
  phonenumber: () => {
    const visitorId = FlowRouter.getParam('id');
    const visitor = Visitors.findOne({ _id: visitorId });
    console.log(visitor);
    return visitor.phonenumber;
  },
  dateofbirth: () => {
    const visitorId = FlowRouter.getParam('id');
    const visitor = Visitors.findOne({ _id: visitorId });
    return visitor.dateofbirth;
  },
  detaineefirstname: () => {
    const visitorId = FlowRouter.getParam('id');
    const visitor = Visitors.findOne({ _id: visitorId });
    return visitor.detaineefirstname;
  },
  detaineelastname: () => {
    const visitorId = FlowRouter.getParam('id');
    const visitor = Visitors.findOne({ _id: visitorId });
    return visitor.detaineelastname;
  },
  detaineeisfemale: () => {
    const visitorId = FlowRouter.getParam('id');
    const visitor = Visitors.findOne({ _id: visitorId });
    console.log(typeof visitor.isfemale);
    if (visitor.isfemale) {
      return 'True';
    }
    return 'False';
  },
});

Template.Admin_Manage_Visitor_Page.events({
  // placeholder: if you have a form, handle the associated events here.
});
