import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";

import Render from './Render';

class TaskRow extends Component {
  constructor(props, context) {
    super(props, context);
  }

  onDonePressed(){
    this.props.onDone(this.props.todo);
  }

  render(){
    return Render.bind(this)(styles);
  }
}

TaskRow.propTypes = {
  onDone: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    task: PropTypes.string.isRequired
  }).isRequired
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E7E7E7",
    padding: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    marginLeft: 0,
    marginRight: 0
  },
  label: {
    fontSize: 20,
    fontWeight: '300',
  },
  doneButton:{
    borderRadius: 5,
    backgroundColor: '#EAEAEA',
    padding: 5
  },
  doneButtonLabel:{
    fontSize: 12,
  }
});

export default TaskRow;
