import React from 'react'

function Example1() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, ,8 ,9];
    const arrays = [
        [1, 2, 3, 4],
        [10, 20, 30, 40],
        [100, 200, 300, 400],
        [1000, 2000, 3000, 4000]
    ]

    const users = [
        {
            username:'Arun',
            email:'Arun@gmail.com',
            phone:'+9182876378',
            hobbies:['cycling', 'racing', 'gaming'],
        },
        {
            username:'Mohan',
            email:'mohan@gmail.com',
            phone:'+9197383833',
            hobbies:'racing',
        }
    ]

    
    
  return (
    <div className='container'>
        <h1 className="display-1 text-center text-success">Array methods</h1>
       <div className="row">
       {
            numbers.map((num, numIndex)=>(
              <div className="col-md-4">
                  <div className="card mb-3 text-center">
                    <h1 className="display-3 text-danger fw-bold">{num}</h1>
                </div>
              </div>
            ))
        }
       </div>

       <h1 className="mt-5 text-warning display-1">Prinitng array of array</h1>
       <div className="row">
      
            {
                arrays.map((arr, arrIndex)=>(
                    <div className="col-md-4">
                        <div className="card bg-dark text-light m-3 p-3">
                          <h1 className="fs-3">  {
                            arr.map((subarray, subArrayIndex)=>(
                                <div className="card mb-3">
                                    {subarray}
                                </div>
                            ))
                        }</h1>
                        </div>
                    </div>
                ))
            }
       </div>



       <h1 className="display-1 text-center text-success">Arraying map for array of objects</h1>

       <div className="row">
        {
            users.map((user, userIndex)=>(
                <div className="col-md-6" key={userIndex}>
                    <div className="card p-3 m-3">
                    <h1 className="fs-3">username: {user.username}</h1>
                    <p className="fs-6">Email: {user.email}</p>
                    <p className="fs-6">Phone number: {user.phone}</p>
                    <p className='fs-6'>hobbies : {

                        // checking the user.hobbies is array or not if it is a array the aplay the map method otherwise just print that hobbies same like normal string
                            Array.isArray(user.hobbies) ? (
                                    user.hobbies.map((hobbie, hobbieIndex)=>(
                                        <div className="card p-3 m-3">
                                            <p className="fs-5">{hobbieIndex +1}) {hobbie}</p>
                                        </div>
                                    ))
                            ):(<p className="fs-6">{user.hobbies}</p> )
                        } </p>
                    </div>
                </div>
            ))
        }
       </div>
    </div>
  )
}

export default Example1