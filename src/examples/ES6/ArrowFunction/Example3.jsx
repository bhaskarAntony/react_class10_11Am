import { Fragment } from "react"



export const Example3 = () => {
    //we can use the arrow functio in array methods such as (find, filter, map, reduece, forEach)

    const allArray = ['apple', 'banana', 'mango'];
    //the map method will returns the new array so of u are using the map we need to use variable

    const mappedArray = allArray.map((item, index)=>{
        return item;
    })



    console.log(mappedArray);//['apple, 'banana', 'mango'] 
    return (
        <Fragment>
            <h1 className="display-1 text-center text-danger">This is the inline export arrow function</h1>
        </Fragment>
    )
}


// export default Example3;//default function


