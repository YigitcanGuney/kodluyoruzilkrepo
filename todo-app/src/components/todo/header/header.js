import {useState, useEffect} from 'react'



function Header({ todos, setTodos  }) {

    

    const [form, setForm] = useState({text : "", done : false })

 
    
    const onSubmit = (e) => {
        e.preventDefault();
        if (form.text == "") {
            return false
        }

        setTodos([...todos , form])

        console.log(form)
    }

    const onChange = (e) => {
        setForm({...form , [e.target.name] : e.target.value})
    }

    return (
        <header className="header">
                <h1>todos</h1>
                <form onSubmit = {onSubmit} >
                    <input name="text" onChange={onChange}  className="new-todo" placeholder="What needs to be done?" autoFocus={true} />
                </form>
        </header>
    )
}

export default Header
