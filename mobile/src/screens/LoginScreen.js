import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import api from "../services/api";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("123456");

  const handleLogin = async () => {
    try {
      const res = await api.post("/login", { email, password });

      if (res.data.success) {
        navigation.replace("Dashboard");
      } else {
        Alert.alert("Error", "Invalid credentials");
      }
    } catch (error) {
      Alert.alert("Login Failed", "Please check backend server");
    }
  };

  return (
    <LinearGradient colors={["#1d4ed8", "#60a5fa"]} style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.inner}
      >
        <View style={styles.logoBox}>
          <Text style={styles.logoText}>BI</Text>
        </View>

        <Text style={styles.title}>Business Insights</Text>
        <Text style={styles.subtitle}>Track profile views, reviews and customer actions</Text>

        <View style={styles.formCard}>
          <Text style={styles.formTitle}>Login</Text>

          <TextInput
            style={styles.input}
            placeholder="Email address"
            placeholderTextColor="#94a3b8"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#94a3b8"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  inner: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  logoBox: {
    width: 74,
    height: 74,
    borderRadius: 22,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 18,
    elevation: 5,
  },
  logoText: {
    fontSize: 30,
    fontWeight: "900",
    color: "#2563eb",
  },
  title: {
    fontSize: 34,
    fontWeight: "900",
    color: "#ffffff",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: "#e0f2fe",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 28,
    lineHeight: 22,
  },
  formCard: {
    backgroundColor: "#ffffff",
    borderRadius: 22,
    padding: 22,
    elevation: 6,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 18,
    color: "#0f172a",
  },
  input: {
    backgroundColor: "#f8fafc",
    padding: 16,
    borderRadius: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#2563eb",
    padding: 16,
    borderRadius: 14,
    marginTop: 6,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "800",
  },
});