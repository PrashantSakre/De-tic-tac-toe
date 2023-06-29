import React from "react";
import { View, StyleSheet } from "react-native";
import Square from "./Square";

const Board = ({ onSquarePress, squares }) => {
	const renderSquare = (i) => {
		return <Square value={squares[i]} onPress={() => onSquarePress(i)} />;
	};

	return (
		<View style={styles.board}>
			<View style={styles.row}>
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
			</View>
			<View style={styles.row}>
				{renderSquare(3)}
				{renderSquare(4)}
				{renderSquare(5)}
			</View>
			<View style={styles.row}>
				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
  board: {
    borderWidth: 1,
    borderColor: "#fff",
  },
  row: {
    flexDirection: "row",
  },
});

export default Board;
