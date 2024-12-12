// Rating.jsx
import React from "react"
import { View, Text, StyleSheet } from "react-native"
import RatingStars from "../../components/RatingStars"

const Rating = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rate Constructor</Text>
      <RatingStars
        rating={3}
        onRate={(value) => console.log(`Rated: ${value}`)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
})

export default Rating
