import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	SafeAreaView,
} from "react-native";
import Board from "./Board";
import { calculateWinner } from "../Utils/utils";

const AppBoard = () => {
	const [xIsNext, setXIsNext] = useState(false);
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [isDraw, setIsDraw] = useState(false);

	const onSquarePress = (i) => {
		const value = xIsNext ? "X" : "O";
		const newSquares = [...squares];

		if (newSquares[i] || calculateWinner(squares)) {
			return;
		}

		newSquares[i] = value;

		setXIsNext(!xIsNext);
		setSquares(newSquares);
		if (
			!newSquares.includes(null) &&
			calculateWinner(newSquares) === null
		) {
			setIsDraw(true);
		}
	};

	const winner = calculateWinner(squares);

	return (
		<SafeAreaView style={styles.container}>
			<Board squares={squares} onSquarePress={onSquarePress} />
			{winner && (
				<View style={styles.winnerBlock}>
					<Text style={styles.text}>{`Winner: ${winner}`}</Text>
					<TouchableOpacity
						onPress={() => setSquares(Array(9).fill(null))}
						style={styles.button}
					>
						<Text style={styles.buttonText}>New Game</Text>
					</TouchableOpacity>
				</View>
			)}
			{isDraw && (
				<>
					<Text style={styles.text}>Draw</Text>
					<TouchableOpacity
						onPress={() => {
							setSquares(Array(9).fill(null));
							setIsDraw(false);
						}}
						style={styles.button}
					>
						<Text style={styles.buttonText}>New Game</Text>
					</TouchableOpacity>
				</>
			)}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	winnerBlock: {
		marginTop: 50,
	},
	button: {
		borderRadius: 5,
		borderColor: "#424874",
		borderWidth: 1,
		marginTop: 10,
	},
	buttonText: {
		color: "#424874",
		fontSize: 14,
		paddingHorizontal: 20,
		paddingVertical: 5,
	},
	text: {
		color: "#424874",
		textAlign: "center",
		fontSize: 20,
	},
});

export default AppBoard;
