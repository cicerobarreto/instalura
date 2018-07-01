import React, { Component } from 'react';
import {
    TextInput,
    View,
    Text,
    StyleSheet,
    Button,
    Dimensions
} from 'react-native';


const width = Dimensions.get('screen').width;

export default class Login extends Component {

    efetuarLogin(){
        
    }

    constructor() {
        super();
        this.state = { usuario: '', senha: '' }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}> Instalura </Text>
                <View style={styles.form}>
                    <TextInput placeholder='Usuário...'
                        style={styles.input}
                        ref={input => this.usuario = input}
                        onChangeText={texto => this.setState({ usuario: texto })}
                        underlineColorAndroid="transparent"
                    />

                    <TextInput placeholder='Senha...'
                        style={styles.input}
                        ref={input => this.senha = input}
                        onChangeText={texto => this.setState({ usuario: texto })}
                        underlineColorAndroid="transparent"
                    />

                    <Button title='Login' onPress={this.efetuarLogin.bind(this)}/> 
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        justifyContent: 'center'
    },

    input: {
        margin: 10,
        height: 40,
        borderBottomWidth:1,
        borderBottomColor: '#ddd'
    },

    form: {
        width: width * 0.8
    },

    imgSend: {
        margin: 10,
        width: 30,
        height: 30
    },

    title: {
        fontWeight: 'bold',
        fontSize: 26
    }

});