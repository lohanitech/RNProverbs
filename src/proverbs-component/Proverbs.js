import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import styles from './styles'
import proverbs from '../assets/proverbs.json';

export default class Mood extends Component {
    render(){
        return(
            <View style={styles.container}>
                {proverbs.map((proverb,index)=>{
                    return(
                        <View key={index} style={styles.proverbItem}>
                            <Text style={styles.proverbText}>{proverb}</Text>
                        </View>
                    )
                })}
            </View>
        )
    }
}