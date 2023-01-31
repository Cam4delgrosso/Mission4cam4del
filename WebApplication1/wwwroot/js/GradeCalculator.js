$("#btnSend").click(function () {
    //calculate the grade
    var gradeCalc;
    var letterGrade;
    gradeCalc = Math.round((($("#assignmentPercent").val() * .5) + ($("#groupPercent").val() * .1) + ($("#quizPercent").val() * .1) + ($("#midtermPercent").val() * .1) + ($("#finalPercent").val() * .1) + ($("#intexPercent").val() * .1)));

    //display the letter grade based on the final grade calculation
    if (gradeCalc >= 94) {
        letterGrade = "A";
    }
    else if (gradeCalc >= 90) {
        letterGrade = "A-";
    }
    else if (gradeCalc >= 87) {
        letterGrade = "B+";
    }
    else if (gradeCalc >= 84) {
        letterGrade = "B";
    }
    else if (gradeCalc >= 80) {
        letterGrade = "B";
    }
    else if (gradeCalc >= 77) {
        letterGrade = "C+";
    }
    else if (gradeCalc >= 74) {
        letterGrade = "C";
    }
    else if (gradeCalc >= 70) {
        letterGrade = "C-";
    }
    else if (gradeCalc >= 67) {
        letterGrade = "D+";
    }
    else if (gradeCalc >= 64) {
        letterGrade = "D";
    }
    else if (gradeCalc >= 60) {
        letterGrade = "D-";
    }
    else {
        letterGrade = "F"
    }
    //Return the grade percentage and the letter grade to display in the HTML
    $("#gradeCalc").text(gradeCalc);
    $("#letterGrade").text(letterGrade);
})