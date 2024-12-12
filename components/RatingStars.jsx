// RatingStars.jsx
import React from "react"
import { View, TouchableOpacity, Text, StyleSheet } from "react-native"

const RatingStars = ({ rating, onRate }) => {
  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5].map((star) => (
        <TouchableOpacity key={star} onPress={() => onRate(star)}>
          <Text style={star <= rating ? styles.filledStar : styles.emptyStar}>
            ★
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  filledStar: {
    color: "#FFC107",
    fontSize: 30,
    marginHorizontal: 5,
  },
  emptyStar: {
    color: "#E0E0E0",
    fontSize: 30,
    marginHorizontal: 5,
  },
})

export default RatingStars
