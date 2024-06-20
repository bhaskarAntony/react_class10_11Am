import React, { useState } from 'react'
import Loading from './Loading';

function Example1() {

    const [isLoading, setIsLoading] = useState(false);
    
    // const Loading = () =>{
    //     return (
    //         <div class="spinner-border text-primary" role="status">
    //         <span class="visually-hidden">Loading...</span>
    //         </div>
    //     )
    // }

    let number = 800;
  return (
    <div>
       {
        isLoading ? (<Loading/>):(
            <>
            <h1 className="display-1 text-success text-center">Ternary operator</h1>
            </>
        )
       }


       <h1 className="fs-1">nested conditions</h1>
       {
            number == 100?(<h1>the number is 100</h1>):number == 200?(<h1>The number is 200</h1>):number == 300?(<h1>The number is 300</h1>):(<h1>Number is invalid</h1>)
       }

       {
       
       }
    </div>
  )
}

export default Example1