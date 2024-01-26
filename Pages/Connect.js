import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import TextInput from "../Components/TextInput";
import TouchableButton from "../Components/TouchableButton";
import { storeLocalData } from "../Utils/utils";

function Connect({ navigation }) {
	const [ id, setId] = useState('');
	const [pub, setPub] = useState('');

	function handleConnect() {
		storeLocalData('connection', {id, pub}).then(() => {
			navigation.navigate("Tic Tac Toe");
		})
	}
	
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.box}>
				<Text style={styles.title}>Connect with player</Text>
				<TextInput placeholder="Enter group id" onChangeText={setId} value={id} />
				<TextInput placeholder="Enter Player epub" onChangeText={setPub} value={pub} />
				<TouchableButton text="Connect" onPress={handleConnect} />
				<Text style={styles.title}>OR</Text>
				<TouchableButton
					text="Scan"
					onPress={() => navigation.navigate("Scan")}
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: "10%",
		alignItems: "center",
		justifyContent: "center",
		gap: 20,
	},
	box: {
		width: "90%",
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 20,
	},
	title: {
		fontSize: 40,
		fontWeight: "bold",
		marginBottom: 20,
	},
});

export default Connect;
