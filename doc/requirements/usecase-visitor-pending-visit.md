# Use Case: Visitor: Pending Visit

Once a visitor has requested a visit and the visit has been scheduled by OCCC staff, Kipa views their state as "PendingVisit".

When the visitor logs into the site, they see a page with documentation of their pending visit: the time, date, dress code required, and any other information they need to know for their visit.

There is also a button "Cancel visit" that enables them to inform OCCC staff that they cannot make the visit.

(Any penalties associated with repeated visit cancellation can be provided to visitors.)

Kipa can also generate text messages on the day of a visit reminding the visitor of their scheduled visit. 

Once the time of the visit has passed, by default the visitor's status goes back to ScheduleVisit.  If something bad happened, OCCC staff can set the user state to Blocked so that they cannot schedule a future visit.