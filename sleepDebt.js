function getSleepHours(day){
    day = day.toLowerCase();
    switch(day){
      case "monday":
        return 8;
        break;
      case "tuesday":
        return 8;
        break;
      case "wednesday":
        return 8;
        break;
      case "thursday":
        return 8;
        break;
      case "friday":
        return 8;
        break;
      case "saturday":
        return 8;
        break;
      case "sunday":
        return 8;
        break;
      default:
        break;
    }
  }
  
  function getActualSleepHours() {
    return getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday");
  }
  
  function getIdealSleepHours() {
    const idealHours = 10;
    return idealHours * 7;
  }
  
  function calculateSleepDebt() {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    
    if(actualSleepHours === idealSleepHours){
      return "You got the perfect amount of sleep!";
    } else if(actualSleepHours<idealSleepHours){
      return `You got ${idealSleepHours-actualSleepHours} hours too much sleep this week.`;
    } else if(actualSleepHours>idealSleepHours){
      return `You got ${actualSleepHours-idealSleepHours} hours too little sleep this week.`;
    }
  }
  
  console.log(calculateSleepDebt());