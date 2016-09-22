import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';

Template.Visit_Request_Page_Radio.onCreated(function onCreated() {
  // placeholder: typically you will put global subscriptions here if you remove the autopublish package.
});

Template.Visit_Request_Page_Radio.helpers({
  getID: function getID(timeslot) {
    return `${timeslot.day}-${timeslot.slot}`;
  },
  getValue: function getValue(timeslot) {
    return `${timeslot.day}-${timeslot.slot}`;
  },
  prettyPrintLabel: function printlabel(slot) {
    const label = `${slot.substring(0, 2)}:${slot.substring(2)}`;
    const amPm = (label < '12:00') ? 'am' : 'pm';
    return `${label}${amPm}`;
  },
});

Template.Visit_Request_Page_Radio.events({
  // placeholder: if you have a form, handle the associated events here.
});
