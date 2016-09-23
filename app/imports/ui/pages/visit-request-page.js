import { Template } from 'meteor/templating';
import { moment } from 'meteor/momentjs:moment';
<<<<<<< HEAD
=======
import { getAvailableTimeSlotsForDay } from '../../api/timeslot/timeslot.js';
import { getvisitorfromid } from '../../api/visitor/visitors';
>>>>>>> master

Template.Visit_Request_Page.onCreated(function onCreated() {
  // placeholder: typically you will put global subscriptions here if you remove the autopublish package.
});

Template.Visit_Request_Page.helpers({
  getHeader: function getHeader(numDays) {
    return moment().add(numDays, 'days').format('ddd, M/DD');
  },
<<<<<<< HEAD
=======
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
>>>>>>> master
});

Template.Visit_Request_Page.events({
  // placeholder: if you have a form, handle the associated events here.
});
