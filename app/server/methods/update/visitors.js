Meteor.methods({
    updateVisitor: function(visitor) {
        check(visitor, Visitors.simpleSchema());

        try {
            var visitorId = Visitors.update({ "userId": visitor.userId}, {
                $set: { visitor }
            });

            return visitorId;
        } catch (exception) {
            return exception;
        }
    }
});
