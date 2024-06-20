import React from 'react'

function Loading() {
  return (
  <div className="container" style={{display:'flex', alignItems:'center', justifyContent:'center', height:'100vh', position:'fixed', top:0, left:0, width:'100%', background:'#ffffff90'}}>
    <div className="card p-5">
    <div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>
    </div>
  </div>
  )
}

export default Loading