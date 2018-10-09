import React, { Component } from 'react';

import TaskList from './taskList';
// import { createStackNavigator } from 'react-navigation';

export default class List extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      todos: [
        {
          task: 'Learn React Native'
        },
        {
          task: 'Learn Redux'
        },
      ]
    }
  }

  onAddStarted(){
    this.props.navigation.navigate('Taskform',{
      onAdd:(task) => this.onAdd(task),
    });
  }

  onAdd(task){
    console.log('add ', task);
    this.state.todos.push({ task });
    this.setState({todos: this.state.todos});
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