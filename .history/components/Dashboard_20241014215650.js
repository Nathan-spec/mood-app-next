import React from 'react'


const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

export default function Dashboard() {
   const statuses = {
    num_days: 14,
    time_remaining: '13:14:26',
    date: (new Date()).toDateString()
   }
  return (
    <div className='flex flex-col flex-1 gap-10'>
        <div className='grid grid-cols-1 sm:grid-cols-3 bg-indigo-50
        text-indigo-500 rounded-lg'></div>
        {Object.keys(statuses).map((status, statusIndex) => {
          return (
            <div key={statusIndex} className='p-4 flex flex-col gap-1
            sm:gap-2'>
              <p className='font-medium uppercase text-xs sm:text-sm'
              >{status.replaceAll('_', ' ')}</p>
              <p className={' ' + fugaz.className}
              >{statuses[status]}</p>
            </div>
          )
        })}
    </div>
  )
}
