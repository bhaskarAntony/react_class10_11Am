import React, { useState } from 'react'

function Example3() {
    const [SKeyword, setSekeyWord] = useState('')
    const[ users, setUsers] = useState(
        [
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
    )
    const [filteredData, setFilteredData] = useState([...users])


    function search(keyword){
        var serachedUsers =users.filter((item, index)=>{
        
            if(item.username.toLowerCase().includes(keyword.toLowerCase()) || item.phone.includes(keyword)){
                return item;
            }
        })
        setFilteredData([...serachedUsers])

        console.log(serachedUsers);
    }


//     var num  = 100
//     console.log(num.toString().split(''));

// num.toString().split('').map((item, index)=>{
//     console.log(item);
// })

var arr = [1, 2, 3, 4, 5]
    const result1 = users.every((item)=>item.username == 'Arun');
    console.log(result1); //false

    var arr = [1, 2, 3, 4, 5]
    const result2 = users.some((item)=>item.username == 'Arun');
    console.log(result2); //true



    //reverse
    function convertToArray(name){ //
        var result = '';
        // console.log(name.split('').reverse().toString(''));


        //length
        let len = 0;
        for(let i = 0; name[i] != undefined; i++){
            len = i;
            console.log(name[i], i)
        }

        console.log('length = ', len +1);

        for(let i=len; i>=0; i--){
            result += name[i]
            console.log(result);
        }

        if(name == result){
            console.log('polindrome');
        }else{
            console.log('not polindrome');
        }
    }
    convertToArray('racecar')
  return (
    <div>
        <h1 className="display-1 text-center text-success">Array methods - includes()</h1>

        <input type="text" placeholder='search users' onChange={(e)=>setSekeyWord(e.target.value)} value={SKeyword} />
        <button onClick={()=>search(SKeyword)}>Search</button>

        <div className="row">
          {
            filteredData.length == 0?(
                <h1 className="display-1 text-danger text-center">No Users FOund</h1>
            ):(
                    filteredData.map((item, index)=>(
                       
                        item!=undefined?(
                            <div className="col-md-3">
                            <div className="card p-3 m-3">
                                <h1 className="fs-3">username:{item.username}</h1>
                                <p className="fs-5">Email: {item.email}</p>
                                <p className="fs-5">Phone: {item.phone}</p>
                            </div>
                        </div>
                        ):(null)
                       
                    ))
            )
          }
        </div>
    </div>
  )
}

export default Example3