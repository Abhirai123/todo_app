import React, { useState } from 'react'
import Todo_list from './Todo_list';

const Todo = () => {

    const [additem, setItem] = useState();
    const [itemlist, setitemlist] = useState([])

    const inputChange = (e)=>{
        setItem(e.target.value)
    }

    const add = ()=>{
        setitemlist((prev)=>{
            return [...prev, additem]
        });
        setItem("");
    }

    const deleteitem = (id)=>{
        setitemlist((previtem)=>{
            return previtem.filter((arrEle, index)=>{
                return index !== id
            })
        })

    }
    return (
        <div>
            <h1>To Do App</h1>
            <input type="text" placeholder="add items" onChange={inputChange} value={additem} />
            <button   className="add_btn" onClick ={add}>+</button>
            <ul>
                {
                    itemlist.map((item, index)=>{
                       return <Todo_list key={index} id={index} text={item} onSelect={deleteitem} />
                    })
                }
                
            </ul>
        </div>
    )
}

export default Todo
