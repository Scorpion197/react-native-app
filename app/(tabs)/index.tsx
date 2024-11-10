import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { styles } from "../../styles/IndexStyle";
const avatar = require("../../assets/images/Avatar.png");
const legImage = require("../../assets/images/leg_image.png");
const mapImage = require("../../assets/images/map_image.png");
const charts = require("../../assets/images/charts.jpg");

const ActivityScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.fullScreen}
    >
      <View style={styles.header}>
        <Image style={styles.profileImage} source={avatar} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.userName}>Jonas Darbellay</Text>
          <Text style={styles.activityDetails}>
            10 juin 2024 à 16:50 - Annecy, Haute-Savoie Trail - Seul en côte
            pour préparer un Trail de 90km 5500m D+ le 11.10.2024
          </Text>
        </View>
      </View>

      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>
          Difficile mais super content de cette séance !
        </Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statTitle}>Distance</Text>
          <Text style={styles.statValue}>42 km</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statTitle}>Dénivelé</Text>
          <Text style={styles.statValue}>2500m</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statTitle}>Durée</Text>
          <Text style={styles.statValue}>5h30</Text>
        </View>
      </View>

      <View style={styles.imagesContainer}>
        <View style={styles.flexImages}>
          <Image style={styles.columnImages} source={mapImage} />
          <Image style={styles.columnImages} source={charts} />
        </View>
        <Image style={styles.image} source={legImage} />
      </View>

      <View style={styles.graphContainer}>
        <View style={styles.graphBox}>
          <Text style={styles.graphText}>150 bpm</Text>
        </View>
        <View style={styles.graphBox}>
          <Text style={styles.graphText}>2500 m</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.reactionText}>40 ont envoyé des Peaks</Text>
        <Text style={styles.commentsText}>8 commentaires</Text>
      </View>
    </ScrollView>
  );
};

export default ActivityScreen;
