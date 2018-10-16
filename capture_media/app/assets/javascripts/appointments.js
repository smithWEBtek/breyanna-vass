function Appointment(name, date, quantity) {
    this.name = name;
    this.date = date;
    this.quantity = quantity;
}

Appointment.prototype.youScheduled = function() {
    console.log(`Hello, ${this.name}, your appointment is ${this.date}.`);
};



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
