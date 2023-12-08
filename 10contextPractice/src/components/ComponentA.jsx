import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

function ComponentA() {
 const  {data,setData}= useContext(UserContext)
  return (
    <>
    <h1>{data}</h1>
    <button onClick={()=>{
        setData("end world")
    }}>click me</button>
    </>  
  )
}

export default ComponentA