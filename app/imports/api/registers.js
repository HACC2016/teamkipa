import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Registers = new Mongo.Collection('registers');

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
  'registers.insert'(registerEmail) {
    check(registerEmail, String);

    Registers.insert({
      // firstName,
      // lastName,
      // phoneNumber,
      registerEmail,
      createdAt: new Date()
    });
  }
});
