Template.ticketProfile.onCreated(function() {
    this.subscribe('ticketProfile');
});

Template.ticketProfile.helpers({
    myTickets: function() {
        var tickets = Ticket.find({ "custom": true, "ownerId": Meteor.userId() });
        return { "context": "profile", "content": tickets };
    },
    visitor: function() {
        var getVisitor = Visitors.findOne({ "userId": Meteor.userId() });
        if (getVisitor) {
            getVisitor.context = "profile";
            return getVisitor;
        }
    }
});

Template.ticketProfile.events({
    'submit #contact-information': function(event, template) {
        event.preventDefault();

        var visitor = {
            name: template.find("[name='name']").value,
            dateOfBirth: template.find("[name='dateOfBirth']").value,
            mobilePhone: template.find("[name='mobilePhone']").value,
            stateId: template.find("[name='stateId']").value,
            streetAddress: template.find("[name='streetAddress']").value,
            secondaryAddress: template.find("[name='secondaryAddress']").value,
            city: template.find("[name='city']").value,
            state: template.find("[name='state']").value,
            zipCode: template.find("[name='zipCode']").value,
            userId: this.userId
        };

        Meteor.call('updateVisitor', visitor, function(error, response) {
            if (error) {
                Bert.alert(error.reason, "danger");
            } else {
                Bert.alert("Contact information updated!", "success");
            }
        });
    }
});
