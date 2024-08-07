import { Pressable, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";

export default function TabOneScreen() {
  const [value, setValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const deleteClass = () => {
    //pass
  };

  //This is temporary placeholder data
  const data = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
    { label: "Item 6", value: "6" },
    { label: "Item 7", value: "7" },
    { label: "Item 8", value: "8" },
  ];

  return (
    <View style={styles.container}>
      <Pressable onPress={deleteClass}>
        <Text
          style={{
            backgroundColor: "red",
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Delete Class
        </Text>
      </Pressable>
      <Dropdown
        search
        data={data}
        labelField="label"
        valueField="value"
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        searchPlaceholder="Search Class by Name, Code, or Professor..."
      />
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
