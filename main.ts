#! usr/bin/env node

import inquirer from "inquirer";

let myFlight  = "my flight is wednesday night 5:00 AM";

if (myFlight === "my flight is monday night 4:00 AM") {
   console.log("your flight time and day is right");
    
} else if (myFlight === "my flight is tuesday night 4:00 AM") {
    console.log("enter your correct day");

} else if (myFlight === "my flight is tuesday night 5:00 AM") {   
    console.log("enter your correct day and time");
} else     
 console.log("that's wrong");
 