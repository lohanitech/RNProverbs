import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import styles from './styles'
import proverbs from '../assets/proverbs.json';

export default class Mood extends Component {

    renderItem = ({item}) => (
        <View style={styles.proverbItem}>
            <Text style={styles.proverbText}>{item.proverb}</Text>
        </View>
    )

    renderHeader = () => (
        <Text style={styles.title}>
            Proverbs
        </Text>
    )

    renderSeparator = () => (
        <View style={styles.separator}></View>
    )

    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data={proverbs}
                    renderItem={this.renderItem}
                    ListHeaderComponent={this.renderHeader}
                    ItemSeparatorComponent={this.renderSeparator}
                />
            </View>
        )
    }
}