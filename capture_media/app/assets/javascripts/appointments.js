
$(document).ready(function () {
    listenMyAppointments();
    listingPickedDates();
});


function Package(attributes) {
    this.name = attributes.name;
    this.description = attributes.description;
}


$(function () {
    $("form#new_appointment").on("submit", function (e) {
        //debugger
        var $form = $(this);
        var action = $form.attr("action");
        var params = $form.serialize()

        $.ajax({
            url: action,
            data: params,
            dataType: "json",
            method: "POST"
        }).success(function (json) {
            $("div.appointments").val(" ")
            var appointment = new Appointment(json);
            var appointmentLi = appointment.youScheduled()
            document.getElementById("scheduled").innerHTML = appointmentLi
        })
            .error(function (response) {
                console.log("You broke it?", response)
            })
        e.preventDefault();
        listenMyAppointments();
    })
})

function listenMyAppointments() {
    $("a#appointments").click(function (e) {
        e.preventDefault();
        fetchAppointments()
    })
}

function fetchAppointments() {
    fetch('/users/1/appointments.json')
        .then(response => response.json()
            .then(data => createAppointments(data))
        )
}

function createAppointments(data) {
    data.forEach((appt) => {
        let appointment = new Appointment(appt)
        let appointmentHTML = appointment.formatDateHtml()
        $("div#client").append(appointmentHTML + "<br>")
        console.log("appoinment.formatAdmiredHtml()")
        //document.getElementById("client").innerHTML += appointmentHTML + "<br>";
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

Appointment.prototype.youScheduled = function () {
    return `Hello ${this.name}, your appointment is ${this.date}`;
};

Appointment.prototype.formatDateHtml = function () {
    // use a loop to get all of the information to every appointment
    return `Name: ${this.name}   
        Date: ${this.date} 
        Quantity: ${this.quantity}   
        Package: ${this.package_id}`
}


$(document).ready(function () {
    $("a.load_package").click(function (e) {
        e.preventDefault();
        const x = document.getElementById("package");
        x.addEventListener("click", function (event) {
            fetchPopularPackage()
        });
        function fetchPopularPackage() {
            fetch('/packages/popular.json')
                .then(resp => resp.json())
                .then(data => {
                    const package = new Package(data.name, data.description)
                    const packageHTML = package.formatAdmiredHtml()
                    //debugger
                    document.getElementById('admired').innerHTML = packageHTML
                })
        }
        class Package {
            constructor(name, description) {
                this.name = name;
                this.description = description;
            }
        }
        Package.prototype.formatAdmiredHtml = function () {
            return `${this.name}  ${this.description}`
        }
    });
    listenMyAppointments();
})

function listingPickedDates() {
    $("a.favored").click(function (e) {
        $.ajax({
            url: this.url,
            data: params,
            dataType: "json",
            method: "POST"
        }).success(function (json) {
            // clear the HTML in the div
            debugger
            var $choosen = $("div.choosen")
            $choosen.html("") //empties the div
            // iterate over each appointment within JSON
            var appoinment = new Appointment(json);
            var peopleChoice = appoinment.selectedDateAndName()
            document.getElementById("choosen").innerHTML = peopleChoice
            // with each appointment data, append a name and date
            debugger
        })
            .error(function (response) {
                console.log("Something went wrong!!!", response)
            })
        e.preventDefault();
    })
}

Appointment.prototype.selectedDateAndName = function () {
    return `${this.name} has selected this package for ${this.date}.`
}
