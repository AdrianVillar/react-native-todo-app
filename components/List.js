import React, { Component } from 'react';

import TaskList from './taskList';
import store from './todoStore';

export default class List extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = store.getState();

    store.subscribe(()=> {
      this.setState(store.getState());
    });
  }

  onAddStarted(){
    this.props.navigation.navigate('Taskform',{
      onAdd:(task) => this.onAdd(task),
    });
  }

  onAdd(task){
    console.log('add ', task);
    // this.state.todos.push({ task });
    // this.setState({todos: this.state.todos});

    store.dispatch({
      type: 'ADD_TODO',
      task,
    });
    this.props.navigation.pop();
  }

  onDone(todo){
    console.log('task was completed ', todo.task);

    const filteredTodos = this.state.todos.filter(_todo => _todo !== todo );

    debugger;
    this.setState({todos: filteredTodos});
  }

  render() {
    return <TaskList 
      onDone={this.onDone.bind(this)}
      onAddStarted={this.onAddStarted.bind(this)}
      todos={this.state.todos} />
  }
}