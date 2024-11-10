import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 70,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: 12,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  activityDetails: {
    color: "#555",
    fontSize: 12,
  },
  iconContainer: {
    padding: 8,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  messageContainer: {
    paddingTop: 20,
    paddingLeft: 30,
    borderRadius: 20,
    marginBottom: 16,
    height: 60,
    borderWidth: 1,
    borderColor: "#ecf0f1",
  },
  messageText: {
    color: "#000",
    fontSize: 14,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    marginTop: 20,
    backgroundColor: "#ecf0f1",
    height: 80,
    borderRadius: 20,
  },
  statBox: {
    alignItems: "center",
    flex: 1,
  },
  statTitle: {
    color: "#555",
    fontSize: 12,
  },
  statValue: {
    fontWeight: "bold",
    fontSize: 16,
  },
  mapAndChartContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  mapImage: {
    width: "48%",
    height: 150,
    borderRadius: 8,
  },
  chartContainer: {
    flex: 1,
    marginLeft: 8,
    padding: 10,
    backgroundColor: "#f7f7f7",
    borderRadius: 8,
  },
  chartItem: {
    alignItems: "center",
    marginBottom: 8,
  },
  chartIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  chartValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ff0000",
  },
  chartLabel: {
    fontSize: 12,
    color: "#777",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderTopWidth: 1,
    borderColor: "#eee",
  },
  reactionText: {
    fontSize: 12,
    color: "#555",
  },
  commentsText: {
    fontSize: 12,
    color: "#555",
  },
  navBarContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 25,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
  },
});
