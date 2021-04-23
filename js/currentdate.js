let daynames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'October',
    'November',
    'December'
  ]
  
  let d = new Date();
  
  let dayName = daynames[d.getDay()];
  let monthName = months[d.getMonth()];
  let year = d.getFullYear();
  let fulldate = 
  
  const modified = document.lastModified
  
  document.getElementById('currentdate').textContent = modified;
  document.querySelector('#currentYear').textContent = currentYear;
  