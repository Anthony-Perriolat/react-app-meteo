import React from "react";
import {Text, View, StyleSheet, TextInput} from 'react-native'

export  default class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            city: 'Valence'
        }
    }
    setCity (city) {
        this.setState({
            city: city,
        })
    }

    render() {
        return (
            <View style={style.view}>
                <Text style={style.title}>Acceuil</Text>
                <Text>lorem marche pas</Text>
                <View  style={style.load}>
                    <TextInput style={style.input} value={this.state.city} onChangeText={(text) => this.setCity(text)}/>
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
    input: {
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 4,
    },
})
