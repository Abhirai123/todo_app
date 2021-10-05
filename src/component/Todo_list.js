import React from 'react'

const Todo_list = (props) => {

    
    return (
        <>
           <li>{props.text} <button onClick={()=>{
               props.onSelect(props.id)
           }}  >X</button></li>
           
           </>
         )
}

export default Todo_list
