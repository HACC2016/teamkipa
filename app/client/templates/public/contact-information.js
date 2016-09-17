Template.contactInformation.helpers({
    isProfile: function(location) {
        return Template.instance().data.context === "profile" ? true : false;
    }
});

Template.contactInformation.events({
    'click input[type="submit"]': function(event, template) {
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
