import './App.css';

import Todo from './components/todo/todo'

function App() {
  return (
    <>
    <section className="todoapp">
      <Todo/>
    </section>
    <footer className="info">
          <p>Click to edit a todo</p>
          <p>CopyRight © <a href="https://instagram.com/alifiret">Yiğitcan GÜNEY</a></p>
    </footer>
    </>
  );
}

export default App;
