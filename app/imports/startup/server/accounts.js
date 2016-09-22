import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

/* eslint-disable no-console */

/* When running for the first time, set up the roles. */
if (Roles.getAllRoles().length === 0) {
  // console.log('Defining Roles');
  Roles.createRole('admin');
  Roles.createRole('visitor');
}

/* When running app for first time, pass a settings file to set up a default user account. */
if (!!Meteor.settings.defaultAdminAccount) {
  if (Meteor.users.find({ username: Meteor.settings.defaultAdminAccount.username }).count() === 0) {
    const id = Accounts.createUser({
      username: Meteor.settings.defaultAdminAccount.username,
      password: Meteor.settings.defaultAdminAccount.password,
    });
    Roles.addUsersToRoles(id, ['admin']);
  } else {
    console.log('No default user!  Please invoke meteor with a settings file.');
  }
}

