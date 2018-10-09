import React from "react";

import { View, Text, TouchableHighlight } from "react-native";
import SwipeOut from "react-native-swipeout";

export default function render(styles) {
  const buttons = [
    {
      text: "Done",
      backgourndColor: "#05A5D1",
      underlayColor: "#273539",
      onPress: this.onDonePressed.bin(this)
    }
  ];

  return (
    <SwipeOut
      backgroundColor="#fff"
      right={buttons}>
      <View style={styles.container}>
        <Text style={styles.label}>{this.props.todo.task}</Text>

        <TouchableHighlight
          onPress={this.onDonePressed.bind(this)}
          style={styles.doneButton}
        >
          <Text style={[styles.label, styles.doneButtonLabel]}>Done</Text>
        </TouchableHighlight>
      </View>
    </SwipeOut>
  );
}
