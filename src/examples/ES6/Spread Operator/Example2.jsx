import React, { useState } from 'react'

function Example2() {
    const [formData, setFormData] = useState({
        username:'',
        email:'',
        phone:''
    })

    const HandleChange = (e) =>{
        const {value, name} = e.target;
        setFormData({...formData, [name]:value})
    }
  return (
    <div>
        <div className="row">
            <div className="col-md-6 m-auto">
                <div className="card p-3">
                    <div className="form-group mt-3">
                        <label htmlFor="">username</label>
                        <input type="text" name='username' placeholder='Enter username' value={formData.username} onChange={HandleChange} />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="">Email</label>
                        <input type="text" name='email' placeholder='Enter email' value={formData.email} onChange={HandleChange} />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="">phone</label>
                        <input type="text" name='phone' placeholder='Enter username' value={formData.phone} onChange={HandleChange} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Example2