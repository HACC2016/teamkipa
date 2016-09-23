import { Template } from 'meteor/templating';
import { moment } from 'meteor/momentjs:moment';
import { getAvailableTimeSlotsForDay } from '../../api/timeslot/timeslot.js';
import { getvisitorfromid } from '../../api/visitor/visitors';

Template.Visit_Request_Page.onCreated(function onCreated() {
  // placeholder: typically you will put global subscriptions here if you remove the autopublish package.
});

Template.Visit_Request_Page.helpers({
  // Return the seven header strings starting with the day after tomorrow.
  scheduleHeaders: function scheduleHeaders() {
    const headers = [];
    for (let i = 2; i < 9; i++) {
      headers.push(moment().add(i, 'days').format('ddd, M/DD'));
    }
    return headers;
  },
  getHeader: function getHeader(numDays) {
    return moment().add(numDays, 'days').format('ddd, M/DD');
  },
  getAvailableTimeSlots: function getDaySlots(dayNum) {
    const day = moment().add(dayNum, 'days').format('YYYY-MM-DD');
    return getAvailableTimeSlotsForDay(day);
  },
  detaineefirstname: () => {
    const visitor = getvisitorfromid();
    if (typeof visitor !== 'undefined') {
      return visitor.detaineefirstname;
    }
    return '';
  },
  detaineelastname: () => {
    const visitor = getvisitorfromid();
    if (typeof visitor !== 'undefined') {
      return visitor.detaineelastname;
    }
    return '';
  },
});

Template.Visit_Request_Page.events({
  // placeholder: if you have a form, handle the associated events here.
});
