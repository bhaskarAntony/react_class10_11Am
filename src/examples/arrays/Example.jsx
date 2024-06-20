import React, { useState } from 'react'

function Example() {
    const [number, setNumber] = useState(null)


    const num = 'Ac9874786476744';
    //AC************744
    const array = [...num];

    const converter = (accNo) =>{
        
           return(
            [...accNo].map((item, index)=>(
             
                index<=1 ? (item.toUpperCase()): index>array.length-4?(item): ("*")
               
              ))
           )
      
    }
  
  return (
    <div>
        <input type="text" placeholder='Enter Account number'  value={number} onChange={(e)=>setNumber(e.target.value)}/>
      <h1> 
        {converter('Ac9874786476744')}
        </h1>

       
    </div>
  )
}

export default Example