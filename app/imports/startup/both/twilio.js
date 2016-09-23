/**
 * This file is a part of teamkipa.
 *
 * Created by Cam Moore on 9/15/16.
 *
 * Copyright (C) 2016 Cam Moore.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { HTTP } from 'meteor/http';

/**
 * NOTE: For the sendTextMessage to work, we need to set the environment variables:
 * TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, and TWILIO_NUMBER. These values need to match a valid Twilio account.
 * Also the phoneNumber must be validated in Twilio.
 */
Meteor.methods({
  'sendTextMessage'(phoneNumber, outgoingMessage) {
    console.log('sendTextMessage', phoneNumber, outgoingMessage);
    new SimpleSchema({
      phoneNumber: { type: String },
      outgoingMessage: { type: String },
    }).validate({ phoneNumber, outgoingMessage });
    HTTP.call(
        'POST',
        'https://api.twilio.com/2010-04-01/Accounts/' +
        process.env.TWILIO_ACCOUNT_SID + '/SMS/Messages.json', {
          params: {
            From: process.env.TWILIO_NUMBER,
            To: phoneNumber,
            Body: outgoingMessage,
          },
          // Set your credentials as environment variables
          // so that they are not loaded on the client
          auth: process.env.TWILIO_ACCOUNT_SID + ':' +
          process.env.TWILIO_AUTH_TOKEN,
        },
        // print error or success to console
        (error) => {
          if (error) {
            console.log(error);
          } else {
            console.log('SMS sent successfully.');
          }
        }
    );
  },
});
