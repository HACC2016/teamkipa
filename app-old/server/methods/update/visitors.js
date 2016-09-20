Meteor.methods({
    updateVisitor: function(visitor) {
        check(visitor, Visitors.simpleSchema());

        try {
            Meteor.users.update({ _id: Meteor.userId() }, {$set: { profile: visitor }});
        } catch (exception) {
            return exception;
        }
    }
});
