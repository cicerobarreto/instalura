import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native';

export default class InputComentario extends Component {

    constructor() {
        super();
        this.state = { valorComentario: '' }
    }

    render() {
        const { valorComentario } = this.state;
        const { foto } = this.props;

        return (
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder='adicione um comentário'
                    ref={input => this.inputComentario = input}
                    onChangeText={texto => this.setState({ valorComentario: texto })}
                    underlineColorAndroid="transparent" />
                <TouchableOpacity 
                onPress={()=>{
                    this.props.comentarioCallback(foto.id, valorComentario, this.inputComentario)
                    this.state.valorComentario = '';
                    }}>
                    <Image
                        style={styles.imgSend}
                        source={require('../../resources/img/send.png')} />
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
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