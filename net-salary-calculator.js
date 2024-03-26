function netSalaryCalculator() {
  let basicSalary = parseInt(prompt("Input basic salary)", "0"), 10);
  let benefits = parseInt(prompt("Input benefits:(0-100)", "0"), 10);
  const grossSalary = basicSalary + benefits;
  const netSalary = grossSalary - deduction(grossSalary);
  function deduction(grossSalary) {
    const payee = grossSalary * payeeRate(grossSalary);
    const nhif = nhifRate(grossSalary);
    const nssf = grossSalary * 0.6;
    const total = payee + nhif + nssf;
    function payeeRate(grossSalary) {
      if (grossSalary <= 24000) {
        return 0.1;
      } else if (grossSalary <= 32333) {
        return 0.25;
      } else if (grossSalary <= 500000) {
        return 0.3;
      } else if (grossSalary <= 800000) {
        return 0.325;
      } else if (grossSalary > 800000) {
        return 0.35;
      }
    }
    function nhifRate(grossSalary) {
      if (grossSalary <= 5999) {
        return 150;
      } else if (grossSalary <= 7999) {
        return 300;
      } else if (grossSalary <= 11999) {
        return 400;
      } else if (grossSalary <= 14999) {
        return 500;
      } else if (grossSalary > 19999) {
        return 600;
      } else if (grossSalary <= 24999) {
        return 750;
      } else if (grossSalary <= 29999) {
        return 850;
      } else if (grossSalary <= 34999) {
        return 900;
      } else if (grossSalary > 39999) {
        return 750;
      } else {
        return 1000;
      }
    }
    return total;
  }
  return netSalary;
}
console.log(`Your net salary is: ${netSalaryCalculator()}`);
