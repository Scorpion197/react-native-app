import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1A1A1A",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  subHeader: {
    fontSize: 14,
    color: "#888",
    marginBottom: 20,
  },
  circleContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  heartRateText: {
    position: "absolute",
    fontSize: 48,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  bpmText: {
    position: "absolute",
    top: 120,
    fontSize: 18,
    color: "#888",
  },
  waveformContainer: {
    marginTop: 20,
  },
});
