import React from 'react'
import { Fugaz_One } from 'next/font/google';

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

export default function Dashboard() {
   const statuses = {
    num_days: 14,
    time_remaining: '13:14:26',
    date: (new Date()).toDateString()
   }
  return (
    <div className='flex flex-col flex-1 gap-4 sm:gap-8 md:gap-12'>
        <div className='grid grid-cols-1 sm:grid-cols-3 bg-indigo-50
        text-indigo-500 rounded-lg'>
        </div>
        
    </div>
  )
}
