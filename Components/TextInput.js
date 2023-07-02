import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

export default function ({ ...props }) {
  return <TextInput style={{...styles.input, ...props.styles}} {...props} />
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    fontSize: 20,
    borderColor: "#A6B1E1",
    height: 45,
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
  }
})