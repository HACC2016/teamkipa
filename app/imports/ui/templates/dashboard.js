import { Template } from 'meteor/templating';

import { Dashboards } from '../../api/dashboards.js';

import './dashboard.html';

Template.dashboard.helpers({

});

Template.dashboard.events({
    'click .logout': function(event) {
        event.preventDefault();
        Meteor.logout();
    }
});
