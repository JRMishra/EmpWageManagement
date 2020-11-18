const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const TOTAL_WORKING_DAYS = 20;
const MAXIMUM_WORKING_HOURS = 100;

function GetWorkingHours(empCheck)
{ 
    switch(empCheck)
    {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
            break;
        default:
            return 0;
            break;
    }
}

let empHrs = 0;
let totalWorkingDays = 0;
for(let day = 1; day<= TOTAL_WORKING_DAYS; day++)
{
   let empCheck = Math.floor(Math.random() * 10) % 3;
   empHrs += GetWorkingHours(empCheck);
   totalWorkingDays = day;
   if(empHrs >= MAXIMUM_WORKING_HOURS)
   {
       empHrs = MAXIMUM_WORKING_HOURS;
       break;
   }
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Total working days: " + totalWorkingDays + "\nTotal Working hours: "+ empHrs + "\nEmployee Wage: " + empWage);