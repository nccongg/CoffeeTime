import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router"; // Khai báo useRouter từ expo-router
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather"; // Đảm bảo bạn đã cài thư viện react-native-vector-icons

const items = [
  {
    id: "1",
    name: "Espresso",
    image:
      "https://caphecaonguyen.vn/uploads/details/2021/08/images/cach-pha-ca-phe-caramel-macchiato-chuan-italia1.jpg",
    points: 50,
    validUntil: "2024-12-31",
  },
  {
    id: "2",
    name: "Latte",
    image:
      "https://thecoffeeholic.vn/storage/photos/2/Phinholic/esp/ca-phe-Americano-1.jpg",
    points: 75,
    validUntil: "2024-12-25",
  },
  {
    id: "3",
    name: "Cappuccino",
    image:
      "https://baristaschool.vn/wp-content/uploads/2021/05/cappuccinolatteart.jpg",
    points: 100,
    validUntil: "2024-12-15",
  },
];

interface ItemType {
  image: string; 
  name: string; 
  validUntil: string; 
  points: number; 
}

export default function Redeem() {
  const router = useRouter();
  const navigation = useNavigation();

  const renderItem = ({ item }: { item: ItemType }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.validUntil}>Valid until: {item.validUntil}</Text>
      </View>
      <TouchableOpacity
        style={styles.redeemButton}
        onPress={() =>
          router.push({
            pathname: "/rewards",
            params: { point: item.points },
          })
        }
      >
        <Text style={styles.redeemText}>{item.points} Points</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Icon name="arrow-left" style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>Redeem Rewards</Text>
      </View>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#EAEAEA",
  },
  header: {
    display: "flex",
    flexDirection: "row",
  },
  backButton: {
    marginBottom: 20,
    width: 50,
  },
  icon: {
    fontSize: 28,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: 500,
    marginBottom: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  validUntil: {
    fontSize: 14,
    color: "#666",
  },
  redeemButton: {
    backgroundColor: "#6A4935",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  redeemText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
});
