import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Text } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { getLocalData } from "../Utils/utils";
import Clipboard from "@react-native-clipboard/clipboard";
import TouchableButton from "../Components/TouchableButton";

function QRcode(props) {
	const [pub, setPub] = useState("");

	useEffect(() => {
		getLocalData("user").then((d) => {
			setPub(d.pair.epub);
		});
	}, []);

	function handleCopy() {
		Clipboard.setString(pub);
	}
	
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.pubText}>pub Key:</Text>
			<Text style={styles.pubText}>{pub}</Text>
			<TouchableButton text="Copy" onPress={handleCopy} />
			{pub ? (
				<QRCode
					value={pub.toString()}
					size={200}
					backgroundColor={"#F4EEFF"}
				/>
			) : null}
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
	pubText: {
		width: "90%",
	},
});

export default QRcode;
