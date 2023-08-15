import React from "react";
import { Text } from "react-native";
import { SafeAreaView, StyleSheet } from "react-native";
import TextInput from "../Components/TextInput";
import TouchableButton from "../Components/TouchableButton";

function Connect({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Connect with player</Text>
			<TextInput placeholder="Enter Player id" />
			<TouchableButton text="Connect" />
			<Text style={styles.title}>OR</Text>
			<TouchableButton
				text="Scan"
				onPress={() => navigation.navigate("Scan")}
			/>
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

export default Connect;
