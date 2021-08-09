import React, {useState, useEffect} from 'react'

import '../../App.css';

import Header from './header/header'
import Main from './main/main';
import Footer from './footer/footer'

function Todo() {

  const[todolist, setTodoList] = useState(
    [
        {
            todoText : "HTML",
            isDone : false
        },
        {
            todoText : "CSS",
            isDone : false
        },
        {
            todoText : "JAVASCRİPT",
            isDone : true
        },
        {
            todoText : "REACT",
            isDone : false
        },
    ])

    useEffect(() => {
        console.log(todolist)
    }, [todolist])

    let filterItem;
    const [filterChecked, setFilterChecked] = useState("");

    filterItem = todolist.filter((item) => {
        return Object.keys(item).some((key) =>
          item[key]
            .toString()
            .toLowerCase()
            .includes(filterChecked.toLocaleLowerCase())
        );
      });
    console.log( filterItem)


    const [filterCategory, setFilterCategory] = useState("all");

    filterItem= todolist.filter((item) => {
        if (filterCategory === "all") {
          return todolist;
        } else if (filterCategory === "active") {
          return item.isDone === false;
        } else {
          return item.isDone === true;
        }
      });

    

        
    return (
      <>
        <Header todoList = {todolist} setTodoList={setTodoList}/>
        <Main todoList={filterItem} setTodoList={setTodoList}/>
        <Footer todoList={filterItem} setTodoList={setTodoList} filterCategory={filterCategory} setFilterCategory={setFilterCategory}/>
        
     </>
    )
}

export default Todo
