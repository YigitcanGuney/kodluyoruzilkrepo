import React, {useState, useEffect} from 'react'

import '../../App.css';

import Header from './header/header'
import Section from './section/section';
import Footer from './footer/footer'

function Todo() {

    const [todos, setTodos] = useState([
        {  text: "Learn JavaScript", isDone: false },
        {  text: "Learn React", isDone: true },
        {  text: "Have a life!", isDone: false },
      ]);
      let filter;
    
      useEffect(() => {console.log(todos)}, [todos]);
    
      const [filterText, setFilterText] = useState("");
      const [filterData, setFilterData] = useState("all");
    
      filter = todos.filter((item) => {
        return Object.keys(item).some((key) =>
          item[key]
            .toString()
            .toLowerCase()
            .includes(filterText.toLocaleLowerCase())
        );
      });
    
      filter = todos.filter((item) => {
        if (filterData === "all") {
          return todos;
        } else if (filterData === "active") {
          return item.isDone === false;
        } else {
          return item.isDone === true;
        }
      });


        
    return (
        <div>
            <section className="todoapp">
                <Header todos={todos} setTodos={setTodos} />
                <Section todos={filter} setTodos={setTodos} filterData={filterData} setFilterData={setFilterData} />
            </section>

            <Footer/>
          
        </div>
    )
}

export default Todo
