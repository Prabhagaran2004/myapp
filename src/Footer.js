import React from 'react'

const Footer = ({alavu}) => {
  return (
    <footer>
      {alavu} List {alavu ===1 ? "item": "items"} irukku
    </footer>
  )
}

export default Footer