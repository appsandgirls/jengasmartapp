// Navbar.jsx
import React from "react"
import { View, Text, StyleSheet } from "react-native"

const Navbar = ({ title }) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: { backgroundColor: "#0056D2", padding: 15 },
  title: { color: "#fff", fontSize: 18, textAlign: "center" },
})

export default Navbar
