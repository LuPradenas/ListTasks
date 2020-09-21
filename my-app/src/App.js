import React from 'react';
import TodoForm from './components/TodoFrom';
import './styles.css';

import {todos} from './todos.json';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos:todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }
 // vamos a recibir el indice de la tarea y eliminarlo  voy a actualizar y recorrerlo con el metodo filter .
  removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    });
  }
// este metodo se encarga re recibir la tarea y actualizar el estado
  handleAddTodo(todo) {
    this.setState({
      //uno el estado de las tareas con la nueva tarea asi
      todos: [...this.state.todos, todo]
    })
  }
    render() {
      const todos = this.state.todos.map((todo, i) => {
        return (
          <div className="col-md-4" key={i}>
            <div className="card mt-4">
              <div className="card-title text-center">
                <h3>{todo.title}</h3>
                <span className="badge badge-pill badge-danger ml-2">
                  {todo.priority}
                </span>
              </div>
              <div className="card-body">
                {todo.responsible}
              </div>
              <div className="card-body">
                {todo.description}
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-danger"
                  onClick={this.removeTodo.bind(this, i)}>
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        )
      });
  
      // RETURN THE COMPONENT
      return (
        <div className="App">
  
          <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
              Tasks
              <span className="badge badge-pill badge-light ml-2">
                {this.state.todos.length}
              </span>
            </a>
          </nav>
  
          <div className="container">
            <div className="row mt-4">
  
              <div className="col-md-4 text-center">

                <TodoForm onAddTodo={this.handleAddTodo}/>
              </div>
  
              <div className="col-md-8">
                <div className="row">
                  {todos}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

export default App;
