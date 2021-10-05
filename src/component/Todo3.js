import React, { useState } from 'react'
import Todo_list3 from './Todo_list3';

const Todo3 = () => {

    const [todoItem, setItem] = useState();
    const [todoList, setList] = useState([]);

    const inputChange = (e)=>{
        setItem(e.target.value)
    }

    const addItem = ()=>{
        setList((prev)=>{
            return [...todoList, todoItem]
        })

        setItem("");
    }

    const deleteItem = (id)=>{
        setList((prev)=>{
            return prev.filter((arrEle, index)=>{
                return index !== id;
            })
        })
    }
    return (
        <div>
            <h1>Todo List 3</h1>
            <input type="text" placeholder="Add Item.." onChange={inputChange} value={todoItem} />
            <button  className="add_btn"  onClick={addItem}>+</button>
            <ul>
                {todoList.map((item, index)=>{
                        return <Todo_list3 text={item} index={index} id={index} onSubmit={deleteItem} />
                })

                }
            </ul>
        </div>
    )
}

export default Todo3
