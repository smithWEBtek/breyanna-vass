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
    return `Hello ${this.name}, your appointment is ${this.date}`;
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
            $("div.appointments").val(" ")
            var appointment = new Appointment(json);
            var appointmentLi = appointment.youScheduled()
            document.getElementById("scheduled").innerHTML = appointmentLi
         })
         .error(function(response){
             console.log("You broke it?", response)
         })
        e.preventDefault();
     })
})

$(document ).ready(function(){
    $("a#appointments").click(function(e){
        e.preventDefault();
        //debugger
        fetchAppointments()
    })
    function fetchAppointments(){
        fetch('/users/1/appointments.json')
            .then(response => response.json())
            .then(data => createAppointments(data))
    }
    function createAppointments(data){
        data.forEach(appt => {
            let appointment = new Appointment(appt.name, appt.date, appt.quantity, appt.package_id)
            let appointmentHTML = appointment.formatDateHtml()
            // debugger
            document.getElementById("client").innerHTML += appointmentHTML + "<br>";
        })
    }
    class Appointment{
        constructor(name, date, quantity, package_id){
            this.name = name;
            this.date = date;
            this.quantity = quantity;
            this.package_id = package_id
        }
    }
    Appointment.prototype.formatDateHtml = function() {
        // use a loop to get all of the information to every appointment
        return `Name: ${this.name} <br> 
        Date: ${this.date} <br> 
        Quantity: ${this.quantity} <br> 
        Package: ${this.package_id}`
    }
});

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
                    const package = new Package(data[0].name, data[0].description)
                    const packageHTML = package.formatAdmiredHtml()
                    debugger
                    document.getElementById('admired').innerHTML = packageHTML
                })
        }
        class Package {
            constructor(name, description) {
                this.name = name;
                this.description = description;
            }
        }
        Package.prototype.formatAdmiredHtml = function(){
            return `${this.name}  ${this.description}`
         }
    });
      
})
    
