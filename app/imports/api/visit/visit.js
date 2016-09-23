import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { moment } from 'meteor/momentjs:moment';
import { Visitors } from '../visitor/visitors.js';

/* eslint-disable object-shorthand */

// ///////////  Slots ////////////////////////

export const slots = ['0730', '0800', '0830', '0900', '0930', '1000', '1030', '1100', '1130', '1200', '1230'];

// ///////////  Days ////////////////////////

/* Returns today in YYYY-MM-DD format, suitable for the day field. */
export function thisDay() {
  return moment().format('YYYY-MM-DD');
}

/* Returns a future day, determined by incrementing today, in YYYY-MM-DD format, suitable for the day field */
export function futureDay(numDays) {
  return moment().add(numDays, 'days').format('YYYY-MM-DD');
}

// ///////////  Visits ////////////////////////

export const Visits = new Mongo.Collection('Visits');

/**
 * Create the schema for Visits
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
Visits.attachSchema(new SimpleSchema({
  // Day is a string in YYYY-MM-DD format.
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
  // Visitor._id
  visitorID: {
    label: 'visitorID',
    type: String,
    optional: false,
  },
}));

/* Add a new Visit to this collection. */
export function addVisit(day, slot, visitorID) {
  Visits.insert({ day, slot, visitorID });
}

/* Remove all visits associated with this visitorID. */
export function removeVisit(visitorID) {
  Visits.remove({ visitorID });
}

/* Return the Visitor object associated with visitorID. */
export function getVisitor(visitorID) {
  // visitorID is the _id for the Visitor collection.
  return Visitors.findOne(visitorID);
}

/* Delete all visits. */
export function deleteAllVisits() {
  Visits.remove({});
}

/* Return a cursor to the Visits associated with a time and a day. */
export function getTimeSlotVisits(day, slot) {
  return Visits.find({ day, slot });
}

/** Determine if a visitor has a pending visit in the next seven days. */
export function hasPendingVisit(visitorID) {
  Visits.findOne(visitorID, { $gte: { day: thisDay() } });
}
