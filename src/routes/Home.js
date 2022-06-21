import React, { useState } from "react"

function Home() {
    const [text, setText] = useState('')
    const onChange = (e) => {
        setText(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        setText('')
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <h1>To Do</h1>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>  
            </form>
            <ul>
            </ul>  
        </>
    )
}

export default Home