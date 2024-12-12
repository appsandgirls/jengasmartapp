// SignIn.jsx
import React from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native"
import Button from "../../components/Button"
import InputField from "../../components/InputField"
import { useRouter } from "expo-router"


const SignIn = () => {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <InputField placeholder="Email" keyboardType="email-address" />
      <InputField placeholder="Password" secureTextEntry />
      <Button
        title="Sign In"
        onPress={() => navigation.navigate("ProjectManagement")}
      />
      <TouchableOpacity onPress={() => router.push("auth/SignUp")}>
        <Text style={styles.link}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  link: { color: "#0056D2", marginTop: 15, textAlign: "center" },
})

export default SignIn
