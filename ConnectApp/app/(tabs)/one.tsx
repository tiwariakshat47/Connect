import { Pressable, StyleSheet, Text, View } from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Link, useRouter } from "expo-router";

export default function TabOneScreen() {
  const router = useRouter();

  const handlePress = () => {
    router.replace('.././');
  };

  return (
    <View>
        <Pressable onPress={handlePress}>
          <Text>Go to Login Screen</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
