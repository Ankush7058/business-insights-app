import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import api from "../services/api";

export default function ReviewsScreen() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    try {
      const res = await api.get("/reviews");
      setReviews(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.heading}>Customer Reviews</Text>

      <View style={styles.summaryCard}>
        <Text style={styles.summaryTitle}>Recent Feedback</Text>
        <Text style={styles.summaryText}>
          Showing latest customer reviews from your business profile.
        </Text>
      </View>

      {reviews.map((review) => (
        <View style={styles.card} key={review._id}>
          <View style={styles.cardHeader}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{review.name.charAt(0)}</Text>
            </View>

            <View style={styles.userInfo}>
              <Text style={styles.name}>{review.name}</Text>
              <Text style={styles.date}>{review.date}</Text>
            </View>

            <View style={styles.ratingBadge}>
              <Text style={styles.ratingText}>{review.rating}.0 ★</Text>
            </View>
          </View>

          <Text style={styles.comment}>{review.comment}</Text>
        </View>
      ))}
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
  heading: {
    fontSize: 30,
    fontWeight: "900",
    marginBottom: 16,
    color: "#0f172a",
  },
  summaryCard: {
    backgroundColor: "#eff6ff",
    padding: 18,
    borderRadius: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#bfdbfe",
  },
  summaryTitle: {
    fontSize: 19,
    fontWeight: "900",
    color: "#1d4ed8",
  },
  summaryText: {
    color: "#475569",
    marginTop: 6,
    fontSize: 14,
    lineHeight: 20,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 18,
    borderRadius: 20,
    marginBottom: 15,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: "#dbeafe",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  avatarText: {
    color: "#2563eb",
    fontSize: 22,
    fontWeight: "900",
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 19,
    fontWeight: "900",
    color: "#0f172a",
  },
  date: {
    fontSize: 13,
    color: "#64748b",
    marginTop: 3,
  },
  ratingBadge: {
    backgroundColor: "#dcfce7",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  ratingText: {
    color: "#166534",
    fontWeight: "900",
    fontSize: 13,
  },
  comment: {
    fontSize: 16,
    color: "#334155",
    marginTop: 16,
    lineHeight: 23,
  },
});