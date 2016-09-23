import { Template } from 'meteor/templating';
import { getvisitorfrommeteor } from '../../../imports/api/visitor/visitors';

Template.Authorization_Pending_Page.onCreated(function onCreated() {
  // placeholder: typically you will put global subscriptions here if you remove the autopublish package.
});

Template.Authorization_Pending_Page.helpers({
  detaineefirstname: () => {
    const visitor = getvisitorfrommeteor();
    if (typeof visitor !== 'undefined') {
      return visitor.detaineefirstname;
    }
    return '';
  },
  detaineelastname: () => {
    const visitor = getvisitorfrommeteor();
    if (typeof visitor !== 'undefined') {
      return visitor.detaineelastname;
    }
    return '';
  },
  allowtexts: () => {
    const visitor = getvisitorfrommeteor();
    if (typeof visitor !== 'undefined') {
      return visitor.allowtexts;
    }
    return false;
  },
});

Template.Authorization_Pending_Page.events({
  // placeholder: if you have a form, handle the associated events here.
});
