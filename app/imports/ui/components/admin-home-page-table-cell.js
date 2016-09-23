import { Template } from 'meteor/templating';
import { getVisitorLastName, getVisitorId } from '../../api/timeslot/timeslot.js';

Template.Admin_Home_Page_Table_Cell.onCreated(function onCreated() {
  // placeholder: typically you will put global subscriptions here if you remove the autopublish package.
});

Template.Admin_Home_Page_Table_Cell.helpers({
  getID: function getID(visitInfo) {
    return getVisitorId(visitInfo);
  },
  getName: function getName(visitInfo) {
    return getVisitorLastName(visitInfo);
  },
});

Template.Admin_Home_Page_Table_Cell.events({
  // placeholder: if you have a form, handle the associated events here.
});
