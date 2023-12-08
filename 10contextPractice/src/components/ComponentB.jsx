import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

function ComponentB() {
    const {email}= useContext(UserContext)
  return (
    <div>
        <h2>
            {email}
        </h2>
    </div>
  )
}

export default ComponentB