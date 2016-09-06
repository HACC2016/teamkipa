// var documents = FlowRouter.group({
//   prefix: '/documents'
// });

// // http://localhost:3000/documents
// documents.route( '/', {
//   action: function() {
//     console.log( "We're viewing a list of documents." );
//   }
// });

// // http://localhost:3000/documents/:_id
// documents.route( '/:_id', {
//   action: function() {
//     console.log( "We're viewing a single document." );
//   }
// });

// // http://localhost:3000/documents/:_id/edit
// documents.route( '/:_id/edit', {
//   action: function() {
//     console.log( "We're editing a single document." );
//   }
// });

FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('HomeLayout', {main: 'test'});
  }
});

FlowRouter.route('/dashboard', {
  name: 'dashboard',
  action() {
    BlazeLayout.render('dashboard');
  }
});
