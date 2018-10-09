import React from "react";
import { createStackNavigator } from "react-navigation";
import List from '../List';
import Taskform from '../taskForm';

const Navigator = createStackNavigator({
  Todo: { 
    screen: List ,
    navigationOptions:{
      title: 'Todo',
    }
  },
  Taskform: {
    screen: Taskform,
    navigationOptions:{
      title: 'Add stuff',
    }
  }
});

export default Navigator;
