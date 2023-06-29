import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
	Dimensions,
} from "react-native";

const screen = Dimensions.get("window");
const SQUARE_SIZE = Math.floor(screen.width * 0.3);

const Square = ({ onPress, value }) => (
	<TouchableOpacity style={styles.square} onPress={onPress}>
		<Text style={styles.squareText}>{value}</Text>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
  square: {
    borderWidth: 1,
    borderColor: "#A6B1E1",
    backgroundColor: "#DCD6F7",
    alignItems: "center",
    justifyContent: "center",
    width: SQUARE_SIZE,
    height: SQUARE_SIZE,
  },
  squareText: {
    color: "#424874",
    fontSize: 40,
    fontWeight: "bold",
  },
});

export default Square;
