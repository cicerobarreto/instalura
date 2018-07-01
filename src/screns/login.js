import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    Image,
    StyleSheet
} from 'react-native';


export default class Login extends Component {

    constructor() {
        super();
        this.state = { usuario: '', senha: '' }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder='Usuário...'
                    ref={input => this.usuario = input}
                    onChangeText={texto => this.setState({ usuario: texto })}
                    underlineColorAndroid="transparent" />
                
                <TextInput style={styles.input} placeholder='Senha...'
                    ref={input => this.usuario = input}
                    onChangeText={texto => this.setState({ usuario: texto })}
                    underlineColorAndroid="transparent"
                    caretHidden='true' />

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'

    },

    input: {
        height: 40,
        flex: 1
    },

    imgSend: {
        margin: 10,
        width: 30,
        height: 30
    }

});