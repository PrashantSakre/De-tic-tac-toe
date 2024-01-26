import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "../Components/Tabs";
import Login from "../Pages/Login";
import Connect from "../Pages/Connect";
import QRcode from "../Pages/QRcode";
import { getLocalData } from "../Utils/utils";

function Scan() {
	return (
		<View
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
		>
			<Text>Scan code Screen</Text>
		</View>
	);
}

const Stack = createNativeStackNavigator();

function Routes() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		getLocalData('user').then(d => {
			if(d) {
				setIsLoggedIn(true)
			} else {
				setIsLoggedIn(false)
			}
		})
	}, [])

	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName={isLoggedIn ? 'tabs' : 'Login'}
				screenOptions={{
					headerShown: false,
				}}
			>
				{isLoggedIn ? (
					null
				) : (
					<Stack.Screen name="Login" component={Login} />
				)}
						<Stack.Screen name="tabs" component={Tabs} />
						<Stack.Screen
							options={{
								headerShown: true,
							}}
							name="Connect"
							component={Connect}
						/>
						<Stack.Screen
							options={{
								headerShown: true,
							}}
							name="QRcode"
							component={QRcode}
						/>
						<Stack.Screen
							options={{
								headerShown: true,
							}}
							name="Scan"
							component={Scan}
						/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Routes;
