import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native';

const width = Dimensions.get('screen').width;

export default class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foto: this.props.foto
        }
    }

    carrgaIcone(likeada) {
        return likeada ? require('../../resources/img/s2-checked.png') : require('../../resources/img/s2.png')
    }
    funcLike () {
        const fotoAtualizada = {
            ...this.state.foto,
            likeada: !this.state.foto.likeada
        }
        this.setState({foto: fotoAtualizada})
    }

    render() {
        const { foto } = this.state;
        
        return (
            <View>
                <View style={styles.cabecalho}>
                    <Image source={{ uri: foto.urlPerfil }}
                        style={styles.fotoPerfil} />
                    <Text> {this.props.foto.loginUsuario} </Text>
                </View>
                <Image source={{ uri: foto.urlFoto }}
                    style={styles.foto} />

                <View style={styles.rodape}>
                    <TouchableOpacity onPress={this.funcLike.bind(this)}>
                        <Image source={this.carrgaIcone(foto.likeada)} style={styles.botaoLike} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    conteiner: {
        marginTop: 20
    },
    cabecalho: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    fotoPerfil: {
        margin: 10,
        borderRadius: 20,
        width: 40,
        height: 40
    },
    foto: {
        width: width,
        height: width
    },

    botaoLike: {
        height: 40,
        width: 40
    },

    rodape: {
        margin: 10
    }


});