import { Fragment } from "react";

//if we declare variable here that is the global variables
const Example2 = () => { //arrow function
//if we declare variable here that is the global variables


//creating reusable code (elements for component)

const displayAlert=()=>{ //arrow function declaration
    alert('hello this is the alert from arrow function')
}

const parameterFunction = (a, b) =>{
    alert(`the sum of two numbers ${a} and ${b} = ${a+b}`)
}



//creating functions for buttons

const function1 = () =>{
    alert('this is the function1')
}

const function2 = () =>{
    alert('this is the function2')
}


const Button = (label, cls, action)=>{
    return <button className={cls} onClick={action}>{label}</button>
}
    return (
        <Fragment>
           <h1 className="display-1 text-center text-success">this is the arrow function</h1>
           {/* calling no parameter function just by using function name */}
            <button onMouseEnter={displayAlert}>DIsplay alert</button>


            {/* calling parameter function using arrow function when we passing tha values to parameter */}

            <button onClick={()=>parameterFunction(10, 10)}>Call Parameter function</button>



     <h1 className="fs-3">   calling reusable function and sending parameters and sending function as a parameter to another one function this is called callback function...</h1>
        {Button('create account', 'btn btn-primary', function1)} <br />
        {Button('Explore our courses', 'btn btn-warning', function2)} <br />



        </Fragment>
    )
}

export default Example2; //default export


