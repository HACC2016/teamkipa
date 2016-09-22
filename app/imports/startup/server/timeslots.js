import { TimeSlots, addVisitInfo, futureDay, dayRange } from '../../api/timeslot/timeslot.js';
import { _ } from 'meteor/underscore';


/**
 * A list of TimeSlots to pre-fill the Collection. Sample data starts with today and goes forward a few days.
 * @type {*[]}
 */
const sampleTimeSlotData = [
  {
    day: futureDay(3),
    slot: '0730',
    visitInfo: 'Veronica1',
  },
  {
    day: futureDay(3),
    slot: '0730',
    visitInfo: 'Veronica2',
  },
  {
    day: futureDay(3),
    slot: '0730',
    visitInfo: 'Veronica3',
  },
  {
    day: futureDay(3),
    slot: '0730',
    visitInfo: 'Veronica4',
  },
  {
    day: futureDay(3),
    slot: '0730',
    visitInfo: 'Veronica5',
  },
  {
    day: futureDay(1),
    slot: '0830',
    visitInfo: 'Velma',
  },
  {
    day: futureDay(2),
    slot: '0930',
    visitInfo: 'Violet',
  },
  {
    day: futureDay(2),
    slot: '0930',
    visitInfo: 'Vaden',
  },
  {
    day: futureDay(4),
    slot: '1030',
    visitInfo: 'Verne',
  },
];

/** Add sample data. */
function addSampleData() {
  _.each(sampleTimeSlotData, (data) => addVisitInfo(data.day, data.slot, data.visitInfo));
}

/** Initialize the TimeSlots collection if empty with time slots for the next 30 days, plus sample data.  */
function initializeTimeSlots() {
  const days = dayRange(30);

  const slotNames = ['0730', '0800', '0830', '0900', '0930', '1000', '1030', '1100', '1130', '1200', '1230'];

  if (TimeSlots.find().count() === 0) {
    _.each(days, function doDay(day) {
      _.each(slotNames, function doSlot(slot) {
        TimeSlots.insert({ day, slot, key: `${slot}:${day}`, visitInfoList: [], numVisits: 0 });
      });
    });
    addSampleData();
    console.log('TimeSlot Collection initialized and sample data now added.');
  }
}

// Predefine all the TimeSlots in the Collection for demo purposes.
initializeTimeSlots();

