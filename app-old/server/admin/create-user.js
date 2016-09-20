Accounts.onCreateUser( function( options, user ) {

    if ( options.profile && options.profile.visitor ) {
        visitor         = options.profile.visitor;
        visitor.userId  = user._id;

        delete options.profile;

        Visitors.insert(visitor);
    }

    if (options.profile) {
        user.profile = options.profile;
    }

    return user;
});
