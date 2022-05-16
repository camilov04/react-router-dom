import React from 'react'
import { Link } from 'react-router-dom'


export const NavigatorUI = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <a href="/">Home con ancla</a>
        <Link to="/aboutUS">AboutUS</Link>
        <Link to="/contactUS">ContactUS</Link>
    </nav>
  )
}
