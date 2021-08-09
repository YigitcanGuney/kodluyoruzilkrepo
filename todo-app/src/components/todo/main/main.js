import {useState, useEffect} from 'react'


let defaultClass ="";



function Section({ todoList, setTodoList   }) {
  const newTodos = [...todoList];
    

    const allCheckedItem = (e) => todoList.map((item , index) => {

 
    newTodos[index].isDone = e.target.checked
    setTodoList(newTodos)
    console.log(newTodos[index].isDone)
  })

  

  const checkTodo = (index, todo) => {
    
    newTodos[index] = { ...todo, isDone: todo.isDone ? false : true };
    setTodoList(newTodos);
  };


  console.log(todoList)
    
    return (
      <section className="main">
      <input name="todoList" className="toggle-all" type="checkbox"  onChange={(e) =>allCheckedItem(e) } ></input>
      <label htmlFor="toggle-all">
    Mark all as complete
  </label>

      <ul className="todo-list">   
          {
              todoList.map((item, index) => (
                  <li  key={index} className={ item.isDone ? "completed" : ""}>
                      <div className="view">
                          <input name="isDone" className="toggle" type="checkbox" 
                          
                          defaultChecked={item.isDone}
                          onChange={() =>checkTodo(index,item) } 
                           />
                          <label>{item.todoText}</label>
                          <button className="destroy"></button>
                      </div>
                  </li>
              )
                  
              )
          }
        
      </ul>
      
  </section>
    )
}

export default Section
