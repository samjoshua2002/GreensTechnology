import React from 'react'
import { Link } from 'react-router-dom'


function Dashboard() {
  return (
    <div>Dashboard
        <Link to='/'>
        <button>Back to login page</button>
        </Link>
    </div>
  )
}

export default Dashboard