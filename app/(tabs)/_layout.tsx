import React from "react";
import { Tabs } from "expo-router";
import { Image } from "react-native";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/images/gallery.png")
                  : require("@/assets/images/gallery.png")
              }
              style={{ tintColor: "red", width: 28, height: 28 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/images/chat.png")
                  : require("@/assets/images/chat.png")
              }
              style={{ tintColor: "red", width: 28, height: 28 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="charts"
        options={{
          title: "Charts",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/images/upload.png")
                  : require("@/assets/images/upload.png")
              }
              style={{ tintColor: "red", width: 28, height: 28 }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
