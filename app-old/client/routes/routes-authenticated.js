Router.route('profile', {
    path: '/profile',
    template: 'ticketProfile',
    onBeforeAction: function() {
        Session.set('currentRoute', 'profile');
        this.next();
    }
});
