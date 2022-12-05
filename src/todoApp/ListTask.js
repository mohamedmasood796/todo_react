import React from 'react'

function ListTask({task,index,removeTask}) {
    console.log("lplp");
    return (
        <>
            <div className='list-tasks'>
            <input type="checkbox" className='checkbox' name="" id="" />
                {task.title}
                <button onClick={()=>{removeTask(index)}} className='delect-btn'>Delete</button>
            </div>
        </>
    )
}

export default ListTask