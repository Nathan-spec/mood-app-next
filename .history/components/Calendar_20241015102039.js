import React from 'react'

export default function Calendar() {
  const months = { 'January': 'Jan', 'Febraury': 'Feb', 'March':
    'Mar', 'April': 'Apr', 'May': 'May', 'June': 'Jun', 'July': 
    'Jul', 'August': 'Aug', 'September': 'Sep', 'October': 'Oct',
    'November': 'Nov', 'December': 'Dec'
  }
  const now = new Date()
  const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurs']



  return (
    <div>Calendar</div>
  )
}
