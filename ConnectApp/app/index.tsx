import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { Link, useRouter } from "expo-router";

const LoginScreen = () => {
  const router = useRouter();

  const handlePressLogin = () => {
    router.replace("one");
  };

  const handlePressNoAcc = () => {
    router.replace("RegisterScreen");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <View style={styles.main}>
          <Text style={styles.title}>Sign In</Text>

          <Text style={styles.title2}>Sign In to Your Account</Text>
        </View>

        <View style={{ marginTop: 50 }}>
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
          onPress={handlePressLogin}
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
            Login
          </Text>
        </Pressable>

        <Pressable onPress={handlePressNoAcc} style={{ marginTop: 15 }}>
          <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
            Don't have an account? Sign up
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;

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
