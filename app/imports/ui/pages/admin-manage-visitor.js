import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Visitors } from '/imports/api/visitor/visitors';

Template.Admin_Manage_Visitor_Page.onCreated(function onCreated() {
  // placeholder: typically you will put global subscriptions here if you remove the autopublish package.
});

const getvisitor = () => {
  const visitorId = FlowRouter.getParam('id');
  return Visitors.findOne({ _id: visitorId });
};

Template.Admin_Manage_Visitor_Page.helpers({
  firstname: () => {
    const visitor = getvisitor();
    if (typeof visitor !== 'undefined') {
      return visitor.firstname;
    }
    return '';
  },
  lastname: () => {
    const visitor = getvisitor();
    if (typeof visitor !== 'undefined') {
      return visitor.lastname;
    }
    return '';
  },
  phonenumber: () => {
    const visitor = getvisitor();
    if (typeof visitor !== 'undefined') {
      return visitor.phonenumber;
    }
    return '';
  },
  dateofbirth: () => {
    const visitor = getvisitor();
    if (typeof visitor !== 'undefined') {
      return visitor.dateofbirth;
    }
    return '';
  },
  detaineefirstname: () => {
    const visitor = getvisitor();
    if (typeof visitor !== 'undefined') {
      return visitor.detaineefirstname;
    }
    return '';
  },
  detaineelastname: () => {
    const visitor = getvisitor();
    if (typeof visitor !== 'undefined') {
      return visitor.detaineelastname;
    }
    return '';
  },
  detaineeisfemale: () => {
    const visitor = getvisitor();
    if (typeof visitor !== 'undefined') {
      if (visitor.isfemale) {
        return '(Female)';
      }
    }
    return '';
  },
});

Template.Admin_Manage_Visitor_Page.events({
  'click #authorize': (event) => {
    event.preventDefault();
    const visitor = getvisitor();
    if (typeof visitor !== 'undefined') {
      Visitors.update({ _id: visitor._id }, { $set: { state: 'authorized' } });
      if (visitor.allowtexts) {
        const message = `From OCCC Visitation, ${visitor.firstname} you have been approved to visit ${visitor.detaineefirstname} ${visitor.detaineelastname}`;
        Meteor.call('sendTextMessage', visitor.phonenumber, message);
      }
      FlowRouter.go('/admin-home');
    }
  },
  'click #revoke': (event) => {
    event.preventDefault();
    const visitor = getvisitor();
    if (typeof visitor !== 'undefined') {
      Visitors.update({ _id: visitor._id }, { $set: { state: 'declined' } });
      FlowRouter.go('/admin-home');
    }
  },
});
