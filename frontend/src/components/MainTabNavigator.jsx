import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, Text, StyleSheet, View } from "react-native";
import ChatsScreen from "../screens/ChatsScreen";
import GiftsScreen from "../screens/GiftsScreen";
import CallsScreen from "../screens/CallsScreen";
import CalendarScreen from "../screens/CalendarScreen";

const Tab = createBottomTabNavigator();

const iconMap = {
  Gifts: require("../../assets/icons/gift-icon.png"),
  Chats: require("../../assets/icons/chat-icon.png"),
  Calendar: require("../../assets/icons/calendar-icon.png"),
};

const backgroundColorMap = {
  Gifts: "#F6D6EE",
  Chats: "#C3D9F6",
  Calls: "#D1EBEF",
  Calendar: "#FBEFD3",
};

const colorMap = {
  Gifts: "#C9379D",
  Chats: "#093DAC",
  Calls: "#157483",
  Calendar: "#E6A919",
};

const iconSizeMap = {
  Gifts: { width: 30, height: 25 },
  Chats: { width: 25, height: 23 },
  Calls: { width: 24, height: 24 },
  Calendar: { width: 28, height: 24 },
};

function MainTabNavigator({ navigation }) {
  return (
    <Tab.Navigator
    initialRouteName="Chats" // Set "Chats" as the default screen
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: [
          styles.tabBar,
          {
            position: "absolute", // Make it absolute to overlay the content
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.75)", // More transparent white
            backdropFilter: "blur(2px)", // Glassy effect
            elevation: 10,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.2,
            shadowRadius: 6.27,
          },
        ],
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          const icon = iconMap[route.name];
          const backgroundColor = backgroundColorMap[route.name];
          const color = colorMap[route.name];
          const { width, height } = iconSizeMap[route.name];

          return (
            <View
              style={[
                styles.iconContainer,
                focused && {
                  ...styles.activeBubble,
                  backgroundColor,
                },
              ]}
            >
              <Image
                source={icon}
                style={[
                  styles.icon,
                  { width, height },
                  focused && { tintColor: color },
                ]}
              />
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Gifts" component={GiftsScreen} />
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 60, // Height of the navbar
    paddingBottom: 10,
    paddingTop: 10,
    justifyContent: "center", // Center the icons
    paddingHorizontal: 20, // Adjust horizontal padding to center icons
    borderTopWidth: 0, // Remove top border
    borderTopLeftRadius: 20, // Rounded corners
    borderTopRightRadius: 20, // Rounded corners
    overflow: "hidden", // Ensure borders don’t overflow
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  activeBubble: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 7,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 6.27,
  },
});

export default MainTabNavigator;
