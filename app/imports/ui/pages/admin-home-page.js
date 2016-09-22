import { Template } from 'meteor/templating';
import { moment } from 'meteor/momentjs:moment';
import { getTimeSlotRowData } from '../../api/timeslot/timeslot.js';

Template.Admin_Home_Page.onCreated(function onCreated() {
  // placeholder: typically you will put global subscriptions here if you remove the autopublish package.
});

Template.Admin_Home_Page.helpers({
  // Return the seven header strings starting with today.
  scheduleHeaders: function scheduleHeaders() {
    const headers = [];
    for (let i = 0; i < 7; i++) {
      headers.push(moment().add(i, 'days').format('ddd, M/DD'));
    }
    return headers;
  },

  sevenThirty: function row1() {
    return getTimeSlotRowData('0730');
  },

  getSlotRow: function slotRow(slot) {
    return getTimeSlotRowData(slot);
  },
});

Template.Admin_Home_Page.events({
  // placeholder: if you have a form, handle the associated events here.
});
