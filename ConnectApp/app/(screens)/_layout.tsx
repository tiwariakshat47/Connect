import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Stack, Tabs } from "expo-router";
import { Pressable } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

export default function ScreenLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen name="RegisterScreen" options={{ headerShown: false }} />
    </Stack>
  );
}
