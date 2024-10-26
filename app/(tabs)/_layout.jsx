import { View, Text } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import { Image } from "react-native";
const TabIcon = () => {
  return (
    <View>
      <Image />
    </View>
  );
};
const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="home" />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ colored, focused }) => <TabIcon />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
