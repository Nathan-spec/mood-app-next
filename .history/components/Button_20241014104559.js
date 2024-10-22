import React from 'react'

export default function Button(props) {
    const { text, dark } = props
  return (
    <button className={'border border-solid border-indigo-600' + 
        (dark ? 'text-white bg-indigo-600 border-indigo-600 ') : 'text-indigo-600' }>
        <p>{text}</p>
    </button>
  )
}
