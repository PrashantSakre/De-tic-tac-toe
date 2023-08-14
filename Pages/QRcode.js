import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Text } from "react-native";
import QRCode from "react-native-qrcode-svg";

function QRcode(props) {
	return (
		<SafeAreaView style={styles.container}>
			<QRCode value={props.value} size={200} backgroundColor={"#F4EEFF"} />
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
});

export default QRcode;
