const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function speedDetector() {
  rl.question("Input speed: ", (speedInput) => {
    const speed = parseInt(speedInput, 10);
    const speedlimit = 70;
    const demeritPoint = Math.floor((speed - speedlimit) / 5);
    if (demeritPoint <= 0) {
      console.log("OK");
    } else if (demeritPoint <= 12) {
      console.log(`Points: ${demeritPoint}`);
    } else {
      console.log("License suspended");
    }
    rl.close();
  });
}

speedDetector();
