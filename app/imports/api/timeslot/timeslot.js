import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const timeSlots = 'TimeSlots';  // avoid typos, this string occurs three times.
export const TimeSlots = new Mongo.Collection(timeSlots);

/**
 * Create the schema for TimeSlots
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
TimeSlots.attachSchema(new SimpleSchema({
  // Day indicates a day in YYYY-MM-DD format.
  day: {
    label: 'day',
    type: String,
    optional: false,
  },
  // Slot must be one of ["0730", "0800", "0830", ... "1230"]
  slot: {
    label: 'slot',
    type: String,
    optional: false,
  },
  // Key simplifies sorting. It is the concatenation of slot+day.
  key: {
    label: 'key',
    type: String,
    optional: false,
  },
  // Each visitor is an object with fields visitorName, detainee Name, visitorID.
  visitors: {
    label: 'visitors',
    type: [Object],
    optional: true,
  },
}));
