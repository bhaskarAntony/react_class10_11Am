import axios from "axios"

export const AlertDisplay = () =>{
    alert('hello')
}


export const Button = (label, cls) =>{
    return <button className={cls}>{label}</button>
}

var result = [];
export const  getData = (api) =>{
    axios.get('https://dummyjson.com/products')
    .then((res)=>{
        result = res.data;
        console.log(result);
        return result;
    })
    .catch((err)=>{
        return err;
    })
}


export {result}