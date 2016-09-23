import { Template } from 'meteor/templating';
import { getVisitorFromID } from '../../../imports/api/visitor/visitors';

Template.Authorization_Declined_Page.onCreated(function onCreated() {
  // placeholder: typically you will put global subscriptions here if you remove the autopublish package.
});

Template.Authorization_Declined_Page.helpers({
  reason: () => {
    const visitor = getVisitorFromID();
    return visitor.reason;
  },
});

Template.Authorization_Declined_Page.events({
  // placeholder: if you have a form, handle the associated events here.
});
