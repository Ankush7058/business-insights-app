import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BarChart } from "react-native-chart-kit";
import api from "../services/api";

const screenWidth = Dimensions.get("window").width;

export default function DashboardScreen({ navigation }) {
  const [insights, setInsights] = useState(null);
  const [business, setBusiness] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const insightsRes = await api.get("/insights");
      const businessRes = await api.get("/business");

      setInsights(insightsRes.data.data);
      setBusiness(businessRes.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!insights || !business) {
    return (
      <View style={styles.center}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const metrics = [
    { title: "Profile Views", value: insights.profile_views, icon: "👁️" },
    { title: "Search Views", value: insights.search_views, icon: "🔍" },
    { title: "Website Clicks", value: insights.website_clicks, icon: "🌐" },
    { title: "Phone Calls", value: insights.phone_calls, icon: "📞" },
    { title: "Directions", value: insights.direction_requests, icon: "🧭" },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.heading}>Dashboard</Text>

      <LinearGradient colors={["#2563eb", "#60a5fa"]} style={styles.heroCard}>
        <Text style={styles.heroSmall}>Business Profile</Text>
        <Text style={styles.heroTitle}>{business.name}</Text>
        <Text style={styles.heroCategory}>{business.category}</Text>

        <View style={styles.heroStats}>
          <View style={styles.heroStatBox}>
            <Text style={styles.heroStatValue}>{business.rating}</Text>
            <Text style={styles.heroStatLabel}>Rating</Text>
          </View>
          <View style={styles.heroStatBox}>
            <Text style={styles.heroStatValue}>{business.total_reviews}</Text>
            <Text style={styles.heroStatLabel}>Reviews</Text>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.chartCard}>
        <Text style={styles.sectionTitle}>Insights Overview</Text>

        <BarChart
          data={{
            labels: ["Profile", "Search", "Web", "Calls", "Dir"],
            datasets: [
              {
                data: [
                  insights.profile_views,
                  insights.search_views,
                  insights.website_clicks,
                  insights.phone_calls,
                  insights.direction_requests,
                ],
              },
            ],
          }}
          width={screenWidth - 70}
          height={230}
          yAxisLabel=""
          yAxisSuffix=""
          fromZero
          showValuesOnTopOfBars
          chartConfig={{
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(37, 99, 235, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(15, 23, 42, ${opacity})`,
            propsForBackgroundLines: {
              stroke: "#e2e8f0",
            },
          }}
          style={styles.chart}
        />
      </View>

      <Text style={styles.sectionTitle}>Key Metrics</Text>

      <View style={styles.grid}>
        {metrics.map((item, index) => (
          <View
            key={index}
            style={[
              styles.metricCard,
              item.title === "Directions" && styles.fullMetricCard,
            ]}
          >
            <Text style={styles.metricIcon}>{item.icon}</Text>
            <Text style={styles.metricValue}>{item.value}</Text>
            <Text style={styles.metricTitle}>{item.title}</Text>
          </View>
        ))}
      </View>

      <View style={styles.actionRow}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate("Business")}
        >
          <Text style={styles.actionText}>Business</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate("Reviews")}
        >
          <Text style={styles.actionText}>Reviews</Text>
        </TouchableOpacity>
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
    paddingBottom: 130,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 32,
    fontWeight: "900",
    marginBottom: 18,
    color: "#0f172a",
  },
  heroCard: {
    borderRadius: 22,
    padding: 22,
    marginBottom: 18,
    elevation: 5,
  },
  heroSmall: {
    color: "#dbeafe",
    fontSize: 14,
    fontWeight: "700",
  },
  heroTitle: {
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "900",
    marginTop: 6,
  },
  heroCategory: {
    color: "#eff6ff",
    fontSize: 16,
    marginTop: 4,
  },
  heroStats: {
    flexDirection: "row",
    gap: 12,
    marginTop: 18,
  },
  heroStatBox: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.18)",
    borderRadius: 16,
    padding: 14,
  },
  heroStatValue: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "900",
  },
  heroStatLabel: {
    color: "#dbeafe",
    marginTop: 3,
    fontSize: 13,
    fontWeight: "700",
  },
  chartCard: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 18,
    marginBottom: 18,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: "900",
    color: "#0f172a",
    marginBottom: 12,
  },
  chart: {
    borderRadius: 14,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  metricCard: {
    width: "48%",
    backgroundColor: "#ffffff",
    padding: 18,
    borderRadius: 18,
    marginBottom: 14,
    elevation: 3,
  },
  fullMetricCard: {
    width: "100%",
  },
  metricIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  metricValue: {
    fontSize: 30,
    fontWeight: "900",
    color: "#0f172a",
  },
  metricTitle: {
    fontSize: 14,
    color: "#64748b",
    marginTop: 4,
    fontWeight: "700",
  },
  actionRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 4,
  },
  actionButton: {
    flex: 1,
    backgroundColor: "#2563eb",
    padding: 16,
    borderRadius: 16,
  },
  actionText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "900",
  },
});