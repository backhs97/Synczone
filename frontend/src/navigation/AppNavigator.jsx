import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ChatsScreen from "../screens/ChatsScreen";
import ChatDetailScreen from "../screens/ChatDetailScreen";
import GiftsScreen from "../screens/GiftsScreen";
import CallsScreen from "../screens/CallsScreen";
import CalendarScreen from "../screens/CalendarScreen";
import MainTabNavigator from "../components/MainTabNavigator";
import useStore from "../store/store";
import RecentCalls from "../screens/RecentCalls";
import SettingsScreen from "../screens/SettingsScreen";
import Header from "../components/Header";

import ContactScreen from "../screens/ContactScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ProfileSettings from "../screens/ProfileSettings";
import MembersChatScreen from "../screens/MembersChatScreen";
import GroupDetailsScreen from "../screens/GroupDetailsScreen";

const Stack = createStackNavigator();
const ModalStack = createStackNavigator();

export function AppNavigator() {
  const { session } = useStore(); // Get session from store

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {session ? (
        // Authenticated user navigation
        <>
          <Stack.Screen name="MainTabs" component={MainTabNavigator} />
          <Stack.Screen name="Chats" component={ChatsScreen} />
          <Stack.Screen name="Gifts" component={GiftsScreen} />
          <Stack.Screen name="Calls" component={CallsScreen} />
          <Stack.Screen name="ChatDetail" component={ChatDetailScreen} />
          <Stack.Screen name="Calendar" component={CalendarScreen} />
          <Stack.Screen name="RecentCall" component={RecentCalls} />
          <Stack.Screen name="Contact" component={ContactScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
          <Stack.Screen name="MembersChat" component={MembersChatScreen} />
          <Stack.Screen name="GroupDetails" component={GroupDetailsScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} options={{
            presentation: 'modal'
          }} />
          <Stack.Screen name="Header" component={Header} />
        </>
      ) : (
        // Non-authenticated user navigation
        <>
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}
