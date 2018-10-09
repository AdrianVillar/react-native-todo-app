import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableHighlight,
  StyleSheet
} from "react-native";
import PropTypes from "prop-types";

export default class Taskform extends Component {
  constructor(props, context) {    
    super(props, context);
  }

  onChange(text){
    this.task = text;
  }

  onAddPressed(){
    const {params} = this.props.navigation.state;
    params.onAdd(this.task);
  }

  render() {
    
    
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} onChangeText={this.onChange.bind(this)} />

        <View style={{flex:1,flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between'}}>
          <TouchableHighlight 
            onPress={this.onAddPressed.bind(this)}
            style={[styles.button,{flexBasis: '49%'}]}>
              <Text style={styles.buttonText}>Add</Text>
          </TouchableHighlight>

          <TouchableHighlight 
            onPress={() => this.props.navigation.goBack()}
            style={[styles.button, styles.cancelButton,{flexBasis: '49%'}]}>
              <Text style={styles.buttonText}>
                Cancel
              </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 10,
    backgroundColor: "#F7F7F7",
    paddingLeft: 5,
    paddingRight: 5
  },
  input: {
    borderWidth: 1,
    borderColor: "#D7D7D7",
    padding: 10,
    borderRadius: 3
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FAFAFA",
  },
  button: {
    height: 45,
    alignSelf: "stretch",
    backgroundColor: "#05A5D1",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  cancelButton: {
    backgroundColor: '#666'
  }
});
