import React from 'react'

function Example3() {
    const array = [1, 2, 3, 4, 5 ]
    const  [a, b, , c,  ...rest] = array;
    console.log(a); //1
    console.log(b);//2
    console.log(c);//4
    console.log(rest);//

    const names = ['arun', 'kiran', 'naveen', 'manoj', 'mohan']

    const [ , name1, name2, , name3] = names;


    //example

    const allCalculations = (a, b) =>{
        const addition = a+b;
        const substraction = a-b
        const multiplication = a*b;
        return [addition, substraction, multiplication]
    }

    // console.log(allCalculations(2, 3));

    const result = allCalculations(2, 3)
    console.log(result); //[5, -1, 6]

   const [add, sub, mul] = allCalculations(2, 3)
   console.log(add);


  return (
    <div>
        <h1 className="fs-1 text-center text-success">destructuring arrays</h1>
            <h1>{a}</h1>
            <h1>{b}</h1>

            <h1>name1 {name1}</h1>
            <h1>name2 {name2}</h1>
            <h1>name3 {name3}</h1>

            <hr />


            <h1 className="fs-1 text-success">Addition; {add}</h1>
            <h1 className="fs-1 text-success">substraction; {sub}</h1>
            <h1 className="fs-1 text-success">multiplication; {mul}</h1>

    </div>
  )
}

export default Example3