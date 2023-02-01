import React from 'react'
import { useState } from 'react'
import {shuffle} from 'lodash'




function App() {
    
  const [nums, setNums] = useState([5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36])  // [[....], fn]
  

 
 function change(){ setNums(shuffle(nums))
}
  return (
    <div className='container'>
      <h1 className='name-container name-font'>Лотерея 5 из 36</h1>
      <button onClick={change} className='button button-font'>NEW NUMBERS</button>
      <div className="nums-container nums-font">
        <div className='nums'>{nums[0]}</div>
        <div className='nums'>{nums[1]}</div>
        <div className='nums'>{nums[2]}</div>
        <div className='nums'>{nums[3]}</div>
        <div className='nums'>{nums[4]}</div>
      </div>
    </div>
  )

  }

export default App