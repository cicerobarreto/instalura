import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';


export default class Likes extends Component {

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

    carrgaIcone(likeada) {
        return likeada ? require('../../resources/img/s2-checked.png') : require('../../resources/img/s2.png')
    }

    render() {
        const {foto, likeCallBack} = this.props
        
        return (
            <View>
                <TouchableOpacity onPress={()=>likeCallBack(foto.id)}>
                    <Image source={this.carrgaIcone(foto.likeada)} style={styles.botaoLike} />
                </TouchableOpacity>

                {this.exibirLikers(foto.likers)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    botaoLike: {
        marginBottom: 10,
        height: 40,
        width: 40
    },

    likes: {
        fontWeight: 'bold'
    }
});