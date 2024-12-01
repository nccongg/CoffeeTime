import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router"; // Khai báo useRouter từ expo-router

const OrderSuccess = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/order_success.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Order Success</Text>
      <Text style={styles.description}>
        Your order has been placed successfully.
      </Text>
      <Text style={styles.description}>For more details, go to my orders.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/cart")}
      >
        <Text style={styles.buttonText}>Track My Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EAEAEA",
    padding: 20,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#000000", // Màu đen
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    color: "#A0A0A0", // Màu xám
    textAlign: "center",
    marginBottom: 5,
  },
  button: {
    width: "100%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    backgroundColor: "#52311D",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF", // Màu trắng cho chữ
    fontSize: 16,
    fontWeight: "500",
  },
});

export default OrderSuccess;
