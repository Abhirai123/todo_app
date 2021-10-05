import React, { useState } from 'react'
import Todo_list2 from './Todo_list2';

const Todo2 = () => {

    const [todoItem, setItem] = useState();
    const [todoItemlist, setList ] = useState([]);
    
    const inputVal = (e)=>{
        setItem(e.target.value)
    }

    const addItem = ()=>{
        setList((prev)=>{
            return [...todoItemlist, todoItem]
        })

        setItem("");
    }

    const deleteItem= (id)=>{
        console.log("item Deleted.....")
        setList((prev)=>{
            return prev.filter((arrE, index)=>{
                  return index !== id
            })
        })
    }

    return (
        <div>
            <h1>Todo List</h1>
            <input type="text" placeholder="add Item.." value={todoItem} onChange={inputVal} />
            <button onClick={addItem}>+</button>
            <ul>
                {
                    todoItemlist.map((item, index)=>{
                        return <Todo_list2 text={item} id={index} index={index} onSubmit={deleteItem} />
                    })
                }
            </ul>
        </div>
    )
}

export default Todo2
