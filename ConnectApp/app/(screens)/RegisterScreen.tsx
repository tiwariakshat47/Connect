import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Link, useRouter } from "expo-router";
import axios from "axios";

export default function RegisterScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  const handlePressHaveAcc = () => {
    router.replace(".././");
  };
  const handlePressReg = () => {
    console.log("Press Registered");
    const user = {
      name: name,
      email: email,
      password: password,
      image: image,
    };

    //Send a POST request to backend API to register the user
    axios
      .post("http://localhost:8081/register", user)
      .then((response) => {
        console.log(response);
        Alert.alert(
          "Registration successful",
          "You have been registered successfully"
        );
        setName("");
        setEmail("");
        setPassword("");
        setImage("");
      })
      .catch((error) => {
        Alert.alert(
          "Registration failure",
          "An Error occured while registering"
        );
        console.log("registration failed", error);
      });
  };

  return (
    <View>
      <KeyboardAvoidingView>
        <View style={styles.main}>
          <Text style={styles.title}>Sign In</Text>

          <Text style={styles.title2}>Sign In to Your Account</Text>
          <View style={{ marginTop: 50 }}>
            <Text style={{ fontSize: 18, fontWeight: 600, color: "gray" }}>
              Name
            </Text>
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              placeholderTextColor="black"
              placeholder="enter your Name"
              style={{
                fontSize: email ? 18 : 10,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View>
          <View>
            <Text style={{ fontSize: 18, fontWeight: 600, color: "gray" }}>
              Email
            </Text>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholderTextColor="black"
              placeholder="enter your email"
              style={{
                fontSize: email ? 18 : 10,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View>
          <View>
            <Text style={{ fontSize: 18, fontWeight: 600, color: "gray" }}>
              Image
            </Text>
            <TextInput
              value={image}
              onChangeText={(text) => setImage(text)}
              placeholderTextColor="black"
              placeholder="enter your Image"
              style={{
                fontSize: email ? 18 : 10,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 600, color: "gray" }}>
              Password
            </Text>
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholderTextColor="black"
              placeholder="enter your password"
              style={{
                fontSize: password ? 18 : 10,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View>

          <Pressable
            onPress={handlePressReg}
            style={{
              width: 200,
              backgroundColor: "#4A55A2",
              padding: 50,
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: 6,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Register
            </Text>
          </Pressable>

          <Pressable onPress={handlePressHaveAcc} style={{ marginTop: 15 }}>
            <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
              Already have an account? Sign in
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    padding: 10,
  },
  main: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#4A55A2",
    fontSize: 17,
    fontWeight: "600",
  },
  title2: {
    fontSize: 17,
    fontWeight: "600",
    marginTop: 15,
  },
});
