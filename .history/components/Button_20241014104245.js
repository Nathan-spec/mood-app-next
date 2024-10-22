import React from 'react'

export default function Button(props) {
    const { text, dark } = props
  return (
    <button className={' ' +(dark ? 'border border-solid text-white bg-indigo-600 border-indigo-600 ') : ' ' }>
        <p>{text}</p>
    </button>
  )
}
