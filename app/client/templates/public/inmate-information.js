Template.inmateInformation.helpers({
    isProfile: function(location) {
        return Template.instance().data.context === "profile" ? true : false;
    }
});

Template.inmateInformation.events({
    'click input[type="submit"]': function(event, template) {
        event.preventDefault();

        var inmate = {
            name: template.find("[name='name']").value,
            dateOfBirth: template.find("[name='dateOfBirth']").value,
            stateId: template.find("[name='stateId']").value,
            userId: this.userId
        };
    }
});
