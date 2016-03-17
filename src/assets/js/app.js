/* global Foundation */
$(document).foundation();
$('#forgotPassword').click(function () {
    $('#forgotPaswordModal').foundation('open');
});
$('#cancelRegisterBtn').click(function () {
    $('#registerAccountModal').foundation('close');
});

$('#loginForm').submit(function (e) {
    e.preventDefault();
    document.location = 'main.html';
    return false;
});
$('#registerForm').submit(function (e) {
    e.preventDefault();
    $('#registerAccountModal').foundation('close');
    $('#thankYouForRegisteringModal').foundation('open');
    return false;
});
