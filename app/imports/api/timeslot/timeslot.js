import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { moment } from 'meteor/momentjs:moment';

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
    type: [String],
    optional: true,
  },
}));

// TimeSlot manipulation functions.

/* Returns today in YYYY-MM-DD format, suitable for the day field. */
export function thisDay() {
  return moment().format('YYYY-MM-DD');
}

/* Returns a future day, determined by incrementing today, in YYYY-MM-DD format, suitable for the day field */
export function futureDay(numDays) {
  return moment().add(numDays, 'days').format('YYYY-MM-DD');
}

/* Returns an array of numDays days, starting from today, in YYYY-MM-DD format, suitable for the day field. */
export function dayRange(numDays) {
  const days = [];
  for (let i = 0; i < numDays; i++) {
    days.push(futureDay(i));
  }
  return days;
}

/* Returns a week from now in YYYY-MM-DD format, suitable for the day field. */
export function endOfWeek() {
  return moment().add(6, 'days').format('YYYY-MM-DD');
}

/**
 * Returns a cursor to numDays number of timeslots, in row-major order, starting with this Day.
 * @returns {Cursor}
 */
export function getTimeSlotsCursor(numDays) {
  const lastDay = moment().add(numDays, 'days').format('YYYY-MM-DD');
  return TimeSlots.find({ day: { $gte: thisDay(), $lte: lastDay } }, { sort: { key: 1 } });
}

export function getTimeSlotRowData(slot) {
  return TimeSlots.find({ slot, day: { $gte: thisDay(), $lte: endOfWeek() } }, { sort: { key: 1 } });
}


/** Adds visitor to the visitors array for day and slot. */
export function addVisitor(day, slot, visitor) {
  TimeSlots.update({ day, slot }, { $push: { visitors: visitor } });
}

/** Returns the array of visitors associated with the day and slot. */
export function getVisitors(day, slot) {
  return TimeSlots.findOne({ day, slot }).visitors;
}

/** Removes visitor from the passed day and slot. */
export function removeVisitor(day, slot, visitor) {
  TimeSlots.update({ day, slot }, { $pull: { visitors: visitor } });
}
