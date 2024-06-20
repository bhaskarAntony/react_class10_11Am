import React from 'react'
import name from './data'
import { user1, user2 } from './data2'
import { AlertDisplay, Button, getData, result } from './data3'

function Example() {

 const output = result;
  return (
    <div className='container'>
        <h1 className="display-1">This is the example for modules in react js</h1>
        <h1 className="fs-1">Module from data.js is = {name}</h1>

        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <ul className="list-group">
                        <li className="list-group-item"><b>Username: {user1.username}</b></li>
                        <li className="list-group-item"><b>Email: {user1.email}</b></li>
                        <li className="list-group-item"><b>phone: {user1.phone}</b></li>
                        <li className="list-group-item"><b>age: {user1.age}</b></li>
                    </ul>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <ul className="list-group">
                        <li className="list-group-item"><b>Username: {user2.username}</b></li>
                        <li className="list-group-item"><b>Email: {user2.email}</b></li>
                        <li className="list-group-item"><b>phone: {user2.phone}</b></li>
                        <li className="list-group-item"><b>age: {user2.age}</b></li>
                    </ul>
                </div>
            </div>
        </div>



        <button onClick={AlertDisplay}>Display</button>


        {Button('create account', 'btn btn-success m-3')}
        {Button('logout', 'btn btn-warning m-3')}
    </div>
  )
}

export default Example