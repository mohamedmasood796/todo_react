import React, { useState } from 'react'

function AddTask({addTask}) {
    const [value,setValue]=useState('')

    const addItems=()=>{
        addTask(value)
        console.log("hai")
        console.log(value)
        setValue('')
    }


    return (
        <>
            <div  className='input-container'>
                <input type="text" className='input' placeholder="🖊️ Add item..."  value={value}
                
                onChange={(e)=>{setValue(e.target.value)}}
                />
                <button onClick={addItems } className='add-btn'>add</button>
            </div>
        </>
    )
}

export default AddTask