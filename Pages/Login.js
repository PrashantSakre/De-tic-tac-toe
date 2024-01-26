import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { createLocalUser } from "../Gun";
import TextInput from "../Components/TextInput";
import TouchableButton from "../Components/TouchableButton";

function Login({ navigation }) {
	const [userNameText, setUserNameText] = useState('');

	function handleCreateUser() {
		createLocalUser(userNameText).then((d) => {
			console.log("d", d)
			navigation.reset({
				index: 0,
				routes: [{ name: 'tabs' }],
			})
		})
	}
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Tic Tac Toe</Text>
			<TextInput placeholder="Enter Name" onChangeText={setUserNameText} value={userNameText} />
			<TouchableButton text="Enter" onPress={handleCreateUser} />
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
	title: {
		fontSize: 40,
		fontWeight: "bold",
		marginBottom: 20,
	},
});

export default Login;
