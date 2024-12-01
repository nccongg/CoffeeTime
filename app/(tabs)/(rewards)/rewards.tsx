import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router"; // Khai báo useRouter từ expo-router
import { Text } from "@/components/Themed";
import LoyaltyCard from "@/components/based/LoyaltyCard";
const RewardsScreen = () => {
  const router = useRouter();

  const historyData = [
    {
      id: "1",
      drinkName: "Caramel Macchiato",
      dateTime: "2024-11-28 14:30",
      points: 50,
    },
    {
      id: "2",
      drinkName: "Iced Latte",
      dateTime: "2024-11-26 10:15",
      points: 40,
    },
    {
      id: "3",
      drinkName: "Mocha Frappuccino",
      dateTime: "2024-11-24 16:00",
      points: 60,
    },
    {
      id: "4",
      drinkName: "Espresso",
      dateTime: "2024-11-22 08:45",
      points: 30,
    },
    {
      id: "5",
      drinkName: "Iced Latte",
      dateTime: "2024-11-26 10:15",
      points: 40,
    },
    {
      id: "6",
      drinkName: "Mocha Frappuccino",
      dateTime: "2024-11-24 16:00",
      points: 60,
    },
    {
      id: "7",
      drinkName: "Espresso",
      dateTime: "2024-11-22 08:45",
      points: 30,
    },
  ];

  const renderHistoryItem = ({ item }: { item: any }) => (
    <View style={styles.historyItem}>
      <View style={styles.info}>
        <Text style={styles.drinkName}>{item.drinkName}</Text>
        <Text style={styles.dateTime}>{item.dateTime}</Text>
      </View>
      <Text style={styles.hPoints}>+{item.points} pts</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Rewards</Text>
      </View>
      <View style={styles.content}>
        <LoyaltyCard drinksPurchased={8} />
        <View style={styles.myPoint}>
          <View style={styles.pointWrapper}>
            <Text style={styles.pointTitle}>My Points</Text>
            <Text style={styles.points}>2750</Text>
          </View>
          <TouchableOpacity style={styles.redeemWrapper}>
            <Text style={styles.redeemText}>Redeem drinks</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.historyContainer}>
          <Text style={styles.title}>Reward History</Text>
          <FlatList
            data={historyData}
            keyExtractor={(item) => item.id}
            renderItem={renderHistoryItem}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EAEAEA",
    padding: 20,
  },
  header: {},
  headerText: {
    fontSize: 24,
    fontWeight: 500,
    marginBottom: 20,
  },
  content: {
    flex: 1,
    width: "100%",
  },
  myPoint: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#54331E",
    height: 130,
    borderRadius: 10,
    marginBottom: 20,
  },
  pointWrapper: {
    padding: 20,
  },
  pointTitle: {
    color: "#fff",
    paddingLeft: 10,
    fontWeight: "bold",
  },
  points: {
    color: "#fff",
    padding: 10,
    fontSize: 27,
    fontWeight: "bold",
  },
  redeemWrapper: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginRight: 20,
    backgroundColor: "#6A4935",
    borderRadius: 10,
  },
  redeemText: {
    color: "#fff",
  },
  historyContainer: {
    flex: 1,
    backgroundColor: "transparent",
    padding: 16,
    paddingBottom: -20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    // textAlign: "center",
    color: "#333",
  },
  listContainer: {
    paddingBottom: 16,
  },
  historyItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  info: {
    flex: 1,
  },
  drinkName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  dateTime: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  hPoints: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00C853", // Màu xanh lá để hiển thị điểm
  },
});

export default RewardsScreen;
