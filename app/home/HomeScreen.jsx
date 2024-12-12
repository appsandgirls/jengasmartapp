// HomeScreen.jsx
import React from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native"
import { useRouter } from "expo-router"
import Button from "../../components/Button"
import { SafeAreaView } from "react-native-safe-area-context"

const HomeScreen = () => {
  const router = useRouter()

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Welcome to Smart Jenga</Text>
        <Text style={styles.subtitle}>
          Streamline your construction projects
        </Text>

        <View style={styles.cardContainer}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push("home/ProjectManagement")}
          >
            <Text style={styles.cardText}>Project Management</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push("home/CostEstimation")}
          >
            <Text style={styles.cardText}>Cost Estimation</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push("home/Chat")}
          >
            <Text style={styles.cardText}>Chat & Document Upload</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push("home/Rating")}
          >
            <Text style={styles.cardText}>Rate Contractors</Text>
          </TouchableOpacity>
        </View>

        <Button
          title="Sign Out"
          onPress={() => router.push("auth/SignIn")}
          style={styles.signOutButton}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
  cardContainer: {
    width: "100%",
  },
  card: {
    backgroundColor: "#1976D2",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: "center",
  },
  cardText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },
  signOutButton: {
    marginTop: 20,
    backgroundColor: "#D32F2F",
  },
})

export default HomeScreen
