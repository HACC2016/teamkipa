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
    'logins.insert' (loginPhone) {
        check(loginPhone, String);

        // Make sure the user is authorized
        if (!this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        Logins.insert({
            loginPhone,
            createdAt: new Date()
        });
    }
});
