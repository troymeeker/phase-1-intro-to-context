const employees = ['a','b','c', 1]
//['firstName','familyName','title', payPerHour]

function createEmployeeRecord(employee){
//   console.log('employee', employee)
 const newObj = {
    firstName: employee[0],
    familyName: employee[1],
    title: employee[2],
    payPerHour: employee[3],
    timeInEvents: [],
    timeOutEvents: []
 }
 return newObj
}

function createEmployeeRecords(arrayEmp){
    // console.log('arrayEmp', arrayEmp);
 //.length
 let newArr = arrayEmp.map(
     function (employee){
       return createEmployeeRecord(employee)
        
     })

 return newArr
}

function calculatePayroll(arrayEmps){
  
 //.forEach()
 //.map()
 //Using wagesEarnedOnDate, accumulate the value of all dates worked by the employee in the record used as context. 
 //Amount should be returned as a number.
}

function allWagesFor(employee){

  console.log(employee.timeInEvents);
    employee.timeInEvents
      .map((elmt) => wagesEarnedOnDate(elmt, elmt.date))
      .reduce((a, b) => a + b)
  
}

function wagesEarnedOnDate(employee, workDate){
    return employee.payPerHour * hoursWorkedOnDate(employee, workDate)
}

function hoursWorkedOnDate(employee, workDate){
 
    let inTime = employee.timeInEvents  
      .filter((elmt)=> elmt.date=== workDate)
      .map((elmt)=>elmt.hour)

   let outTime = employee.timeOutEvents
     .filter((elmt)=> elmt.date===workDate)
     .map((elmt)=>elmt.hour)
   //given a date, find # of hours worked between Out and in

      return (outTime - inTime ) / 100 
    
}

function createTimeInEvent(employee, dateStamp){
    let [date, hour] = dateStamp.split(' ') 
    hour = parseInt(hour)
   let type = 'TimeIn'
   employee.timeInEvents.push({type, hour, date})
   
  
   return employee
}

function createTimeOutEvent(employee, dateStamp){
  let [date, hour] = dateStamp.split(' ') 
  hour = parseInt(hour)
  let type =  'TimeOut'
  employee.timeOutEvents.push({type, hour, date})
    
    
    return employee
}
