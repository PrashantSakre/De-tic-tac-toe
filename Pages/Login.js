import React from "react";
import { Text } from "react-native";
import { SafeAreaView, StyleSheet } from "react-native";
import TextInput from "../Components/TextInput";
import TouchableButton from "../Components/TouchableButton";

function Login() {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Tic Tac Toe</Text>
			<TextInput placeholder="Enter Name" />
			<TouchableButton text="Enter" />
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
