import React, { useEffect, useState } from 'react'

function Example2() {
   
  const [products, setProducts] = useState([
        {
            name:'Product1',
            price:100,
            color:'red',
            radings:3,
        },
        {
            name:'Product2',
            price:200,
            color:'yellow',
            radings:5,
        },
        {
            name:'Product3',
            price:300,
            color:'orange',
            radings:1,
        },
        {
            name:'Product4',
            price:400,
            color:'blue',
            radings:2,
        }
    ])

    const [filteredArray, setFilteredArray] = useState([...products])


   function filterproduct (userprice){
        var filtered = products.filter((item)=>item.price <=userprice);
        console.log(filtered);
        setFilteredArray([...filtered])
    }

    function clearFilter(){
        setFilteredArray([...products])
    }
  return (
    <div>
        <h1 className="display-1 text-center text-success">Array methods - filter()</h1>
            <div>
              {
                products.map((item, index)=>(
                    <button className='btn btn-primary m-3' onClick={()=>filterproduct(item.price)}>Below &#8377;{item.price}</button>
                ))
              }
              <button className='btn btn-success m-3' onClick={clearFilter}>clearFilter</button>
            </div>
            <div className="row">

                {
                filteredArray.map((product, productIndex)=>(
                        <div className="col-md-4">
                            <div className="card p-3 m-3 shadow">
                               <p className="fs-4 fw-bold"> {product.name}</p>
                               <h1 className="fs-2">&#8377; {product.price}</h1>
                               <p className="fs-4">⭐ {product.radings} ratings</p>
                               <div className="icon p-3" style={{background:product.color, width:'40px', height:'40px', borderRadius:'100px'}}></div>
                               <span>{product.color}</span>
                            </div>
                        </div>
                )) 
            }
            </div>
    </div>
  )
}

export default Example2