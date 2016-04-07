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
$('#submitForm').click(function () {
    $('#submitAssignment').foundation('open');
});

$('#submitGrade').click(function (e) {
    e.preventDefault();
    $('#submitGradeModal').foundation('open');
    setTimeout(function () {
        $('#submitGradeModal').foundation('close');
    }, 2000);
});

$('#loginForm').submit(function (e) {
    e.preventDefault();
    document.location = 'main.html';
    return false;
});
$('#registerForm').submit(function (e) {
    var selectedOption = $('#selectRole').find(":selected").val();
    if (selectedOption == "teacher") {
        e.preventDefault();
        document.location = 'mainTeacher.html';
        return false
    }
    else {
        e.preventDefault();
        document.location = 'main.html';
        return false;
    }

});
$('.accordionMenuButton').click(function () {
    $('#accordion-menu').foundation('hideAll');
});
$('#mLearningTable').click(function () {
    $("#searchStudentDiv").html("<input type='text' id='searchStudent' placeholder='Look for a student'>")
    $('#providedTable').html("<thead> <tr> <th width='200'>Name</th> <th>Student Code</th> <th>Points</th> <th width='150'>Points after calculation</th> <th width='150'>Final Grade</th> </tr></thead> <tbody> <tr> <td>Ain-Joonas Toose</td><td>134301IAPB</td><td>100</td><td>89</td><td>  4</td></tr>")
    $("#providerTable").html("<thead> <tr> <th width='200'>Name</th> <th>Student Code</th> <th>Points</th> <th width='150'>Final points</th> <th width='150'>Final Grade</th> </tr></thead><tbody> <tr> <td>Ain-Joonas Toose</td><td>134301IAPB</td><td> <input type='number' class='pointValue' value='100'> </td><td> <input type='number' value = '85' min = '0' max = '120' class='calculatedValue'> </td><td> <select> <option value='0'>0</option> <option value='1'>1</option> <option value='2'>2</option> <option value='3'>3</option> <option value='4' selected='selected'>4</option> <option value='5'>5</option> </select> </td></tr><tr> <td>Oliver Tiit</td><td>134401IAPB</td><td> <input type='number' min = '0' max = '120' class='pointValue' value='100'> </td><td> <input type='number' min = '0' max = '120' class='calculatedValue' value = '110'> </td><td> <select> <option value='0'>0</option> <option value='1'>1</option> <option value='2'>2</option> <option value='3'>3</option> <option value='4'>4</option> <option value='5' selected='selected'>5</option> </select> </td></tr><tr> <td>Allar Viinamäe</td><td>134302IAPB</td><td> <input type='number' min = '0' max = '120' class='pointValue' value='100'> </td><td> <input type='number' min = '0' max = '120' class='calculatedValue' value='100'> </td><td> <select> <option value='0'>0</option> <option value='1'>1</option> <option value='2'>2</option> <option value='3'>3</option> <option value='4'>4</option> <option value='5' selected='selected'>5</option> </select> </td></tr><tr><td></td><td></td><td><button class='button expanded' id = 'submitGrade' data-open='submitGradeModal'>Submit</button></td><td></td><td></td></tr></tbody>");
    var $rows = $('#providerTable tbody tr');
    $('#searchStudent').keyup(function () {
        var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

        $rows.show().filter(function () {
            var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
            return !~text.indexOf(val);
        }).hide();
    });

});
$('#mLearningTotal').click(function () {
    $('#accordion-menu').foundation('hideAll');
    $("#searchStudentDiv").html("<input type='text' id='searchStudent' placeholder='Look for a student'>")
    $("#providerTable").html("<thead> <tr> <th width='200'>Name</th> <th>Student Code</th> <th>Student Group</th> <th>Test 1</th> <th>Test 2</th> <th>Final Points</th> <th>Final Grade</th> </tr></thead><tbody> <tr> <td>Ain-Joonas Toose</td><td>134301IAPB</td><td>IAPB64</td><td>100</td><td>89</td><td>197</td><td> <select> <option value='0'>0</option> <option value='1'>1</option> <option value='2'>2</option> <option value='3'>3</option> <option value='4' selected='selected'>4</option> <option value='5'>5</option> </select> </td></tr><tr> <td>Oliver Tiit</td><td>134401IAPB</td><td>IAPB64</td><td>100</td><td>110</td><td>210</td><td> <select> <option value='0'>0</option> <option value='1'>1</option> <option value='2'>2</option> <option value='3'>3</option> <option value='4'>4</option> <option value='5' selected='selected'>5</option> </select> </td></tr><tr> <td>Allar Viinamäe</td><td>134302IAPB</td><td>IAPB64</td><td>88</td><td>96</td><td>184</td><td> <select> <option value='0'>0</option> <option value='1'>1</option> <option value='2'>2</option> <option value='3'>3</option> <option value='4'>4</option> <option value='5' selected='selected'>5</option> </select> </td></tr><tr><td></td><td></td><td><button class='button expanded' id = 'submitGrade' data-open='submitGradeModal'>Submit</button></td><td></td><td></td></tr></tbody>");
    var $rows = $('#providerTable tbody tr');

    $("#providedTable").html(" <thead> <tr> <th width='200'>Name</th> <th>Student Code</th> <th>Test 1</th> <th>Test 2</th><th>Final Points</th> <th>Final Grade</th> </tr></thead> <tbody> <tr> <td>Ain-Joonas Toose</td><td>134301IAPB</td><td>100</td><td>89</td><td>197</td><td>4</td></tr><tr></tbody>");

    $('#searchStudent').keyup(function () {
        var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

        $rows.show().filter(function () {
            var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
            return !~text.indexOf(val);
        }).hide();
    });
});
$('#dp1').fdatepicker({
    format: 'dd.mm.yyy',
    disableDblClickSelection: true
});

// implementation of custom elements instead of inputs
var startDate = new Date();
var endDate = new Date();
$('#startAssignmentDatePick').fdatepicker()
    .on('changeDate', function (ev) {
        if (ev.date.valueOf() > endDate.valueOf()) {
            $('#alert').show().find('strong').text('The start date can not be greater then the end date');
        } else {
            $('#alert').hide();
            startDate = new Date(ev.date);
            $('#startDate').text($('#startAssignmentDatePick').data('date'));
        }
        $('#startAssignmentDatePick').fdatepicker('hide');
    });
$('#endAssignmentDatePick').fdatepicker()
    .on('changeDate', function (ev) {
        if (ev.date.valueOf() < startDate.valueOf()) {
            $('#alert').show().find('strong').text('The end date can not be less then the start date');
        } else {
            $('#alert').hide();
            endDate = new Date(ev.date);
            $('#endDate').text($('#endAssignmentDatePick').data('date'));
        }
        $('#endAssignmentDatePick').fdatepicker('hide');
    });

$('#submitForm').click(function (e) {
    e.preventDefault();

    return false;
});
