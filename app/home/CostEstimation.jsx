// CostEstimation.jsx
import React from "react"
import { View, Text, StyleSheet } from "react-native"
import Button from "../../components/Button"
import InputField from "../../components/InputField"
import { SafeAreaView } from "react-native-safe-area-context"

const CostEstimation = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Cost Estimation</Text>
        <InputField placeholder="Size" keyboardType="numeric" />
        <InputField placeholder="Material Cost" keyboardType="numeric" />
        <InputField placeholder="Location Factor" keyboardType="numeric" />
        <Button title="Estimate" onPress={() => console.log("Estimate cost")} />
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
})

export default CostEstimation
