import React from 'react'

function Example1() {

    const exammpleObject = {
        username:'Arun',
        email:'aerun@gmail.com',
        phone:'+9186373873',
        age:35
    }

    //old way to display the object properties
    // console.log(exammpleObject.username);
    // console.log(exammpleObject.email);
    // console.log(exammpleObject.phone);
    // console.log(exammpleObject.age);


    //new wat to get the object properties using object destructuring
    const {username, email, phone, age} = exammpleObject;
    console.log(username); //now we can directly print the properties without using object name
    console.log(email);
    console.log(phone);
    console.log(age);
  return (
    <div>
        <h1 className="display-1 text-center text-success">Destructuring for arrays and objects</h1>

        <div className="card p-3 m-4">
            <h1 className="fs-2">{username}</h1>
            <h1 className="fs-2">{email}</h1>
            <h1 className="fs-2">{phone}</h1>
            <h1 className="fs-2">{age}</h1>
        </div>

    </div>
  )
}

export default Example1