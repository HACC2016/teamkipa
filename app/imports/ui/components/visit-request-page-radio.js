import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { futureDay, getTimeSlotVisits } from '../../api/visit/visit.js';
import { Visitors } from '../../api/visitor/visitors.js';

Template.Visit_Request_Page_Radio.onCreated(function onCreated() {
  // placeholder: typically you will put global subscriptions here if you remove the autopublish package.
});

const visitCheckers = [
  function checkForWoman(visitorID, day, slot) {
    // Detainee must be female to reserve a slot between 10 and 11.
    if (slot === '1000' || slot === '1030') {
      const visitor = Visitors.findOne(visitorID);
      return visitor.isfemale;
    }
    return true;
  },
  function checkForGirlFriend(visitorID, day, slot) {
    // Haven't implemented this one yet.
    return true;
  },
];

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
    const visitorID = FlowRouter.getParam('id');
    const day = futureDay(dayNum);
    const numVisits = getTimeSlotVisits(day, slot).count();
    let checkerResults = true;
    visitCheckers.forEach(function(visitChecker) {
      checkerResults = checkerResults && visitChecker(visitorID, day, slot);
    });
    console.log('checkerresults', checkerResults);
    return checkerResults && numVisits < 5;
  },
})
;

Template.Visit_Request_Page_Radio.events({
  // placeholder: if you have a form, handle the associated events here.
});


