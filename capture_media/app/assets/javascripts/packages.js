$(document).ready(function () {
    listingAppointments();
});

function listingAppointments() {
    $("a.favored").click(function (e) {
        e.preventDefault();
        fetchSelectedAppointments()
    })
}

function fetchSelectedAppointments() {

}