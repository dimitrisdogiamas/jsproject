function isLeap(year) {
    
/**************Don't change the code above****************/    
    
    //Write your code here. 
  prompt("give me a year");
  if (year%4===0){
    if (year%100===0){
        if(year%400===0){
          return "Leap year.";
        }else{
          return "Not leap year.";
        }
    } else{
      return "Leap year.";
    }
  } else {
    return "Not leap year.";
  }


    

/**************Don't change the code below****************/    

}