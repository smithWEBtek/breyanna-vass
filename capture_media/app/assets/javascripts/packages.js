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
    // we need to fetch the serialized and append the data to myPackages page
}