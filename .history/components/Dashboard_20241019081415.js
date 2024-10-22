"use client"
import React, { useEffect } from 'react'
import { Fugaz_One } from 'next/font/google';
import Calendar from './Calendar';
import {useState, useAuth } from '@/context/AuthContext';

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

export default function Dashboard() {
  const { currentUser, userDataObj, setUserDataObj } = useAuth()
  const [data, setData ] = useState({})

  function countValues() {
      

  }

  function handleSetMood(mood, day, month, year){
    const currData = {...userDataObj}
    if (!newData?.[year]) {
      newData[year] = {}
    }
    
    newData[year][month][day] = mood
    // Update the current state
    // Update the global state
    // Update firebase
  }



   const statuses = {
    num_days: 14,
    time_remaining: '13:14:26',
    date: (new Date()).toDateString()
   }

   const moods= {
    '&*@#$': '🤬',
    'Sad': '😢',
    'Exisiting': '😌',
    'Good': '😃',
    'Elated': '😁'
   }

   useEffect(() => {
    if(!currentUser || !userDataObj) {
      return
    }
    setData[userDataObj]

   },[ currentUser, userDataObj])

  return (
    <div className='flex flex-col flex-1 gap-8 sm:gap-12 md:gap-16'>
        <div className='grid sm:grid-cols-3 bg-indigo-50
        text-indigo-500 rounded-lg p-4 gap-4'>
          {Object.keys(statuses).map((status, statusIndex) => {
          return (
            <div key={statusIndex} className=' flex flex-col gap-1
            sm:gap-2'>
              <p className='font-medium uppercase text-xs sm:text-sm truncate'
              >{status.replaceAll('_', ' ')}</p>
              <p className={' ' + fugaz.className}
              >{statuses[status]}</p>
            </div>
          )
        })}
        </div>
        <h4 className={'text-5xl sm:text-6xl md:text-7xl text-center ' 
         + fugaz.className}>
          How do you <span className='textGradient'>feel</span> today?
        </h4>
        <div className='flex items-stretch flex-wrap gap-4'>
          {Object.keys(moods).map((mood, moodIndex) => {
            return (
              <button className={'p-4 px-5 rounded-2xl purpleShadow duration-200 bg-indigo-50 hover:bg-indigo-100 text-center flex flex-col gap-2 items-center' + (moodIndex === 4 ? 'col-span-2' : ' ')} key={moodIndex}>
                <p className='text-4xl sm:text-5xl md:text-6xl'>{moods[mood]}</p>
                <p className={'text-indigo-500 text-sx sm:text-sm md:text-base' + fugaz.className}>{mood}</p>
              </button>
            )
          })}
        </div>
        <Calendar data={data} handleSetMood={handleSetMood}/>
    </div>
  )
}
