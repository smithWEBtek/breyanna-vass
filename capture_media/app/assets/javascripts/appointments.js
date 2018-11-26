function Appointment(attributes) {
    this.name = attributes.name;
    this.date = attributes.date;
    this.quantity = attributes.quantity;
    this.package_id = attributes.package_id;
}

function Packages(attributes) {
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


$(function(){
    $("a#appointments").on("click", function(e){
        // $.ajax({
        //     method: 'GET',
        //     url: '/users/1/appointments.json',
        //     dataType: 'json'
        //     // how to GET appointments using JSON
        // }).done(function(response){
        //     debugger
        //     // console.log("div#appointments", response)
        //     // Be sure to format the appointments using Alice's example for JSON formatting: https://codepen.io/Balbasuar/pen/LXNyrV?editors=1010
        //     $("div#appointments").append(response)
        // })
// THE FOLLOWING CODE IS MEANT TO DISPLAY JSON WITHOUT USING JQUERY, BUT USING FETCH INSTEAD
        // e.preventDefault()
        var url = '/users/1/appointments.json'
        fetch(url)
        .then(response => response.json())
        .then(data => {
            //debugger
            // const appointment = new Appointment(data.message)
            // const appointmentHTML = appointment.formatDateHtml()
            // debugger
            // data.forEach(user => {
            //     var textnode = document.createTextNode(user.name);         // Create a text node  
            //     //debugger 
            //     document.getElementById('root_appointments').appendChild(textnode)
            })
        // })
        // }

        // // // Class Appointment {
        // // //     Constructor(message){
        // // //         This.name = message
        // // //     }
        // // // }

        // // // Appointment.prototype.formatDateHtml = function(){
        // // //     Return `Name: ${this.name}
        // // //     Date: ${this.date}
        // // //     Quantity:${this.quantity}
        // // //     Package: ${this.package_id}`c
        // // // }

        // e.preventDefault();
    })
})


$(document).ready(function(){
    $("a.load_package").click(function(e){
        e.preventDefault();
        $.ajax({
            method: "GET",
            dataType: 'json',
            url: '/packages/popular.json'})
        .done(data => packagePopular(data))
      
        fetch('/packages/popular.json')
            .then(resp => resp.json())
            .then(data => {
                const package = new Packages(data.message)
                const packageHTML = formatAdmiredHtml()
                document.getElementsByClassName('admired').innerHTML = packageHTML
            });
    });
  
});

class Package {
    constructor(message) {
        this.name = message
    }
}

Package.prototype.formatAdmiredHtml = function(){
    return `${this.name} + " " ${this.description} + " ."`
}


// $(function(){
//     $("a.load_package").on("click", function(e) { 
//         $.ajax({
//             method: "GET",
//             url: '/packages/popular.json',
//             dataType: 'json'
//         }).done(function(response){
//             console.log("a.load_package", response)
//             // how to append the JSON to the page
//             // Be sure to format the appointments using Alice's example for JSON formatting: https://codepen.io/Balbasuar/pen/LXNyrV?editors=1010
//             // return this.name + " " + this.description
//             $("div.popular").append(response);
//         })
//         e.preventDefault();

//         // fetch('/packages/popular.json').then(response => response.json()).then(data => {
//         // const packageHTML = package.formatAdmiredHrml()
//         // })
        
//     })
// })
