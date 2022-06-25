import React, { useState } from "react"
import { add } from "../slices/toDoSlice";
import ToDo from "../components/ToDo";
import { useDispatch, useSelector } from "react-redux";

function Home() {
    const { toDos } = useSelector(state => state)
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const onChange = (e) => {
        setText(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(add(text))
        setText('')
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <h1>To Do</h1>
                <input type="text" value={text} onChange={onChange} />
                <button type="submit">Add</button>  
            </form>
            <ul>
                {toDos.map(toDo => {
                    return (
                        <ToDo key={toDo.id} {...toDo} />
                    )
                })}
            </ul>
        </>
    )
}

export default Home