const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function studentGrade() {
  rl.question("Input student grade (0-100): ", (gradeInput) => {
    const grade = parseInt(gradeInput, 10);
    if (grade >= 0 && grade < 40) {
      console.log("E");
    } else if (grade >= 40 && grade <= 49) {
      console.log("D");
    } else if (grade > 49 && grade <= 59) {
      console.log("C");
    } else if (grade > 59 && grade <= 79) {
      console.log("B");
    } else if (grade > 79 && grade <= 100) {
      console.log("A");
    } else {
      console.log("Please input a number between 0 and 100");
    }
    rl.close();
  });
}

studentGrade();
