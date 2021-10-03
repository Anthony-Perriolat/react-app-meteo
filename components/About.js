import React from "react";
import {Text, View, StyleSheet, ActivityIndicator, Button,} from 'react-native'



export  default class About extends React.Component {

    search () {
        this.props.navigation.navigate('Search')
    }

    render() {
        return (
            <View style={style.view}>
                <Text style={style.title}>A propos de moi </Text>
                <Text>Developpeur fullstack freelance, utilisant les langages Python, Php, Java, Java script.  </Text>
                <View  style={style.load}>
                <ActivityIndicator color="red" size="large"/>
                <ActivityIndicator color="green" size="large"/>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    title: {
        color: 'red',
        fontSize:25,
    },
    view: {
        margin: 60,
    },
    load: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 100,
    }
})
