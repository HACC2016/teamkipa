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
    'registers.insert' (doc) {
        // check(registerPhone, String);

        id = Accounts.createUser({
            username: doc.username,
            password: doc.password,
            profile: doc.profile
        });

        return id;

        Registers.insert({
            id,
            // registerFName,
            // registerLName,
            // registerPhone,
            // registerEmail,
            createdAt: new Date()
        });
    },
    'registers.update': function (id, doc) {
        /* Update account */
        Meteor.users.update(id, {
            $set: {
                username: doc.username,
                profile: doc.profile
            }
        });
        /* Update password */
        if (doc.password != 'the same') {
            Accounts.setPassword(id, doc.password);
        }

        return true;
    },
    'registers.remove': function (id) {

        Meteor.users.remove(id);

        return id;
    }
});
