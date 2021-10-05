import React from 'react'

const Todo_list3 = (props) => {
    return (
        <div>
            <li>{props.text} <button onClick={()=>{
                props.onSubmit(props.id)
            }}>X</button></li>
        </div>
    )
}

export default Todo_list3
