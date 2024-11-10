import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";

const galleryImage = require("../../assets/images/gallery.png");
const chatImage = require("../../assets/images/chat.png");
const uploadImage = require("../../assets/images/upload.png");

export default function Navigation() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconButton}>
        <Image source={galleryImage} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <Image source={chatImage} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <Image source={uploadImage} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  iconButton: {
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
