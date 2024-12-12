// Chat.jsx
import React from "react"
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native"
import Button from "../../components/Button"
import { SafeAreaView } from "react-native-safe-area-context"

const Chat = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Chat</Text>
      <FlatList
        data={[]}
        renderItem={({ item }) => <Text>{item.message}</Text>}
        keyExtractor={(item) => item.id}
      />
      <TextInput style={styles.input} placeholder="Type a message" />
      <Button title="Send" onPress={() => console.log("Message sent")} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 10 },
})

export default Chat
