$(document).ready(function () {

})

function showEmail(e) {
    e.preventDefault();
    $('#divEmail').show();
    $('#divOtp').hide();
    $('#divPhone').hide();
    $('#lnkEmail').hide();
    $('#lnkMobile').show();
}

function showPhone(e) {
    e.preventDefault();
    $('#divEmail').hide();
    $('#divOtp').hide();
    $('#divPhone').show();
    $('#lnkEmail').show();
    $('#lnkMobile').hide();
}

function showOtp(e) {
    e.preventDefault();
    $('#divEmail').hide();
    $('#divOtp').show();
    $('#divPhone').hide();
    $('#lnkEmail').show();
    $('#lnkMobile').hide();
}