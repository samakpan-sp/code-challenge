//Add eventLIstener to the button
document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculateButton');
    calculateButton.addEventListener('click', calculateAndDisplayGrade);
});

//Evaluate student grades
function calculateGrade(marks) {
    if (marks > 79) {
        return 'A';
    } else if (marks >= 60 && marks <= 79) {
        return 'B';
    } else if (marks >= 50 && marks <= 59) {
        return 'C';
    } else if (marks >= 40 && marks <= 49) {
        return 'D';
    } else {
        return 'E';
    }
}

//Take inputs(Marks)
//Compare input(marks) and display based on corresponding grades
function calculateAndDisplayGrade() {
    const studentMarksInput = document.getElementById('marks');
    const gradeOutput = document.getElementById('gradeOutput');

    const studentMarks = parseFloat(studentMarksInput.value);

    if (studentMarks >= 0 && studentMarks <= 100) {
        const grade = calculateGrade(studentMarks);
        gradeOutput.textContent = `Grade: ${grade}`;
    } else {
        gradeOutput.textContent = "Invalid input. Marks should be between 0 and 100.";
    }
}
