import { TimeSlots, addVisitorToTimeSlot, futureDay, dayRange, clearVisitInfo } from '../../api/timeslot/timeslot.js';
import { Visitors } from '../../api/visitor/visitors.js';
import { _ } from 'meteor/underscore';

const slotNames = ['0730', '0800', '0830', '0900', '0930', '1000', '1030', '1100', '1130', '1200', '1230'];

/** Fill up visit slots with sample visitors */
function assignSampleVisits() {
  // Clear out old visit info.
  const days = dayRange(7);
  _.each(days, function doDay(day) {
    _.each(slotNames, function doSlot(slot) {
      clearVisitInfo(day, slot);
    });
  });

  // Get all visitors.
  const visitors = Visitors.find().fetch();

  // Visitors 0 - 4 fill up the current day, 7:30am slot.
  addVisitorToTimeSlot(futureDay(2), slotNames[0], visitors[0]);
  addVisitorToTimeSlot(futureDay(2), slotNames[0], visitors[1]);
  addVisitorToTimeSlot(futureDay(2), slotNames[0], visitors[2]);
  addVisitorToTimeSlot(futureDay(2), slotNames[0], visitors[3]);
  addVisitorToTimeSlot(futureDay(8), slotNames[10], visitors[4]);

  addVisitorToTimeSlot(futureDay(2), slotNames[2], visitors[5]);
  addVisitorToTimeSlot(futureDay(2), slotNames[2], visitors[6]);
  addVisitorToTimeSlot(futureDay(2), slotNames[2], visitors[7]);
  addVisitorToTimeSlot(futureDay(2), slotNames[2], visitors[8]);
  addVisitorToTimeSlot(futureDay(2), slotNames[2], visitors[9]);

  addVisitorToTimeSlot(futureDay(2), slotNames[4], visitors[10]);
  addVisitorToTimeSlot(futureDay(2), slotNames[4], visitors[11]);
  addVisitorToTimeSlot(futureDay(2), slotNames[4], visitors[12]);
  addVisitorToTimeSlot(futureDay(2), slotNames[4], visitors[13]);
  addVisitorToTimeSlot(futureDay(2), slotNames[4], visitors[14]);

  addVisitorToTimeSlot(futureDay(2), slotNames[3], visitors[15]);
  addVisitorToTimeSlot(futureDay(2), slotNames[3], visitors[16]);
  addVisitorToTimeSlot(futureDay(2), slotNames[3], visitors[17]);
  addVisitorToTimeSlot(futureDay(2), slotNames[3], visitors[18]);
  addVisitorToTimeSlot(futureDay(2), slotNames[3], visitors[19]);

  addVisitorToTimeSlot(futureDay(3), slotNames[3], visitors[20]);
  addVisitorToTimeSlot(futureDay(3), slotNames[3], visitors[21]);
  addVisitorToTimeSlot(futureDay(3), slotNames[3], visitors[22]);
  addVisitorToTimeSlot(futureDay(3), slotNames[3], visitors[23]);
  addVisitorToTimeSlot(futureDay(3), slotNames[3], visitors[24]);

  addVisitorToTimeSlot(futureDay(3), slotNames[1], visitors[25]);
  addVisitorToTimeSlot(futureDay(3), slotNames[1], visitors[26]);
  addVisitorToTimeSlot(futureDay(3), slotNames[1], visitors[27]);
  addVisitorToTimeSlot(futureDay(3), slotNames[1], visitors[28]);
  addVisitorToTimeSlot(futureDay(3), slotNames[1], visitors[29]);

  addVisitorToTimeSlot(futureDay(3), slotNames[2], visitors[30]);
  addVisitorToTimeSlot(futureDay(3), slotNames[2], visitors[31]);
  addVisitorToTimeSlot(futureDay(3), slotNames[2], visitors[32]);
  addVisitorToTimeSlot(futureDay(3), slotNames[2], visitors[33]);
  addVisitorToTimeSlot(futureDay(3), slotNames[2], visitors[34]);

  addVisitorToTimeSlot(futureDay(5), slotNames[3], visitors[35]);
  addVisitorToTimeSlot(futureDay(5), slotNames[3], visitors[36]);
  addVisitorToTimeSlot(futureDay(5), slotNames[3], visitors[37]);
  addVisitorToTimeSlot(futureDay(5), slotNames[3], visitors[38]);
  addVisitorToTimeSlot(futureDay(5), slotNames[3], visitors[39]);

  addVisitorToTimeSlot(futureDay(5), slotNames[2], visitors[40]);
  addVisitorToTimeSlot(futureDay(5), slotNames[2], visitors[41]);
  addVisitorToTimeSlot(futureDay(5), slotNames[2], visitors[42]);
  addVisitorToTimeSlot(futureDay(5), slotNames[2], visitors[43]);
  addVisitorToTimeSlot(futureDay(5), slotNames[2], visitors[44]);
}

/** Initialize the TimeSlots collection if empty with time slots for the next 30 days, plus sample data.  */
function initializeTimeSlots() {
  const days = dayRange(30);

  if (TimeSlots.find().count() === 0) {
    _.each(days, function doDay(day) {
      _.each(slotNames, function doSlot(slot) {
        TimeSlots.insert({ day, slot, key: `${slot}:${day}`, visitInfoList: [], numVisits: 0 });
      });
    });
    console.log('Created timeslots.');
  }
}

// Predefine all the TimeSlots in the Collection for demo purposes.
initializeTimeSlots();

assignSampleVisits();
