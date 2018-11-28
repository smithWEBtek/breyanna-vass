function Appointment(attributes) {
    this.name = attributes.name;
    this.date = attributes.date;
    this.quantity = attributes.quantity;
    this.package_id = attributes.package_id;
}

function Package(attributes) {
    this.name = attributes.name;
    this.description = attributes.description;
}

Appointment.prototype;

Appointment.prototype.youScheduled = function() {
    // console.log(`Hello, ${this.name}, your appointment is ${this.date}.`);
    return `Hello ${this.name}, your appointment is ${this.date}`;
    // alert {`Hello ${this.name}, your appointment is ${this.date}`};
};

$(function(){
     $("form#new_appointment").on("submit", function(e){
         var $form = $(this);
         var action = $form.attr("action");
         var params = $form.serialize()

         $.ajax({
             url: action,
             data: params,
             dataType: "json",
             method: "POST"
         }).success(function(json){
            //console.log(json)
            $("div.appointments").val(" ")
            var appointment = new Appointment(json);
            var appointmentLi = appointment.youScheduled()
            document.getElementById("scheduled").innerHTML = appointmentLi //"Hello " + appointment.name + ", " + "your appointment is " + appointment.date + ".";
            // $("div.appointments").append(appointmentLi)
         })
         .error(function(response){
             console.log("You broke it?", response)
         })
        e.preventDefault();
     })
})


// JUST HAVE THE APPOINTMENTS LOAD ON THE INDEX/ HOME PAGE INSTEAD USING A LINK TO CLICK SO THAT IT LOADS PROPERLY
// will this work in a document ready function?

// how to implement load without clicking link/ how to get fetch?

    // const link = document.getElementById('current_appointments')
    // link.addEventListeners('click', function(event){
        // fetchAppointments()
    // });
    //$( document ).ready(function() {
        //function fetchAppointments() {
            // fetch('/users/1/appointments.json')
                // .then(response => response.json())
                // .then(data => {
                    // const appointment = new Appointment
                    // const appointmentHTML = appointment.formatDateHtml()
                    // document.getElementById('').innerHTML = appointmentHTML
                // })
        // }
      //});
    // function fetchAppointments() {
        // fetch('/users/1/appointments.json')
            // .then(response => response.json())
            // .then(data => {
                // const appointment = new Appointment
                // const appointmentHTML = appointment.formatDateHtml()
                // document.getElementById('').innerHTML = appointmentHTML
            // })
    // }
    // Appointment.prototype.formatDateHtml = function(){
        // return `Name: ${this.name}
        // Date: ${this.date}
        // Quantity: ${this.quantity}
        // Package: ${this.package_id}`
    // }

$(document).ready(function(){
    $("a.load_package").click(function(e){
        e.preventDefault();
        const x = document.getElementById("package");
        x.addEventListener("click", function(event){
            fetchPopularPackage()
        });
        function fetchPopularPackage() {
            fetch('/packages/popular.json')
                .then(resp => resp.json())
                .then(data => {
                    const package = new Package(data.name, data.description)
                    debugger
                    const packageHTML = package.formatAdmiredHtml()
                    document.getElementsByClassName('admired').innerHTML = packageHTML
                })
        }
        class Package {
            constructor(name, description) {
                this.name = name;
                this.description = description;
            }
        }
        Package.prototype.formatAdmiredHtml = function(){
            return `${this.name} + " " ${this.description} + " ."`
        }
    });
  
});

