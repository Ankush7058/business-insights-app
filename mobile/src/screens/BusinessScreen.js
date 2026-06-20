import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import api from "../services/api";

export default function BusinessScreen() {
  const [business, setBusiness] = useState(null);

  useEffect(() => {
    loadBusiness();
  }, []);

  const loadBusiness = async () => {
    try {
      const res = await api.get("/business");
      setBusiness(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!business) {
    return (
      <View style={styles.center}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.heading}>Business Profile</Text>

      <LinearGradient colors={["#2563eb", "#60a5fa"]} style={styles.banner}>
        <Text style={styles.bannerIcon}>💇‍♀️</Text>
        <Text style={styles.bannerName}>{business.name}</Text>
        <Text style={styles.bannerCategory}>{business.category}</Text>
      </LinearGradient>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{business.rating}</Text>
          <Text style={styles.statLabel}>Rating</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statValue}>{business.total_reviews}</Text>
          <Text style={styles.statLabel}>Reviews</Text>
        </View>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.sectionTitle}>Business Details</Text>

        <View style={styles.infoRow}>
          <Text style={styles.infoIcon}>📍</Text>
          <View>
            <Text style={styles.infoLabel}>Address</Text>
            <Text style={styles.infoValue}>{business.address}</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoIcon}>📞</Text>
          <View>
            <Text style={styles.infoLabel}>Phone Number</Text>
            <Text style={styles.infoValue}>{business.phone}</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoIcon}>🏷️</Text>
          <View>
            <Text style={styles.infoLabel}>Category</Text>
            <Text style={styles.infoValue}>{business.category}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f7fb",
  },
  content: {
    padding: 20,
    paddingBottom: 80,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 30,
    fontWeight: "900",
    marginBottom: 18,
    color: "#0f172a",
  },
  banner: {
    borderRadius: 22,
    padding: 24,
    marginBottom: 16,
    elevation: 5,
  },
  bannerIcon: {
    fontSize: 38,
    marginBottom: 8,
  },
  bannerName: {
    fontSize: 32,
    fontWeight: "900",
    color: "#ffffff",
  },
  bannerCategory: {
    fontSize: 16,
    color: "#dbeafe",
    marginTop: 4,
    fontWeight: "700",
  },
  statsRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 16,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 18,
    borderRadius: 18,
    elevation: 3,
  },
  statValue: {
    fontSize: 30,
    fontWeight: "900",
    color: "#0f172a",
  },
  statLabel: {
    fontSize: 14,
    color: "#64748b",
    marginTop: 4,
    fontWeight: "700",
  },
  infoCard: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 20,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: "900",
    color: "#0f172a",
    marginBottom: 14,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
  },
  infoIcon: {
    fontSize: 26,
    marginRight: 14,
  },
  infoLabel: {
    fontSize: 13,
    color: "#64748b",
    fontWeight: "700",
  },
  infoValue: {
    fontSize: 17,
    color: "#0f172a",
    fontWeight: "800",
    marginTop: 3,
  },
});