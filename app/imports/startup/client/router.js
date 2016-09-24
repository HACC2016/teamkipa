import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Landing_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Landing_Page' });
  },
});

FlowRouter.route('/site-map', {
  name: 'Site_Map_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Site_Map_Page' });
  },
});

FlowRouter.route('/register', {
  name: 'Register',
  action() {
    BlazeLayout.render('App_Body', { main: 'Register_Page' });
  },
});

FlowRouter.route('/registration-complete/:id', {
  name: 'Registration_Complete_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Registration_Complete_Page' });
  },
});

FlowRouter.route('/login', {
  name: 'Login_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Login_Page' });
  },
});

FlowRouter.route('/authorization-pending', {
  name: 'Authorization_Pending_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Authorization_Pending_Page' });
  },
});

FlowRouter.route('/authorization-declined', {
  name: 'Authorization_Declined_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Authorization_Declined_Page' });
  },
});

FlowRouter.route('/request-visit/:id', {
  name: 'Visit_Request_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Visit_Request_Page' });
  },
});

FlowRouter.route('/visit-reservation', {
  name: 'Visit_Reservation_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Visit_Reservation_Page' });
  },
});

FlowRouter.route('/admin-week', {
  name: 'Admin_Week_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Admin_Week_Page' });
  },
});

FlowRouter.route('/admin-day/:day', {
  name: 'Admin_Day_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Admin_Day_Page' });
  },
});

FlowRouter.route('/admin-authorization', {
  name: 'Admin_Authorization_Requests_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Admin_Authorization_Requests_Page' });
  },
});

FlowRouter.route('/admin-manage-visitor/:id', {
  name: 'Admin_Manage_Visitor_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Admin_Manage_Visitor_Page' });
  },
});

FlowRouter.route('/visitor-home/:id', {
  name: 'Visitor_Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Visitor_Home_Page' });
  },
});


FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
