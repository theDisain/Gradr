/* global Foundation */
$(document).foundation();
$('#forgotPassword').click(function () {
    $('#forgotPaswordModal').foundation('open');
});
$('#loginForm').submit(function() {
    window.location.href = "http://stackoverflow.com";
    return false;
});
