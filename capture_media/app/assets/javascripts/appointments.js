function Appointment(name, date, quantity) {
    this.name = name;
    this.date = date;
    this.quantity = quantity;
}

Appointment.prototype;

Appointment.prototype.youScheduled = function() {
    console.log(`Hello, ${this.name}, your appointment is ${this.date}.`);
};

// $(function(){
//     $("form#new_appointment").on("submit", function(e){
//         var $form = $(this);
//         var action = $form.attr("action");
//         var params = $form.serialize()

//         $.ajax({
//             url: action,
//             data: params,
//             dataType: "json",
//             method: "POST"
//         }).success(function(json){
//             var appointment = new Appointment(json);
//             var appointmentLi = appointment.youScheduled()
//             $("").append(appointmentLi)
//         })
//         .error(function(response){
//             console.log("You broke it?", response)
//         })
//         e.preventDefault();
//     })
// })


$(function(){
    $("a.load_package").on("click", function(e) { 
        $.ajax({
            method: "GET",
            url: this.href,
        }).done(function(response){
            $("body").append(response)
        })
        e.preventDefault();
    })
})
