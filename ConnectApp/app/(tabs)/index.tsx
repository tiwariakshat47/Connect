import { Pressable, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";

export default function TabOneScreen() {
  const deleteClass = () => {
    //pass
  };
  
  return (
    <View style={styles.container}>
      <Pressable onPress={deleteClass}>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Delete Class
        </Text>
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
