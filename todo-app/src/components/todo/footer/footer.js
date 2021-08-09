import React from 'react'

function Footer({todoList, setTodoList, filterCategory, setFilterCategory}) {
    const deleteTodos = () => {
        const newsTodo = []
        setTodoList(newsTodo)
    }
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{todoList.length} </strong>
                Item Left
            </span>

            <ul className="filters">
                <li>
				    <a onClick={() => setFilterCategory("all")} 
                    className={filterCategory === "all" ? "selected" : ""}
                    >All</a>
			    </li>
                <li>
				    <a onClick={() => setFilterCategory("active")} 
                    className={filterCategory === "active" ? "selected" : ""}
                    >Active</a>
			    </li>
                <li>
				    <a onClick={() => setFilterCategory("completed")}
              className={filterCategory === "completed" ? "selected" : null}>Completed</a>
			    </li>
            </ul>

            <button onClick={deleteTodos} className="clear-completed">
			    Clear completed
		    </button>

        </footer>
    )
}

export default Footer
