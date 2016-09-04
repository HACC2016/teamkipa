import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Logins = new Mongo.Collection('logins');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('logins', function loginsPublication() {
    return Logins.find({
      $or: [
        { private: { $ne: true } },
        { owner: this.userId },
      ],
    });
  });
}

Meteor.methods({
  'logins.insert'(loginUser) {
    check(loginUser, String);

    // Make sure the user is authorized
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Logins.insert({
      emailAddr,
      createdAt: new Date()
    });
  }
});

// if (Meteor.isClient) {
//   Session.set('connectaReady', false);
//   Meteor.startup(function(){
//    $.getScript('http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js', function(){
//     // script has loaded
//     Session.set('conectaReady', true);
//    });
//   });
// }