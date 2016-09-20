Template.request.onCreated(function() {
    this.subscribe('request');

    this.currentRequest = new ReactiveDict();

    if (Meteor.user()) {
        this.currentRequest.set("type", "My Dates");
    } else {
        this.currentRequest.set("type", "Available Dates");
    }

    this.currentRequest.set("ticket", { "name": "test", "date": new Date() });
});

Template.request.onRendered(function() {

    var template = Template.instance();

    $("#place-request").validate({
        rules: {
            name: {
                required: true
            },
            dateOfBirth: {
                required: true
            },
            mobilePhone: {
                required: true
            },
            stateId: {
                required: true
            },
            streetAddress: {
                required: true
            },
            city: {
                required: true
            },
            state: {
                required: true
            },
            zipCode: {
                required: true
            },
            emailAddress: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 6
            }
        },
        submitHandler: function() {
            var requestData = template.currentRequest,
                type        = requestData.get("type"),
                ticket      = requestData.get("ticket"),
                request     = {};

            if (Meteor.user()) {
                request.visitor = Meteor.userId();
            } else {
                request.visitor = {
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
                }

                request.credentials = {
                    email: template.find("[name='emailAddress']").value,
                    password: template.find("[name='password']").value
                }
            }

            // if (ticket.name === "Pick a date!") {
            //     Bert.alert("Make sure to pick a date!", "warning");
            // } else {
            //     request.ticket = ticket._id ? ticket._id : customTicket;

            //     Meteor.call("placeRequest", request, function(error, response) {
            //         if (error) {
            //             Bert.alert(error.reason, "danger");
            //         } else {
            //             Bert.alert("Request submitted!", "success");

            //             if (request.credentials) {
            //                 Meteor.loginWithPassword( request.credentials.email,
            //                 request.credentials.password );
            //             }

            //             Router.go("/profile");
            //         }
            //     });
            // }
        }
    });
});

Template.request.helpers({
    visitor: function() {
        if (Meteor.userId()) {
            var getVisitor = Visitors.findOne({ "userId": Meteor.userId() });
        } else {
            var getVisitor = {};
        }

        if (getVisitor) {
            getVisitor.context = "request";
            return getVisitor;
        }
    },
    request: function() {
        var currentRequest = Template.instance().currentRequest,
            type           = currentRequest.get("type"),
            ticket         = currentRequest.get("ticket"),
            date           = currentRequest.get("date");

        if (type !== "Custom Ticket") {
            var getTicket = ticket._id ? Ticket.findOne({ "_id": ticket._id }) : ticket;
        } else {
            var getTicket = {
                name: "Customize your ticket!",
                date: new Date()
            }
        }

        if (getTicket) {
            return {
                type: ticket.name !== "Pick a ticket!" ? type : null,
                ticket: getTicket,
                visitDate: getTicket.visitDate
            }
        }
    }
});

Template.request.events({
    'click .nav-tabs li': function(event, template) {
        var requestType = $(event.target).closest("li").data("ticket-type");

        template.currentRequest.set("type", requestType);

        if (requestType !== "Custom Ticket") {
            template.currentRequest.set("ticket", { "name": "Pick a ticket!", "date": new Date() });
        } else {
            template.currentRequest.set("ticket", { "name": "Customize your ticket!", "date": new Date() });
        }
    },
    'click .ticket': function(event, template) {
        template.currentRequest.set("ticket", this);

        if (this.custom) {
            template.currentRequest.set("type", "My Tickets");
        } else {
            template.currentRequest.set("type", "Popular Tickets");
        }
    },
    'submit form': function(event) {
        event.preventDefault();
    }
});
