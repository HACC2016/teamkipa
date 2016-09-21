Template.ticket.helpers({
    isProfile: function() {
        return Template.instance().data.context === "profile" ? true : false;
    },
    ticket: function() {
        return Template.instance().data.ticket;
    }
});


Template.ticket.events({
    'click .panel': function(event, template) {
        var panel     = template.firstNode,
            isProfile = template.data.context === "profile";

        if (!isProfile) {
            $(panel).addClass('selected');
            $('.panel').not(panel).removeClass('selected');
        }
    }
});
