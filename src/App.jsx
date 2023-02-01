import React from 'react'
import { useState } from 'react'
import Header from './layout/Header/Header'
import random from './utils/random'



function App() {
  const [nums, setNums] = useState([1, 3, 5, 7, 10])  // [[....], fn]

  const change = () => {

  }

  return (
    <>
      <Header title="header title"/>

      <button onClick={change}>random</button>
      <div>{random()}</div>
      <div>{nums[2]}</div>
      <div>4</div>
      <div>5</div>
    </>
  )
}


export default App