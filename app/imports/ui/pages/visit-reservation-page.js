import { Template } from 'meteor/templating';
import { getVisitorFromMeteor } from '../../../imports/api/visitor/visitors';

Template.Visit_Reservation_Page.onCreated(function onCreated() {
  // placeholder: typically you will put global subscriptions here if you remove the autopublish package.
});

Template.Visit_Reservation_Page.helpers({
  detaineefirstname: () => {
    const visitor = getVisitorFromMeteor();
    if (typeof visitor !== 'undefined') {
      return visitor.detaineefirstname;
    }
    return '';
  },
  detaineelastname: () => {
    const visitor = getVisitorFromMeteor();
    if (typeof visitor !== 'undefined') {
      return visitor.detaineelastname;
    }
    return '';
  },
  allowtexts: () => {
    const visitor = getVisitorFromMeteor();
    if (typeof visitor !== 'undefined') {
      return visitor.allowtexts;
    }
    return false;
  },

});

Template.Visit_Reservation_Page.events({
  // placeholder: if you have a form, handle the associated events here.
});
