/* global Foundation */
$(document).foundation();
$('#forgotPassword').click(function () {
    $('#forgotPaswordModal').foundation('open');
});
$('#cancelRegisterBtn').click(function () {
    $('#registerAccountModal').foundation('close');
});
$('#redirectToLoginPageBtn').click(function () {
    $('#thankYouForRegisteringModal').foundation('close');
});

$('#loginForm').submit(function (e) {
    e.preventDefault();
    document.location = 'main.html';
    return false;
});
$('#registerForm').submit(function (e) {
    e.preventDefault();
    document.location = 'main.html';
    return false;
});
$('#mLearningTable').click(function () {
    $("#providerTable").html(" <thead> <tr> <th width='200'>Name</th> <th>Student Code</th> <th>Points</th> <th width='150'>Points after calculation</th> <th width='150'>Final Grade</th> </tr></thead> <tbody> <tr> <td>Ain-Joonas Toose</td><td>134301IAPB</td><td>100</td><td>89</td><td>  <select><option value='0'>0</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4' selected='selected'>4</option><option value='5'>5</option></select></td></tr><tr> <td>Oliver Tiit</td><td>134401IAPB</td><td>100</td><td>110</td><td><select><option value='0'>0</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5' selected='selected'>5</option></select></td></tr><tr> <td>Allar Viinamäe</td><td>134302IAPB</td><td>88</td><td>96</td><td><select><option value='0'>0</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5' selected='selected'>5</option></select></td></tr></tbody>");
});
$('#mLearningTotal').click(function () {
    $("#searchStudentDiv").html("<input type='text' id='searchStudent' placeholder='Look for a student'>")
    $("#providerTable").html(" <thead> <tr> <th width='200'>Name</th> <th>Student Code</th> <th>Test 1</th> <th>Test 2</th><th>Final Points</th> <th>Final Grade</th> </tr></thead> <tbody> <tr> <td>Ain-Joonas Toose</td><td>134301IAPB</td><td>100</td><td>89</td><td>197</td><td><select><option value='0'>0</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'selected='selected'>4</option><option value='5'>5</option></select></td></tr><tr> <td>Oliver Tiit</td><td>134401IAPB</td><td>100</td><td>110</td><td>210</td><td><select><option value='0'>0</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5' selected='selected'>5</option></select></td></tr><tr> <td>Allar Viinamäe</td><td>134302IAPB</td><td>88</td><td>96</td><td>184</td><td><select><option value='0'>0</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5' selected='selected'>5</option></select></td></tr></tbody>");

    $("#providedTable").html(" <thead> <tr> <th width='200'>Name</th> <th>Student Code</th> <th>Test 1</th> <th>Test 2</th><th>Final Points</th> <th>Final Grade</th> </tr></thead> <tbody> <tr> <td>Ain-Joonas Toose</td><td>134301IAPB</td><td>100</td><td>89</td><td>197</td><td>4</td></tr><tr></tbody>");
});

var $rows = $('#providerTable tr');
$('#searchStudent').keyup(function() {
    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
    
    $rows.show().filter(function() {
        var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
        return !~text.indexOf(val);
    }).hide();
});
