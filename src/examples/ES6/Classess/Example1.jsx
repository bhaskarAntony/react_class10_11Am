import { Component } from "react";

export class Example1 extends Component{

    //builtin method no nned to call this method when ur using the class at the initially it will will executes
    constructor(props){
        super(props)

        //creating states same like usestate in classes by using this.state
        this.state = {
            data:[],
            username:'Kiran',
            email:'Kiran@gmai.com'
        }
    }


    // creating own methods
    //in functional component updating state
    // const [username, setUsername] = useState('kiran')
    // function update(){
    //     setUsername('Arun')
    // }


    //in class component creating user defined methods instead of functions using this.setState({}) to update the class states


    
    //creating normal method and using this keyword inside the method so we need to use bind(this) when we call this method
    update(){
        this.setState({
            username:'arun'
        })
    }


    //creating method by using arrow function if we using this keyword inside the methods
    update1 = () =>{
        this.setState({
            username:'arun',
        })
    }



    render(){
        return(
            <div className="border rounded my-3 p-3">
                <h1 className="display-1 text-center text-success">Class component updating class states</h1>

                <h1 className="fs-1">Username <span className="text-primary">{this.state.username}</span></h1>


                {/* calling method using bind(this) */}
                <button className="btn btn-primary" onClick={this.update.bind(this)}>Update username using bind</button>

                {/* calling arrow function method without using bind(this) */}

                <button className="btn btn-primary" onClick={this.update1}>Update username without bind using arrow function</button>
            </div>
        )
    }


}