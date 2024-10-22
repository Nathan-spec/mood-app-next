'use client'
import { Fugaz_One } from 'next/font/google'
import React, { useState } from 'react'
import Button from './Button';
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRegister, setIsRegister] = useState('')

  async function handleSubmit() {

  }
  return (
    <div className='flex flex-col flex-1 justify-center items-center gap-4'>
      <h3 className={'text-4xl sm:text-5xl md:text-6xl ' + 
        fugaz.className}>{isRegister ? 'Register'}</h3>
        <p>You&#39;re one step away!</p>
        <input value={email} onChange={(e) => {
          setEmail(e.target.value)
        }} className='w-full max-w-[400px] mx-auto px-3 py-2
        duration-200 hover:border-indigo-600 
        sm:py-3 border border-solid border-indigo-400
        rounded-full outline-none'
        placeholder='Email'/>
        <input value={password} onChange={(e) => {
          setPassword
        }} className='w-full max-w-[400px] mx-auto px-3 py-2
        sm:py-3 border border-solid border-indigo-400
        rounded-full outline-none'
        placeholder='Password' type='password'/>
        <div className='max-w-[400px] w-full mx-auto'>
          <Button text="Submit" full/>
        </div>
        <p className='text-center'>Don&#39;t have an account? <span
        className='text-indigo-600'></span></p>
    </div>
  )
}
