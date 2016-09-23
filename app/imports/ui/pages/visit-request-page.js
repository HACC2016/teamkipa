import { Template } from 'meteor/templating';
import { moment } from 'meteor/momentjs:moment';

Template.Visit_Request_Page.onCreated(function onCreated() {
  // placeholder: typically you will put global subscriptions here if you remove the autopublish package.
});

Template.Visit_Request_Page.helpers({
  getHeader: function getHeader(numDays) {
    return moment().add(numDays, 'days').format('ddd, M/DD');
  },
});

Template.Visit_Request_Page.events({
  // placeholder: if you have a form, handle the associated events here.
});
