import { Template } from 'meteor/templating';
import { futureDay, getTimeSlotVisits } from '../../api/visit/visit.js';

Template.Visit_Request_Page_Radio.onCreated(function onCreated() {
  // placeholder: typically you will put global subscriptions here if you remove the autopublish package.
});

Template.Visit_Request_Page_Radio.helpers({
  getID: function getID(dayNum, slot) {
    const day = futureDay(dayNum);
    return `${day}-${slot}`;
  },
  getValue: function getValue(dayNum, slot) {
    const day = futureDay(dayNum);
    return `${day}-${slot}`;
  },
  prettyPrintLabel: function printlabel(slot) {
    const label = `${slot.substring(0, 2)}:${slot.substring(2)}`;
    const amPm = (label < '12:00') ? 'am' : 'pm';
    return `${label}${amPm}`;
  },
  visitAvailable: function visitAvailable(dayNum, slot) {
    const day = futureDay(dayNum);
    const numVisits = getTimeSlotVisits(day, slot).count();
    return numVisits < 5;
  },
})
;

Template.Visit_Request_Page_Radio.events({
  // placeholder: if you have a form, handle the associated events here.
});
