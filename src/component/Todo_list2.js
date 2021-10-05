import React from 'react'

const Todo_list2 = (props) => {

    
    return (
        <div>
            <li>{props.text} <button onClick={()=>{
                props.onSubmit(props.id)
            }}>X</button></li>
        </div>
    )
}

export default Todo_list2
