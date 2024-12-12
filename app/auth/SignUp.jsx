// SignUp.jsx
import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import Button from "../../components/Button"
import InputField from "../../components/InputField"
import { useRouter } from "expo-router"

const SignUp = () => {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <InputField placeholder="Name" />
      <InputField placeholder="Email" keyboardType="email-address" />
      <InputField placeholder="Password" secureTextEntry />
      <Button title="Sign Up" onPress={() => router.push("auth/SignIn")} />
      <TouchableOpacity onPress={() => router.push("auth/SignIn")}>
        <Text style={styles.link}>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  link: { color: "#0056D2", marginTop: 15, textAlign: "center" },
})

export default SignUp
