import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Searchbar } from "react-native-paper";
import colors from '../../styles/colors';

export default function Search() {
  return (
    <View style={styles.container}>
      <Searchbar placeholder='Buscar...' />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bgBlack,
        paddingVertical: 10,
        paddingHorizontal: 20,
        zIndex: 1,
    },
});