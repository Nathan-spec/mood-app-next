import React from 'react'


const months = { 'January': 'Jan', 'Febraury': 'Feb', 'March':
  'Mar', 'April': 'Apr', 'May': 'May', 'June': 'Jun', 'July': 
  'Jul', 'August': 'Aug', 'September': 'Sep', 'October': 'Oct',
  'November': 'Nov', 'December': 'Dec'
}
const now = new Date()
const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
  'Thursday', 'Friday', 'Saturday']


export default function Calendar() {
  const year = 2024
  const month = 'July'
  const monthNow = new Date

  return (
    <div>Calendar</div>
  )
}
