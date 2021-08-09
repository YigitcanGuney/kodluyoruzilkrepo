import {useState, useEffect} from 'react'



function Header({ todoList, setTodoList  }) {

    
    const [form, setForm] = useState({todoText: "", isDone: false})

    const onChange=(e) => {
        setForm({...form, [e.target.name] : e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();

        setTodoList([...todoList, form])
        console.log(form);
    }

    return (
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={onSubmit}>
                <input name="todoText" onChange={onChange} className="new-todo" placeholder="What needs to be done?" autoFocus />
            </form>
        </header>
    )
}

export default Header
