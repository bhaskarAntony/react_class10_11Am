import React from 'react'

//globval variable
const a = 10; const b = 10;

//here also we can create any type of variables that variable becomes a global variable

function Example1() {

    //local variables
    function sayHello(name){ //function
        return <h1>Hello👋,, {name}</h1>
    }
    const user = {
        username:'mohan'
    } //object

    const arrays = [1, 2, 3, 4, 5]; //array

    const name = "mohan"; //string

  return (
    <div>
            <h1 className="display-1">Global Variables</h1>
            <h1 className="fs-1 text-info">the values of a  = {a}</h1>
            <h1 className="fs-1 text-info">the values of b  = {b}</h1>

            {sayHello('Arun')}
            {sayHello('Mohan')}
    </div>
  )
}

export default Example1