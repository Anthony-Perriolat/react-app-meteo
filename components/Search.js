import React from "react";
import {Text, View, StyleSheet, TextInput, Button} from 'react-native'
import {StackNavigationState} from "@react-navigation/native";

export  default class Search extends React.Component {

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
                <Text>Rechercher la méteo de votre ville</Text>
                <View  style={style.load}>
                    <TextInput style={style.input} value={this.state.city} onChangeText={(text) => this.setCity(text)}/>
                    <View style={style.buttonSearch}>
                    <Button color={'tomato'} onPress={() => this.search()} title="Rechercher"/>
                    </View>
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
        margin: 20,
        marginBottom:10,
        padding:10,
    },
    buttonSearch: {
        margin: 10,
        paddingLeft:150,
        paddingRight:150,
    }
})
