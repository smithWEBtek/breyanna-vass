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
    const link = document.getElementById('appointments')
    link.addEventListeners('click', function(event){
        debugger
        fetchAppointments()
    })
});
