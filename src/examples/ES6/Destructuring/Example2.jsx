import React from 'react'

function Example2(props) { //function Example2({name, email}) =>inline destructur
    console.log(props);

    //destructuring props
    const {name, email} = props
  return (
    <div>
        <h2 className="fs-1 text-center text-primary">Passing props to this componenta nd destructuring using methods fpr props</h2>


        {/* <h1 className="fs-1 text-success">the name: {props.name}</h1> */}
        <h1 className="fs-1 text-success">the name: {name}</h1>
        <h1 className="fs-1 text-success">the email: {email}</h1>
    </div>
  )
}

export default Example2