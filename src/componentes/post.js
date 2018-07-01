import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';

import InputComentario from './inputComentario'
import Likes from './likes'

const width = Dimensions.get('screen').width;

export default class Post extends Component {

    exibirComentarios(foto) {
        if (foto.comentario === '')
            return;
        return (
            <View style={styles.comentario}>
                <Text style={styles.tituloComentario}>{foto.loginUsuario}</Text>
                <Text>{foto.comentario}</Text>
            </View>
        );
    }

    render() {
        const { foto, funcLike, comentar } = this.props;
        return (
            <View>
                <View style={styles.cabecalho}>
                    <Image source={{ uri: foto.urlPerfil }}
                        style={styles.fotoPerfil} />
                    <Text> {foto.loginUsuario} </Text>
                </View>
                <Image source={{ uri: foto.urlFoto }}
                    style={styles.foto} />

                <View style={styles.rodape}>
                    <Likes likeCallBack={funcLike.bind(this)} foto={foto}/>        
                    {this.exibirComentarios(foto)}

                    {foto.comentarios.map(comentario =>
                        <View key={comentario.id} style={styles.comentario}>
                            <Text style={styles.tituloComentario}>{comentario.login}</Text>
                            <Text>{comentario.texto}</Text>
                        </View>
                    )}

                    <InputComentario foto={foto} comentarioCallback={comentar.bind(this)}/>

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
        marginBottom: 10,
        height: 40,
        width: 40
    },

    rodape: {
        margin: 10
    },

    likes: {
        fontWeight: 'bold'
    },

    tituloComentario: {
        fontWeight: 'bold',
        marginRight: 5
    },

    comentario: {
        flexDirection: 'row'
    }

});