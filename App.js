import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Platform
} from 'react-native';

import Post from './src/componentes/post'
export default class App extends Component {

  constructor() {
    super();
    this.state = {
      fotos: []
    }
  }

  funcLike(idFoto) {

    const foto = this.state.fotos.find(foto => foto.id === idFoto);
    let novaLista = []

    if (!foto.likeada) {
      novaLista = [...novaLista, { login: 'Usuário' }]
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
    const listaAtualizada = this.state.fotos.map(
      fotoCompara => {
        if (fotoCompara.id === foto.id) {
          return fotoAtualizada;
        } else {
          return fotoCompara;
        }
      }
    )

    this.setState({ fotos: listaAtualizada })
  }

  comentar(idFoto, valorComentario, inputComentario) {
    const foto = this.state.fotos.find(foto => foto.id === idFoto);
    if (valorComentario === '')
      return;
    const novoComentario = { id: foto.id, login: 'Pedro', texto: valorComentario }
    const listaAtualComentarios = [...foto.comentarios, novoComentario]
    const fotoAtualizada = { ...foto, comentarios: listaAtualComentarios }
    const fotos = this.state.fotos.map(foto => foto.id === fotoAtualizada.id ? fotoAtualizada : foto)
    this.setState({ fotos })
    inputComentario.clear();
  }

  componentDidMount() {
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
      .then(resposta => resposta.json())
      .then(json => this.setState({ fotos: json }))
  }

  render() {
    return (
      <FlatList style={styles.conteiner}
        keyExtractor={item => `${item.id}`}
        data={this.state.fotos}
        renderItem={({ item }) =>
          <Post foto={item} funcLike={this.funcLike.bind(this)} comentar={this.comentar.bind(this)} />
        }
      />
    );
  }
}

const marginTop = Platform.OS == 'ios' ? 20 : 0

const styles = StyleSheet.create({
  conteiner: {
    marginTop: marginTop
  }
});