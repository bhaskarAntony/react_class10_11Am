import React from 'react'

function Example1() {
    const string = "hello world";
    const res = [...string] //array ['h'...]

    console.log(res.reverse());


    //example2
    const array1 = [1, 2, 3, 4, 5, 6];
    const array2 = [10, 20, 40, 40, 50, 60]

    const allArrayValues = [...array1, ...array2, 70, 80]
    console.log(allArrayValues);

    //example3
    const user1 = {
        username:"Arun",
        email:'Arun@gmail.com',
        phone:"+91873873983",
        age:34,
        hobbies:['cycling', 'racing', 'exploring'],
        course:'Mern'
    }
    
    const user2 = {
        username:"Mohan",
        email:'mohan@gmail.com',
        phone:"+9172983898",
        age:24,
        hobbies:['cycling', 'racing', 'exploring']
    }
    

    const allObject = {...user1,...user2 }
    console.log(allObject);//

    
  
   

    
  return (
    <div>
        <h1 className="text-success">{string}</h1>
        <h1>{
            res.map((item, index)=>(
                <span className='text-danager'>{item}</span>
            ))
            
            }</h1>
    </div>
  )
}

export default Example1