import { Template } from 'meteor/templating';
import { futureDay, getTimeSlotVisits, getVisitor } from '../../api/visit/visit.js';

Template.Admin_Home_Page_Table_Cell.onCreated(function onCreated() {
  // placeholder: typically you will put global subscriptions here if you remove the autopublish package.
});

Template.Admin_Home_Page_Table_Cell.helpers({
  visits: function visits(dayNum, slot) {
    const day = futureDay(dayNum);
    return getTimeSlotVisits(day, slot);
  },
  getLastName: function getLastName(visit) {
    return getVisitor(visit.visitorID).lastname;
  },
});

Template.Admin_Home_Page_Table_Cell.events({
  // placeholder: if you have a form, handle the associated events here.
});
