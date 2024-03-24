function studentGrade (){
    const grade = parseInt(prompt("Input student grade:(0-100)", "0"), 10)
    if (grade >= 0 && grade < 40){
      return "E";
    }else if (grade >= 40 && grade <= 49){
      return "D";
    }else if (grade > 49 && grade <= 59){
      return "C";
    }else if (grade > 59 && grade <= 79){
      return  "B";
    }else if (grade > 79 && grade <= 100){
      return "A";
    }else {
      return " Please input a number between 0 and 100";
    }
  }
  const result = `The student's grade is ${studentGrade()}`
  console.log (result)