import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { getVisitorFromID, Visitors } from '../../../imports/api/visitor/visitors';
import { Visits, getVisitTimeString } from '../../../imports/api/visit/visit';

Template.Visit_Reservation_Page.onCreated(function onCreated() {
  // placeholder: typically you will put global subscriptions here if you remove the autopublish package.
});

Template.Visit_Reservation_Page.helpers({
  detaineeFirstName: () => {
    const visitor = getVisitorFromID();
    if (typeof visitor !== 'undefined') {
      return visitor.detaineefirstname;
    }
    return '';
  },
  detaineeLastName: () => {
    const visitor = getVisitorFromID();
    if (typeof visitor !== 'undefined') {
      return visitor.detaineelastname;
    }
    return '';
  },
  allowtexts: () => {
    const visitor = getVisitorFromID();
    if (typeof visitor !== 'undefined') {
      return visitor.allowtexts;
    }
    return false;
  },
  visitDate: () => {
    const visitorID = FlowRouter.getParam('id');
    const visit = Visits.findOne({ visitorID });
    return getVisitTimeString(visit.day, visit.slot);
  },
  visitTime: () => {
    const visitorID = FlowRouter.getParam('id');
    const visit = Visits.findOne({ visitorID });
    return visit.slot;
  },
});

Template.Visit_Reservation_Page.events({
  'submit .visit-update-form'(event) {
    event.preventDefault();
    const visitor = getVisitorFromID();
    const allowtexts = event.target.text_message_notification.checked;
    Visitors.update({ _id: visitor._id }, { $set: { allowtexts } });
  },
  'submit .visit-cancel-form'(event) {
    event.preventDefault();
    const visitorID = FlowRouter.getParam('id');
    const visit = Visits.findOne({ visitorID });
    Visits.remove(visit._id);
  },
});
