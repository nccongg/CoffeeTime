import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import {Colors} from "@/constants/Colors";
import { useColorScheme } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// https://akveo.github.io/react-native-ui-kitten/docs/design-system/use-theme-variables#declare-custom-component
import { useTheme } from "@ui-kitten/components";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme["color-primary-hover"],
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        // headerShown: useClientOnlyValue(false, true),
        tabBarStyle: { borderWidth: 0 },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          headerShown: false,
          title: "Shop",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="shop" color={color} size={24} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="(rewards)"
        options={{
          headerShown: false,
          title: "Rewards",
          tabBarIcon: ({ color }) => (
            <Feather name="gift" color={color} size={24} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="(my_order)"
        options={{
          headerShown: false,
          title: "Order",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="clipboard-list-outline"
              color={color}
              size={24}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
}
