import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Signups } from '../api/signups.js';
import { Registers } from '../api/registers.js';
import { Logins } from '../api/logins.js';
import { Dashboards } from '../api/dashboards.js';
import './templates/signup.js';
import './templates/register.js';
import './templates/login.js';
import './templates/dashboard.js';
import './layouts/MainLayout.html';
import './body.html';

Template.body.onCreated(function bodyOnCreated() {
    this.state = new ReactiveDict();
    Meteor.subscribe('registers');
});


Template.body.helpers({

});

Template.body.events({
    'submit .new-user' (event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        const target = event.target;
        const registerPhone = target.registerPhone.value;

        // Insert a new user into the collection
        Meteor.call('registers.insert', registerPhone);

        // Clear form
        target.registerPhone.value = '';
    }
});

Template.body.onRendered = function() {
    $('.form').find('input, textarea').on('keyup blur focus', function(e) {

        var $this = $(this),
            label = $this.prev('label');

        if (e.type === 'keyup') {
            if ($this.val() === '') {
                label.removeClass('active highlight');
            } else {
                label.addClass('active highlight');
            }
        } else if (e.type === 'blur') {
            if ($this.val() === '') {
                label.removeClass('active highlight');
            } else {
                label.removeClass('highlight');
            }
        } else if (e.type === 'focus') {

            if ($this.val() === '') {
                label.removeClass('highlight');
            } else if ($this.val() !== '') {
                label.addClass('highlight');
            }
        }

    });

    $('.tab a').on('click', function(e) {

        e.preventDefault();

        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');

        target = $(this).attr('href');

        $('.tab-content > div').not(target).hide();

        $(target).fadeIn(600);

    });
}
