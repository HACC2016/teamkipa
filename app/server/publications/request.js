Meteor.publish( 'request', function(){

  var user = this.userId;

  if ( user ) {
    var data = [
      Ticket.find( { $or: [ { "custom": true, "ownerId": user }, { "custom": false } ] } ),
      Visitors.find( { "userId": user } )
    ];
  } else {
    var data = Ticket.find( { "custom": false } );
  }

  if ( data ) {
    return data;
  }

  return this.ready();
});