// import { Mongo } from 'meteor/mongo';
// import { SimpleSchema } from 'meteor/aldeed:simple-schema';
// import { moment } from 'meteor/momentjs:moment';
//
// /* eslint-disable object-shorthand */
//
// export const timeSlots = 'TimeSlots';  // avoid typos, this string occurs three times.
// export const TimeSlots = new Mongo.Collection(timeSlots);
//
// /**
//  * Create the schema for TimeSlots
//  * See: https://github.com/aldeed/meteor-autoform#common-questions
//  * See: https://github.com/aldeed/meteor-autoform#affieldinput
//  */
// TimeSlots.attachSchema(new SimpleSchema({
//   // Day is a string in YYYY-MM-DD format.
//   day: {
//     label: 'day',
//     type: String,
//     optional: false,
//   },
//   // Slot must be one of ["0730", "0800", "0830", ... "1230"]
//   slot: {
//     label: 'slot',
//     type: String,
//     optional: false,
//   },
//   // I think we can get rid of Key.
//   key: {
//     label: 'key',
//     type: String,
//     optional: false,
//   },
//   // Indicates the number of current visits associated with this slot.
//   // Must be a number between 0 and 5.
//   // In the prototype, it is technically possible under race conditions to get more than 5 visits,
//   // But OCCC staff can always cancel an extra visit during the 24 hour freeze period.
//   // In production, we can add additional validation to further lower the odds of this happening.
//   numVisits: {
//     label: 'numVisits',
//     type: Number,
//     optional: false,
//   },
//   // VisitInfoList is a list of strings that get packed/unpacked for details on a visitor during this time slot.
//   visitInfoList: {
//     label: 'visitInfoList',
//     type: [String],
//     optional: true,
//   },
// }));
//
// // Time manipulation functions for "days" and "slots".
//
// /* Returns today in YYYY-MM-DD format, suitable for the day field. */
// export function thisDay() {
//   return moment().format('YYYY-MM-DD');
// }
//
// /* Returns a future day, determined by incrementing today, in YYYY-MM-DD format, suitable for the day field */
// export function futureDay(numDays) {
//   return moment().add(numDays, 'days').format('YYYY-MM-DD');
// }
//
// /* Returns an array of numDays days, starting from today, in YYYY-MM-DD format, suitable for the day field. */
// export function dayRange(numDays) {
//   const days = [];
//   for (let i = 0; i < numDays; i++) {
//     days.push(futureDay(i));
//   }
//   return days;
// }
//
// /* Returns a week from now in YYYY-MM-DD format, suitable for the day field. */
// export function endOfWeek() {
//   return moment().add(6, 'days').format('YYYY-MM-DD');
// }
//
// //  VisitInfo Data structure.
//
// export function makeVisitInfo(visitorID, firstName, lastName) {
//   const visitInfo = [visitorID, firstName, lastName];
//   return visitInfo.join(' ');
// }
//
// export function getVisitorId(visitInfo) {
//   return visitInfo.split(' ')[0];
// }
//
// export function getVisitorFirstName(visitInfo) {
//   return visitInfo.split(' ')[1];
// }
//
// export function getVisitorLastName(visitInfo) {
//   return visitInfo.split(' ')[2];
// }
//
// // Query functions that return a cursor to a subset of TimeSlot documents.
//
// export function getTimeSlotRowData(slot) {
//   return TimeSlots.find({ slot, day: { $gte: thisDay(), $lte: endOfWeek() } }, { sort: { day: 1 } });
// }
//
// export function getAvailableTimeSlotsForDay(day) {
//   return TimeSlots.find({ day: day, numVisits: { $lt: 5 } });
// }
//
// /** Adds visitInfo to the visitInfoList array for day and slot. */
// export function addVisitInfo(day, slot, visitInfo) {
//   TimeSlots.update({ day, slot }, { $push: { visitInfoList: visitInfo }, $inc: { numVisits: 1 } });
// }
//
// export function addVisitorToTimeSlot(day, slot, visitor) {
//   const visitInfo = makeVisitInfo(visitor._id, visitor.firstname, visitor.lastname);
//   addVisitInfo(day, slot, visitInfo);
// }
//
//
// /** Returns the array of VisitInfo strings associated with the day and slot. */
// export function getVisitInfoList(day, slot) {
//   return TimeSlots.findOne({ day, slot }).visitInfoList;
// }
//
// /** Removes visitor from the passed day and slot. */
// export function removeVisitInfo(day, slot, visitInfo) {
//   TimeSlots.update({ day, slot }, { $pull: { visitInfoList: visitInfo }, $inc: { numVisits: -1 } });
// }
//
// export function clearVisitInfo(day, slot) {
//   TimeSlots.update({ day, slot }, { $set: { visitInfoList: [], numVisits: 0 } });
// }
//
// //   VisitorId functions.
//
// /** Determine if a visitor has a pending visit in the next seven days. */
// export function hasPendingVisit(visitorID) {
//
// }
