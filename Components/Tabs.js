import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import GunTest from "./GunTest";
import AppBoard from "./Game";

function Game({ navigation }) {
	return (
		<View style={styles.view}>
			<AppBoard navigation={navigation} />
		</View>
	);
}

function Profile() {
	return (
		<View style={styles.view}>
			<GunTest />
		</View>
	);
}

function LeaderBoard() {
	return (
		<View style={{ flex: 1, backgroundColor: "#F4EEFF" }}>
			<Text>LeaderBoard!</Text>
		</View>
	);
}

function AppInfo() {
	return (
		<View style={styles.view}>
			<Text>Info of the app</Text>
		</View>
	);
}

const Tab = createBottomTabNavigator();

export default function Tabs() {
	return (
		<Tab.Navigator
			initialRouteName="Tic Tac Toe"
			screenOptions={{
				tabBarActiveTintColor: "#424874",
			}}
		>
			<Tab.Screen
				name="Tic Tac Toe"
				component={Game}
				options={{
					tabBarLabel: "Play",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="play"
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Leaderboard"
				component={LeaderBoard}
				options={{
					tabBarLabel: "Leaderboard",
					tabBarIcon: ({ color, size }) => (
						<MaterialIcons
							name="leaderboard"
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarLabel: "Profile",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="account"
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="App Info"
				component={AppInfo}
				options={{
					tabBarLabel: "Info",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="information-variant"
							color={color}
							size={size}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
}

const styles = StyleSheet.create({
	view: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F4EEFF",
	},
});
