import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import About from "./components/About";
import Search from "./components/Search"
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {red} from "react-native-reanimated/src/reanimated2/Colors";



// NavigationBar.js

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
        <StatusBar hidden={true}/>
        <Tab.Navigator screenOptions={({ route }) => ({
             tabBarIcon: ({ focused, color, size }) => {
                     let iconName;

                     if (route.name === 'home') {
                         iconName = focused
                             ? 'ios-albums' : 'ios-albums';
                     } else if (route.name === 'about') {
                         iconName = focused ? 'ios-information-circle' : 'ios-information-circle' ;
                     }

                     return <Ionicons name={iconName} size={size} color={color} />;
                 },
                 tabBarActiveTintColor: 'tomato',
                 tabBarInactiveTintColor: 'gray',
                 tabBarShowLabel: false,
             })}
        >
            <Tab.Screen name="home" component={Search}/>
            <Tab.Screen name="about" component={About}/>
         </Tab.Navigator>
        </NavigationContainer>
    );
}



