function speedDetector(speed){
    const speedlimit = 70;
    const demeritPoint = Math.floor((speed - speedlimit)/5)
    if (demeritPoint <= 0){
      return console.log("OK");
    }else if (demeritPoint <=12){
      return console.log(`Points: ${demeritPoint}`);
    }else {
      return console.log("License suspended")
    }
    
  }