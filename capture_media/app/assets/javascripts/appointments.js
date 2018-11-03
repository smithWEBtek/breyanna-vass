function Appointment(attributes) {
    this.name = attributes.name;
    this.date = attributes.date;
    this.quantity = attributes.quantity;
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
            $("div.appointments").val("")
            var appointment = new Appointment(json);
            var appointmentLi = appointment.youScheduled()
            $("div.appointments").append(appointmentLi)
         })
         .error(function(response){
             console.log("You broke it?", response)
         })
         e.preventDefault();
     })
})

// $.get(this.href).success(function(json){
//     var $pictures = $("div#appointments")
//     $pictures.html

//     Object.keys(json).forEach(function(appointment) {
//         // debugger
//         // console.log(key + '=' + obj[key]);
//     });
// });

$(function(){
    $("a#appointments").on("click", function(e){
        $.ajax({
            method: 'GET',
            url: '/users/1/appointments',
            contentType: 'application/json'
            // how to GET appointments using JSON
        }).done(function(response){
            console.log("body")
            // $("div#appointments").append(response)
        })
        e.preventDefault();
    })
})



$(function(){
    $("a.load_package").on("click", function(e) { 
        $.ajax({
            method: "GET",
            url: this.href,
            contentType: 'application/json'
            // how to make the show accept JSON in the request headers
        }).done(function(response){
            $("body").append(response)
        })
        e.preventDefault();
    })
})
