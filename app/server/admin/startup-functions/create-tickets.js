createTickets = function() {

    var tickets = [{
        "name": "Team Kipa",
        "dateOfBirth": "08/27/16",
        "custom": true
    }];

    var ticketCount = Ticket.find().count();

    if (ticketCount < 1) {
        for (var ticket in tickets) {
            Ticket.insert(tickets[ticket]);
        }
    }
};
