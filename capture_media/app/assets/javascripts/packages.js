$(document).ready(function () {
    listingPickedDates();
});

function listingPickedDates() {
    $("a.favored").click(function (e) {
        $.get(this.href).success(function (json) {
            // clear the HTML in the div
            var $choosen = $("div.choosen")
            $choosen.html("") //empties the div
            // iterate over each appointment within JSON
            json.forEach((person) => {
                // Appointment is already being used so I need a new name or a more concise way of getting the appointment data
                let appointment = new Appointment(person.name, person.date)
                let peopleChoice = appointment.selectedDateAndName()
                $choosen.append(peopleChoice + "<br>")
            });
            // with each appointment data, append a name and date
            debugger
        })
        e.preventDefault();
    })
}

class Appointment {
    constructor(attributes) {
        this.name = attributes.name;
        this.date = attributes.date;
        this.quantity = attributes.quantity;
        this.package_id = attributes.package_id;
    }
}

Appointment.prototype.selectedDateAndName = function () {
    return `${this.name} has selected this package for ${this.date}.`
}
