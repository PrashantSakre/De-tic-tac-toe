import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	SafeAreaView,
} from "react-native";
import Board from "./Board";
import { allEqual, calculateWinner, getLocalData } from "../Utils/utils";
import { gun } from "./GunTest";
import { useEffect } from "react";
import TouchableButton from "./TouchableButton";
import { appDB } from "../Gun";

const AppBoard = ({ navigation }) => {
	const ticTac = gun.get("ticTac");
	const [xIsNext, setXIsNext] = useState(false);
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [isDraw, setIsDraw] = useState(false);

	const [data, setData] = useState({ groupName: '', pub: '' });
  const [pair, setPair] = useState('');
  const [gameData, setGameData] = useState({
    game: Array(9).fill(null),
    p1wins: 0,
    p2wins: 0,
    draws: 0,
  });

	useEffect(() => {
		// ticTac.on((data) => {
		// 	setSquares(JSON.parse(data.tictac));
		// 	checkDraw(JSON.parse(data.tictac));
		// });
		getLocalData('connection').then(d => {
			if(d) {
				console.log(d, 'connection')
				setData(prev => {return {...prev, groupName: d.id, pub: d.pub}})
			}
		});
		getLocalData('user').then(d => {
			if(d) {
				setPair(d.pair)
			}
		})
	}, []);

	useEffect(() => {
		if(data.groupName && data.pub) {
			const encData = appDB.get(data.groupName);
			encData.on((resData) => {
				getEncData(resData);	
			})
		}
	}, [data])

	async function writeGameData(newSquares, turn) {
		const enc = await SEA.encrypt(JSON.stringify({...gameData, game: newSquares, turn}), await SEA.secret(data.pub, pair));
		console.log('enc', enc)
		appDB.get(data.groupName).put(enc);
	}

	async function getEncData(encData) {
		const dec = SEA.decrypt(encData, await SEA.secret(data.pub, pair));
		dec.then(decData => {
			setSquares(decData.game)
			checkDraw(decData.game)
			setXIsNext(decData.turn)
			console.log('getEncData', decData)
			setGameData(pre => {return {...pre, game: decData.game}})
		});
	}


	const onSquarePress = (i) => {
		const value = xIsNext ? "X" : "O";
		const newSquares = [...squares];

		if (newSquares[i] || calculateWinner(squares)) {
			return;
		}

		newSquares[i] = value;

		// setXIsNext(!xIsNext);
		// ticTac.put({ tictac: JSON.stringify(newSquares) });
		writeGameData(newSquares, !xIsNext)
		checkDraw(newSquares);
	};

	function checkDraw(squares) {
		if (!squares.includes(null) && calculateWinner(squares) === null) {
			setIsDraw(true);
		} else if (allEqual(squares, null)) {
			setIsDraw(false);
		}
	}

	const winner = calculateWinner(squares);

	return (
		<SafeAreaView style={styles.container}>
			<SafeAreaView style={styles.connectBox}>
				<TouchableButton
					text="Connect with player"
					onPress={() => navigation.navigate("Connect")}
				/>
				<TouchableButton
					text="Share your pub key"
					onPress={() => navigation.navigate("QRcode")}
				/>
				<Text>Connection group Id: {data.groupName}</Text>
			</SafeAreaView>

			<SafeAreaView style={styles.gameContainer}>
				<Board squares={squares} onSquarePress={onSquarePress} />
				{winner && (
					<View style={styles.winnerBlock}>
						<Text style={styles.text}>{`Winner: ${winner}`}</Text>
						<TouchableOpacity
							onPress={() =>
								// ticTac.put({
								// 	tictac: JSON.stringify(Array(9).fill(null)),
								// })
								writeGameData(Array(9).fill(null))
							}
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
								// ticTac.put({
								// 	tictac: JSON.stringify(Array(9).fill(null)),
								// });
								setIsDraw(false);
								writeGameData(Array(9).fill(null))
							}}
							style={styles.button}
						>
							<Text style={styles.buttonText}>New Game</Text>
						</TouchableOpacity>
					</>
				)}
			</SafeAreaView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},
	connectBox: {
		display: "flex",
		gap: 10,
		margin: 10,
	},
	gameContainer: {
		flex: 1,
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
