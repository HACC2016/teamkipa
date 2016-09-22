import { TimeSlots } from '../../api/timeslot/timeslot.js';
import { _ } from 'meteor/underscore';

/**
 * A list of TimeSlots to pre-fill the Collection.
 * @type {*[]}
 */
const sampleTimeSlots = [
  {
    day: '2016-09-22',
    slot: '0730',
    key: '2016-09-22:0730',
    visitors: [
      {
        visitorName: 'Verona',
        detaineeName: 'Darby',
      },
      {
        visitorName: 'Valerie',
        detaineeName: 'Douglas',
      },
    ],
  },
  {
    day: '2016-09-23',
    slot: '0830',
    key: '2016-09-23:0830',
    visitors: [
      {
        visitorName: 'Victor',
        detaineeName: 'Dobro',
      },
      {
        visitorName: 'Veena',
        detaineeName: 'Daiko',
      },
    ],
  },
];

const days = ['2016-09-22', '2016-09-23', '2016-09-24', '2016-09-25', '2016-09-26', '2016-09-27', '2016-09-28', '2016-09-29', '2016-09-30', '2016-10-01', '2016-10-02', '2016-10-03', '2016-10-04', '2016-10-05', '2016-10-06'];

const slotNames = ['0730', '0800', '0830', '0900', '0930', '1000', '1030', '1100', '1130', '1200', '1230'];



/**
 * Initialize the TimeSlots collection if empty with seed data. ok.
 */
if (TimeSlots.find().count() === 0) {
  _.each(days, function doDay(day){
    _.each(slotNames, function doSlot(slot) {
      let timeSlot = { day, slot, key: `${slot}:${day}`, visitors: []};

    })
  }
  );
} else {
  console.log(`Starting up system with ${TimeSlots.find().count()} time slots.`);
}

