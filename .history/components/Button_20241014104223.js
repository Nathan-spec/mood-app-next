import React from 'react'

export default function Button(props) {
    const { text, dark } = props
  return (
    <button className={' ' +(dark ? 'text-white bg-indigo-600 border-indigo ') : ' ' }>
        <p>{text}</p>
    </button>
  )
}
