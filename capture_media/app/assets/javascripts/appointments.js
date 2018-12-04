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
        const y = document.getElementById("client");
        debugger
        y.addEventListener("click", function(event){
            //debugger
            fetchAppointments()
        })
        function fetchAppointments() {
            debugger
            fetch('/users/1/appointments.json')
                .then(response => response.json())
                .then(data => {
                    const appointment = new Appointment(data.name, data.date, data.quantity, data.package_id)
                    const appoinmentHTML = appointment.formatDateHtml()
                    document.getElementById(" ").innerHTML = appoinmentHTML
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
            return `Name: ${this.name}, 
            Date: ${this.date}, 
            Quantity: ${this.quantity}, 
            Package: ${this.package_id}`
        }
    })
});

// $(document).ready(function(){
    //     $("a.load_package").click(function(e){
    //         e.preventDefault();
    //         const x = document.getElementById("package");
    //         x.addEventListener("click", function(event){
    //             fetchPopularPackage()
    //         });
    //         function fetchPopularPackage() {
    //             fetch('/packages/popular.json')
    //                 .then(resp => resp.json())
    //                 .then(data => {
    //                     const package = new Package(data[0].name, data[0].description)
    //                     const packageHTML = package.formatAdmiredHtml()
    //                     debugger
    //                     document.getElementById('admired').innerHTML = packageHTML
    //                 })
    //         }
    //         class Package {
    //             constructor(name, description) {
    //                 this.name = name;
    //                 this.description = description;
    //             }
    //         }
    //         Package.prototype.formatAdmiredHtml = function(){
    //             return `${this.name}  ${this.description}`
    //         }
    //     });
      
    // })
    
