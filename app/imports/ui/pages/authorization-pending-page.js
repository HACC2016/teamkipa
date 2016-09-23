import { Template } from 'meteor/templating';
import { getVisitorFromID, Visitors } from '../../../imports/api/visitor/visitors';

Template.Authorization_Pending_Page.onCreated(function onCreated() {
  // placeholder: typically you will put global subscriptions here if you remove the autopublish package.
});

Template.Authorization_Pending_Page.helpers({
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
  allowtexts: () => {
    const visitor = getVisitorFromID();
    if (typeof visitor !== 'undefined') {
      return visitor.allowtexts;
    }
    return false;
  },
});

Template.Authorization_Pending_Page.events({
  submit: (event) => {
    event.preventDefault();
    const visitor = getVisitorFromID();
    const allowtexts = event.target.text_message_notification.checked;
    Visitors.update({ _id: visitor._id }, { $set: { allowtexts } });
  },
});
