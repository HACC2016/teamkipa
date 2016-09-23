import { Template } from 'meteor/templating';
import { moment } from 'meteor/momentjs:moment';
import { getVisitorFromID } from '../../api/visitor/visitors';
import { addVisit } from '../../api/visit/visit.js';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.Visit_Request_Page.onCreated(function onCreated() {
  // placeholder: typically you will put global subscriptions here if you remove the autopublish package.
});

Template.Visit_Request_Page.helpers({
  getHeader: function getHeader(numDays) {
    return moment().add(numDays, 'days').format('ddd, M/DD');
  },
  detaineefirstname: () => {
    const visitor = getVisitorFromID();
    if (typeof visitor !== 'undefined') {
      return visitor.detaineefirstname;
    }
    return '';
  },
  detaineelastname: () => {
    const visitor = getVisitorFromID();
    if (typeof visitor !== 'undefined') {
      return visitor.detaineelastname;
    }
    return '';
  },
});

Template.Visit_Request_Page.events({
  submit: (event) => {
    event.preventDefault();
    const timeslot = event.target.requestdate.value;
    const day = timeslot.substring(0, 10);
    const slot = timeslot.substring(11);
    const visitorID = FlowRouter.getParam('id');
    addVisit(day, slot, visitorID);
  },
});
