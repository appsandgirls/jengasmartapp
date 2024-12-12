// InputField.jsx
import React from "react"
import { TextInput, StyleSheet } from "react-native"

const InputField = (props) => {
  return <TextInput style={styles.input} {...props} />
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
})

export default InputField
