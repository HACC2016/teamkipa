import { slots, futureDay, addVisit, deleteAllVisits } from '../../api/visit/visit.js';
import { Visitors } from '../../api/visitor/visitors.js';


function initializeVisits() {
  deleteAllVisits();

  // Get all visitors.
  const visitors = Visitors.find().fetch();

  addVisit(futureDay(2), slots[0], visitors[0]._id);
  addVisit(futureDay(2), slots[0], visitors[1]._id);
  addVisit(futureDay(2), slots[0], visitors[2]._id);
  addVisit(futureDay(2), slots[0], visitors[3]._id);
  addVisit(futureDay(8), slots[10], visitors[4]._id);

  addVisit(futureDay(2), slots[2], visitors[5]._id);
  addVisit(futureDay(2), slots[2], visitors[6]._id);
  addVisit(futureDay(2), slots[2], visitors[7]._id);
  addVisit(futureDay(2), slots[2], visitors[8]._id);
  addVisit(futureDay(2), slots[2], visitors[9]._id);

  addVisit(futureDay(2), slots[4], visitors[10]._id);
  addVisit(futureDay(2), slots[4], visitors[11]._id);
  addVisit(futureDay(2), slots[4], visitors[12]._id);
  addVisit(futureDay(2), slots[4], visitors[13]._id);
  addVisit(futureDay(2), slots[4], visitors[14]._id);

  addVisit(futureDay(2), slots[3], visitors[15]._id);
  addVisit(futureDay(2), slots[3], visitors[16]._id);
  addVisit(futureDay(2), slots[3], visitors[17]._id);
  addVisit(futureDay(2), slots[3], visitors[18]._id);
  addVisit(futureDay(2), slots[3], visitors[19]._id);

  addVisit(futureDay(3), slots[3], visitors[20]._id);
  addVisit(futureDay(3), slots[3], visitors[21]._id);
  addVisit(futureDay(3), slots[3], visitors[22]._id);
  addVisit(futureDay(3), slots[3], visitors[23]._id);
  addVisit(futureDay(3), slots[3], visitors[24]._id);

  addVisit(futureDay(3), slots[1], visitors[25]._id);
  addVisit(futureDay(3), slots[1], visitors[26]._id);
  addVisit(futureDay(3), slots[1], visitors[27]._id);
  addVisit(futureDay(3), slots[1], visitors[28]._id);
  addVisit(futureDay(3), slots[1], visitors[29]._id);

  addVisit(futureDay(3), slots[2], visitors[30]._id);
  addVisit(futureDay(3), slots[2], visitors[31]._id);
  addVisit(futureDay(3), slots[2], visitors[32]._id);
  addVisit(futureDay(3), slots[2], visitors[33]._id);
  addVisit(futureDay(3), slots[2], visitors[34]._id);

  addVisit(futureDay(5), slots[3], visitors[35]._id);
  addVisit(futureDay(5), slots[3], visitors[36]._id);
  addVisit(futureDay(5), slots[3], visitors[37]._id);
  addVisit(futureDay(5), slots[3], visitors[38]._id);
  addVisit(futureDay(5), slots[3], visitors[39]._id);

  addVisit(futureDay(5), slots[2], visitors[40]._id);
  addVisit(futureDay(5), slots[2], visitors[41]._id);
  addVisit(futureDay(5), slots[2], visitors[42]._id);
  addVisit(futureDay(5), slots[2], visitors[43]._id);
  addVisit(futureDay(5), slots[2], visitors[44]._id);

  console.log('Re-initialized all visits.');
}

initializeVisits();
