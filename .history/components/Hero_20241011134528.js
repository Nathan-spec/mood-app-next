import { Fugaz_One } from 'next/font/google';
import React from 'react'

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400']});

export default function Hero() {
  return (
    <div className='py-10 sm:py-14 md:py-20'>
        <h1 
        className={'text-5xl sm:text-text-6xl md:text-7xl text-center ' + fugaz.className}>
            <span className='textGradient'>Broodl</span> helps you track your<span className='textGradient'>daily
                
            </span>mood</h1>
            <p className='text-lg sm:text-xl md:text'></p>
    </div>
  )
}
