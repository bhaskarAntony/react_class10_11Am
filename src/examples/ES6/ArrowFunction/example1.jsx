import React, { Component } from 'react'

class example1 extends Component {

    constructor(props){
        super(props)
        this.state = {
            products:[],
            isLoading:false
        }
    }


    sum(a, b){
        return <nh1> sum = {a+b}</nh1>
    }
    upadteState = () =>{
        this.setState({
            products:[1, 2, 3, 5],
            isLoading:!this.state.isLoading
        })
    }

    Button(label, varient, event){
        return <button className={`btn m-3 btn-${varient}`} onClick={event}>{label}</button>
    }
    
    render() {
        var name = "hello"
        var r = {...name}
        console.log(r[0]);
        console.log(r);
        return (
        <div>
            {this.sum(10, 10)}

        { this.Button('create account', 'warning')}
        { this.Button('Login', 'success')}
        { this.Button('Logout', 'danger', this.upadteState)}
        {
            this.state.isLoading?(<h1>Loading...</h1>):(<h1>{this.state.products}</h1>)
        }
        </div>
        )
    }
}

export default example1