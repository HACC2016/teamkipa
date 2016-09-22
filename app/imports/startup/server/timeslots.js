import { TimeSlots, addVisitor, getVisitors } from '../../api/timeslot/timeslot.js';
import { _ } from 'meteor/underscore';


/**
 * A list of TimeSlots to pre-fill the Collection.
 * @type {*[]}
 */
const sampleTimeSlotData = [
  {
    day: '2016-09-22',
    slot: '0730',
    visitor: 'Veronica',
  },
  {
    day: '2016-09-23',
    slot: '0830',
    visitor: 'Velma',
  },
  {
    day: '2016-09-24',
    slot: '0930',
    visitor: 'Violet',
  },
  {
    day: '2016-09-24',
    slot: '0930',
    visitor: 'Vaden',
  },
  {
    day: '2016-09-25',
    slot: '1030',
    visitor: 'Verne',
  },
];

/** Add sample data. */
function addSampleData() {
  _.each(sampleTimeSlotData, (data) => addVisitor(data.day, data.slot, data.visitor));
}

/** Initialize the TimeSlots collection if empty with time slots and sample data.. */
function initializeTimeSlots() {
  const days = ['2016-09-21', '2016-09-22', '2016-09-23', '2016-09-24', '2016-09-25', '2016-09-26', '2016-09-27',
    '2016-09-28', '2016-09-29', '2016-09-30', '2016-10-01', '2016-10-02', '2016-10-03', '2016-10-04', '2016-10-05',
    '2016-10-06'];

  const slotNames = ['0730', '0800', '0830', '0900', '0930', '1000', '1030', '1100', '1130', '1200', '1230'];

  if (TimeSlots.find().count() === 0) {
    _.each(days, function doDay(day) {
      _.each(slotNames, function doSlot(slot) {
        TimeSlots.insert({ day, slot, key: `${slot}:${day}`, visitors: [] });
      });
    });
    addSampleData();
    console.log('Test startup/server/timeslots', getVisitors(sampleTimeSlotData[0].day, sampleTimeSlotData[0].slot));
  }
}

// Predefine all the TimeSlots in the Collection for demo purposes.
initializeTimeSlots();
