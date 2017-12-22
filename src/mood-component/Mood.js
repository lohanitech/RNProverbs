import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Image } from 'react-native'
import styles from './styles'

const moodsImage = [
    require('../assets/1.png'),
    require('../assets/2.png'),
    require('../assets/3.png'),
    require('../assets/4.png'),
    require('../assets/5.png'),
]

export default class Mood extends Component {
    static propTypes = {
        rating: PropTypes.number
    }

    render(){
        return(
            <View style={styles.container}>
                <Image source={moodsImage[this.props.rating]} />
            </View>
        )
    }
}