import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function TouchableButton({...props}) {
  return (
    <TouchableOpacity style={{...styles.button, ...props.styles}} {...props}>
      <Text style={{...styles.text}}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 7,
    elevation: 1,
    backgroundColor: "#DCD6F7",
    borderColor: "#DCD6F7",
    borderWidth: 1,
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: "#424874",
  }
})
