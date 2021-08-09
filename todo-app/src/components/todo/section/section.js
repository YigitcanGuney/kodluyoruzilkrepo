import {useState, useEffect} from 'react'


let defaultClass ="";



function Section({ todos, setTodos, filterData, setFilterData   }) {
    const checkTodo = (index, todo) => {
        const newTodos = [...todos];
        newTodos[index] = { ...todo, isDone: todo.isDone ? false : true };
        setTodos(newTodos);
      };
    
      const deleteTodo = (todo) => {
        const newTodos = todos.filter((t) => t !== todo);
        setTodos(newTodos);
      };

      const allCompleted = () => {
        const newTodos = [];
        setTodos(newTodos);
      };

      const allChecked = () => {
          const newTodos = [...todos]
          for(let i =0; i< newTodos.length; i++){
             
            if(newTodos[i].isDone){
                newTodos[i].isDone = false
            }else {
                newTodos[i].isDone = true
            }
              
          }
          setTodos(newTodos)
      }

    
    return (
        <> 
            <section className="main">
                <input name="toggle-all" onChange={allChecked} className="toggle-all" type="checkbox"  />
                <label htmlFor="toggle-all">Marks all as complete</label>
                <ul className="todo-list">          
                        {todos.map((todo, index) => (
                            <li key={index} className={todo.isDone ? "completed" : ""}>
                              <div className="view">
                                <input
                                  className="toggle"
                                  type="checkbox"
                                  defaultChecked={todo.isDone}
                                  onChange={() => checkTodo(index, todo)}
                                />
                                <label>{todo.text}</label>
                                <button
                                  onClick={() => deleteTodo(todo)}
                                  className="destroy"
                                ></button>
                              </div>
                            </li>
                          ))}
                         
                    

                </ul>
            </section>
            <footer className="footer">
                 <span className="todo-count">
                        <strong>{todos.length} </strong>
                        item left
                 </span>
                 <ul className="filters">
                    <li>
                        <a onClick={() => setFilterData("all")}
              className={filterData === "all" ? "selected" : null}>All</a>
                    </li>
                    <li>
                        <a onClick={() => setFilterData("active")}
              className={filterData === "active" ? "selected" : null}>Active</a>
                    </li>
                    <li>
                        <a  onClick={() => setFilterData("completed")}
              className={filterData === "completed" ? "selected" : null} >Complated</a>
                    </li>
                 </ul>

                 <button onClick={() => allCompleted()} className="clear-completed">
                        Clear Completed
                 </button>
            </footer>
        </> 
    )
}

export default Section
