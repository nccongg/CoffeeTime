import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import Icon from "react-native-vector-icons/FontAwesome";

interface Order {
  id: string;
  date: string;
  name: string;
  price: string;
  address: string;
}

const MyOrder = () => {
  const [activeTab, setActiveTab] = useState<"On going" | "History">(
    "On going"
  );
  const [ongoingOrders, setOngoingOrders] = useState<Order[]>([
    {
      id: "1",
      date: "24 June | 12:30 PM",
      name: "Americano",
      price: "$3.00",
      address: "3 Addersion Court Chino Hills, HO56824, United State",
    },
    {
      id: "2",
      date: "24 June | 12:30 PM",
      name: "Cafe Latte",
      price: "$3.00",
      address: "3 Addersion Court Chino Hills, HO56824, United State",
    },
    {
      id: "3",
      date: "24 June | 12:30 PM",
      name: "Flat White",
      price: "$3.00",
      address: "3 Addersion Court Chino Hills, HO56824, United State",
    },
  ]);

  const [historyOrders, setHistoryOrders] = useState<Order[]>([
    {
      id: "4",
      date: "22 June | 11:00 AM",
      name: "Espresso",
      price: "$2.50",
      address: "5 Washington Street, NY56824, United State",
    },
    {
      id: "5",
      date: "21 June | 1:30 PM",
      name: "Mocha",
      price: "$4.00",
      address: "45 Lincoln Street, HO56824, United State",
    },
  ]);

  const moveOrderToHistory = (orderId: string) => {
    const order = ongoingOrders.find((item) => item.id === orderId);
    if (order) {
      setOngoingOrders((prev) => prev.filter((item) => item.id !== orderId));
      setHistoryOrders((prev) => [order, ...prev]);
    }
  };

  const renderOrderItem = ({ item }: { item: Order }) => (
    <View style={styles.orderCard}>
      <Text style={styles.orderDate}>{item.date}</Text>
      <View style={styles.row}>
        <Icon name="coffee" size={20} color="#6b6b6b" style={styles.icon} />
        <Text style={styles.orderName}>{item.name}</Text>
      </View>
      <View style={styles.row}>
        <Icon name="map-marker" size={20} color="#6b6b6b" style={styles.icon} />
        <Text style={styles.orderAddress}>{item.address}</Text>
      </View>
      <Text style={styles.orderPrice}>{item.price}</Text>
    </View>
  );

  const renderHiddenItem = ({ item }: { item: Order }) => (
    <View style={styles.hiddenItem}>
      <TouchableOpacity
        onPress={() => moveOrderToHistory(item.id)}
        style={styles.moveToHistoryButton}
      >
        <Text style={styles.hiddenText}>Done</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Order</Text>

      {/* Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "On going" && styles.activeTab]}
          onPress={() => setActiveTab("On going")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "On going" && styles.activeTabText,
            ]}
          >
            On going
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === "History" && styles.activeTab]}
          onPress={() => setActiveTab("History")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "History" && styles.activeTabText,
            ]}
          >
            History
          </Text>
        </TouchableOpacity>
      </View>

      {/* Order List */}
      {activeTab === "On going" ? (
        <SwipeListView
          data={ongoingOrders}
          renderItem={renderOrderItem}
          renderHiddenItem={renderHiddenItem}
          leftOpenValue={0}
          rightOpenValue={-80}
          keyExtractor={(item) => item.id}
          disableRightSwipe
          style={styles.list}
        />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={historyOrders}
          renderItem={renderOrderItem}
          keyExtractor={(item) => item.id}
          style={styles.list}
        />
      )}
    </View>
  );
};

export default MyOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAEAEA",
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
    color: "#1c1c1c",
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTab: {
    borderBottomColor: "#1c1c1c",
  },
  tabText: {
    fontSize: 16,
    color: "#b0b0b0",
  },
  activeTabText: {
    color: "#1c1c1c",
    fontWeight: "bold",
  },
  list: {
    marginTop: 8,
  },
  orderCard: {
    padding: 16,
    backgroundColor: "#f9f9f9",
    marginBottom: 12,
    borderRadius: 8,
    elevation: 1,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
  },
  orderDate: {
    fontSize: 12,
    color: "#9a9a9a",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  icon: {
    marginRight: 8,
  },
  orderName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1c1c1c",
  },
  orderAddress: {
    fontSize: 14,
    color: "#6b6b6b",
  },
  orderPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1c1c1c",
    textAlign: "right",
  },
  hiddenItem: {
    position: "absolute",
    top: 10,
    right: 0,
    width: 80,
    height: "80%",
    backgroundColor: "#E08348",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    zIndex: 1,
    paddingRight: 5,
  },
  moveToHistoryButton: {
    backgroundColor: "transparent",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  hiddenText: {
    color: "white",
    fontWeight: "bold",
  },
});
