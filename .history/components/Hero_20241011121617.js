import { Fugaz_One } from 'next/font/google'
import React from 'react'

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['']})
export default function Hero() {
  return (
    <div className='py-10 sm:py-14 md:py-20'>
        <h1><span>Broodl</span> helps you track your<span>daily</span>mood</h1>
    </div>
  )
}
