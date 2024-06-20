// import React, { useState } from 'react'

// function Example2() {

//     //creating states by suing hooks that is useState()
//     const [count, setCount] = useState(0)

//     const increment = () =>{
//         //to upadte the function state we need to use that state handler in count state handler is setCount()

//       if(count<10){
//         setCount(count+1)
//       }
//     }

//     const decrement = () =>{
//         if(count>0){
//             setCount(count-1)
//         }
//     }

//     const reset = () =>{
//         if(count>0){
//             setCount(0)
//         }
//     }

//   return (
//     <div>
//         <div className="rounded p-3 m-3 border">
//             <h1 className="fs-1 text-success">Updating function state and updating componnent also</h1>


//             <h1 className="fs-1 text-danger">Count: {count}</h1>


//             <button className="btn btn-primary m-3" onClick={increment}>Incremnt the count state</button>

//             <button className="btn btn-success m-3" onClick={decrement}>Decrement the count state</button>

//             <button className="btn btn-danger m-3" onClick={reset}>Reset the count state</button>
//         </div>
        
//     </div>
//   )
// }

// export default Example2



//creating count usestate example in class same like functional component
import React, { Component } from 'react'

class Example2 extends Component {
    //creating buitin methods
    constructor(props){
        super(props)
      //creating states by using class states that isthis.state = {}
      this.state = {
        count:0,
      }

    }
//to upadte the class state we need to use that state handler this.setSate
     incremnt=()=>{
        if(this.state.count <10){
            this.setState({
                count:this.state.count  + 1
            })
           }
    }

    decrement =() =>{
        if(this.state.count>0){
            this.setState({
                count:this.state.count-1
            })
        }
    }


    reset = () =>{
        if(this.state.count >0){
            this.setState({
                count:0
            })
        }
    }
  render() {
    return (
        <div>
        <div className="rounded p-3 m-3 border">
            <h1 className="fs-1 text-success">Updating class state and updating component also</h1>


            <h1 className="fs-1 text-danger">Count: {this.state.count}</h1>


            <button className="btn btn-primary m-3" onClick={this.incremnt} >Incremnt the count state</button>

            <button className="btn btn-success m-3" onClick={this.decrement} >Decrement the count state</button>

            <button className="btn btn-danger m-3" onClick={this.reset}>Reset the count state</button>
        </div>
        
    </div>
    )
  }
}

export default Example2