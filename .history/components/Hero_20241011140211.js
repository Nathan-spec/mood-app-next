import { Fugaz_One } from 'next/font/google';
import React from 'react'

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400']});

export default function Hero() {
  return (
    <div className='py-4'>
        <h1 
        className={'text-5xl sm:text-text-6xl md:text-7xl text-center ' + fugaz.className}>
            <span className='textGradient'>Broodl</span> helps you track your<span className='textGradient'>daily
                
            </span>mood</h1>
            <p className='text-lg sm:text-xl md:text-2xl text-center'>Create your mood record and see how you feel on 
                <span className='font-medium'>everyday of every year.</span></p>
    </div>
  )
}
