import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Signups = new Mongo.Collection('signups');

if (Meteor.isServer) {
  // This code only runs on the server
  // Meteor.publish('users', function usersPublication() {
  //   return Users.find({
  //     $or: [
  //       { private: { $ne: true } },
  //       { owner: this.userId },
  //     ],
  //   });
  // });
}

Meteor.methods({
  'signups.insert'(signupPhone) {
    check(signupPhone, String);

    Signups.insert({
      // firstName,
      // lastName,
      signupPhone,
      // registerEmail,
      createdAt: new Date()
    });
  }
});
