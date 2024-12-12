// ProjectManagement.jsx
import React from "react"
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native"
import { BarChart } from "react-native-chart-kit"
import { SafeAreaView } from "react-native-safe-area-context"

const ProjectManagement = () => {
  const screenWidth = Dimensions.get("window").width

  // Example data
  const data = {
    labels: ["Research", "Outline", "Write", "Review", "Submit"], // Task Names
    datasets: [
      {
        data: [5, 3, 7, 2, 1], // Task durations (in days or hours)
      },
    ],
  }

  const chartConfig = {
    backgroundGradientFrom: "#F5F5F5",
    backgroundGradientTo: "#F5F5F5",
    color: (opacity = 1) => `rgba(25, 118, 210, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    barPercentage: 0.5,
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Project Management</Text>
      <Text style={styles.subtitle}>Task Durations (in days)</Text>
      <BarChart
        data={data}
        width={screenWidth - 40}
        height={220}
        chartConfig={chartConfig}
        verticalLabelRotation={30}
        fromZero
        showBarTops={false}
        style={styles.chart}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF",
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
  },
  chart: {
    marginVertical: 10,
    borderRadius: 8,
  },
})

export default ProjectManagement
