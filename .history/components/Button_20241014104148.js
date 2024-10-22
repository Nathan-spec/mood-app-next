import React from 'react'

export default function Button(props) {
    const { text, dark } = props
  return (
    <button className={' ' +(dark ? ) }>
        <p>{text}</p>
    </button>
  )
}
