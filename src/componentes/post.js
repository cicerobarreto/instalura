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

    funcLike() {
        const { foto } = this.state;
        let novaLista = []

        if (!foto.likeada) {
            novaLista = [...novaLista,{ login: 'Usuário' }]
        } else {
            novaLista = foto.likers.filter(liker => {
                return liker.login !== 'Usuário'
            })
        }

        const fotoAtualizada = {
            ...foto,
            likeada: !foto.likeada,
            likers: novaLista
        }

        this.setState({ foto: fotoAtualizada })
    }

    exibirLikers(likers) {
        if (likers.length == 0) {
            return;
        } else {
            return (
                <Text style={styles.likes}>
                    {likers.length} {likers.length > 1 ? 'curtidas' : 'curtida'}
                </Text>
            );
        }

    }

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
        const { foto } = this.state;

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
                    <TouchableOpacity onPress={this.funcLike.bind(this)}>
                        <Image source={this.carrgaIcone(foto.likeada)} style={styles.botaoLike} />
                    </TouchableOpacity>

                    {this.exibirLikers(foto.likers)}
                    {this.exibirComentarios(foto)}

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

    comentario: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    tituloComentario: {
        fontWeight: 'bold',
        marginRight: 5
    }

});