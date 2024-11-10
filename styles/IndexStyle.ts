import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  flexImages: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    marginTop: 80,
  },
  columnImages: {
    height: 70,
    marginTop: 5,
    marginRight: 5,
    borderRadius: 10,
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
    color: "#bdc3c7",
    fontSize: 12,
  },
  iconContainer: {
    padding: 8,
  },
  messageContainer: {
    backgroundColor: "#000",
    padding: 12,
    borderRadius: 20,
    marginBottom: 16,
  },
  messageText: {
    color: "#fff",
    fontSize: 14,
    height: 40,
    paddingTop: 10,
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
  imagesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  image: {
    width: "48%",
    height: 150,
    borderRadius: 8,
  },
  graphContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  graphBox: {
    alignItems: "center",
    flex: 1,
  },
  graphText: {
    fontSize: 12,
    color: "#555",
    marginBottom: 8,
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
});
