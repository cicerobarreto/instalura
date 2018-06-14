import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  Dimensions
} from 'react-native';

const width = Dimensions.get('screen').width;

export default class App extends Component {
  render() {
    const fotos = [{ id: 1, ususario: 'Cícero' },
    { id: 2, ususario: 'João' },
    { id: 3, ususario: 'Luíza' }];

    return (
      <FlatList style={styles.conteiner}
        keyExtractor={item => `${item.id}`}
        data={fotos}
        renderItem={({ item }) =>
          <View>
            <View style={styles.cabecalho}>
              <Image source={require('./resources/img/foto1.jpg')}
                style={styles.fotoPerfil} />
              <Text> {item.ususario} </Text>
            </View>
            <Image source={require('./resources/img/foto1.jpg')}
              style={styles.foto} />
          </View>
        }
      />
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
  }

});