import { Template } from 'meteor/templating';

Template.Admin_Home_Page_Table_Cell.onCreated(function onCreated() {
  // placeholder: typically you will put global subscriptions here if you remove the autopublish package.
});

Template.Admin_Home_Page_Table_Cell.helpers({
  getID: function getID(visitor) {
    return `${visitor}-ID`;
  },
  getName: function getName(visitor) {
    return `${visitor}`;
  },
});

Template.Admin_Home_Page_Table_Cell.events({
  // placeholder: if you have a form, handle the associated events here.
});
