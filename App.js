import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import About from "./components/About";
import Home from "./components/Home"
import { NavigationContainer } from '@react-navigation/native';




export default function App() {
  return (
      <NavigationContainer>{
        <Home/>
        }</NavigationContainer>
  );
}
