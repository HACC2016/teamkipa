UI.registerHelper('currentRoute', function(route) {
    return Session.equals('currentRoute', route) ? 'active' : '';
});

/*
 * toCommaString
 * Takes a string of comma separated values and adds spaces between values.
 */

UI.registerHelper('toCommaString', function(array) {
    return array.join(", ");
});

/*
 * toDate
 * Returns the visitDate requested by visitor.
 */

UI.registerHelper('toDate', function(visitDate) {
    return visitDate;
});
