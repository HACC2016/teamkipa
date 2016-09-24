import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { getTimeSlotVisits } from '../../api/visit/visit.js';
import { Visitors } from '../../api/visitor/visitors.js';

Template.Admin_Day_Table_Cell.onCreated(function onCreated() {
  // placeholder: typically you will put global subscriptions here if you remove the autopublish package.
});

Template.Admin_Day_Table_Cell.helpers({
  visitorUrl: function visitorUrl(visitNum, slot) {
    const day = FlowRouter.getParam('day');
    const visits = getTimeSlotVisits(day, slot).fetch();
    let returnUrl = '';
    if (visitNum < visits.length) {
      const visitorID = visits[visitNum].visitorID;
      returnUrl = `/admin-manage-visitor/${visitorID}`;
    }
    return returnUrl;
  },
  visitorInfo: function visitorInfo(visitNum, slot) {
    const day = FlowRouter.getParam('day');
    const visits = getTimeSlotVisits(day, slot).fetch();
    let info = '';
    if (visitNum < visits.length) {
      const visitorID = visits[visitNum].visitorID;
      const visitor = Visitors.findOne(visitorID);
      info = `${visitor.firstname} ${visitor.lastname} (${visitor.detaineefirstname} ${visitor.detaineelastname})`;
    }
    return info;
  },
});

Template.Admin_Day_Table_Cell.events({
  // placeholder: if you have a form, handle the associated events here.
});
