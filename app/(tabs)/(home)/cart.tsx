import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view"; 
import Icon from "react-native-vector-icons/Feather"; 

import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router"; 

interface Item {
  id: string;
  imageUrl: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

const items = [
  {
    id: "1",
    imageUrl:
      "https://baristaschool.vn/wp-content/uploads/2021/05/cappuccinolatteart.jpg",
    name: "Cappuccino",
    description: "Rich espresso with steamed milk and foam.",
    price: 3.5,
  },
  {
    id: "2",
    imageUrl:
      "https://file.hstatic.net/200000079049/article/ban_sao_cafe-latte-4_af4c8c67f30f471e93e13acd6b5bb67c.png",
    name: "Latte",
    description: "Espresso with steamed milk and a hint of foam.",
    price: 4.0,
  },
  {
    id: "3",
    imageUrl:
      "https://dayphache.edu.vn/wp-content/uploads/2016/05/ca-phe-mocha-nong.jpg",
    name: "Mocha",
    description: "Espresso, steamed milk, and chocolate syrup.",
    price: 4.5,
  },
  {
    id: "4",
    imageUrl:
      "https://thecoffeeholic.vn/storage/photos/2/Phinholic/esp/ca-phe-Americano-1.jpg",
    name: "Americano",
    description: "Espresso with hot water.",
    price: 2.5,
  },
  {
    id: "5",
    imageUrl:
      "https://caphecaonguyen.vn/uploads/details/2021/08/images/cach-pha-ca-phe-caramel-macchiato-chuan-italia1.jpg",
    name: "Macchiato",
    description: "Espresso with a dollop of steamed milk.",
    price: 3.8,
  },
];

const Cart = () => {
  const navigation = useNavigation();
  const router = useRouter();
  // Khởi tạo cartItems với một số item mẫu từ danh sách items
  const [cartItems, setCartItems] = useState<Item[]>([
    {
      id: "1",
      imageUrl:
        "https://baristaschool.vn/wp-content/uploads/2021/05/cappuccinolatteart.jpg",
      name: "Cappuccino",
      description: "Rich espresso with steamed milk and foam.",
      price: 3.5,
      quantity: 1,
    },
    {
      id: "2",
      imageUrl:
        "https://file.hstatic.net/200000079049/article/ban_sao_cafe-latte-4_af4c8c67f30f471e93e13acd6b5bb67c.png",
      name: "Latte",
      description: "Espresso with steamed milk and a hint of foam.",
      price: 4.0,
      quantity: 1,
    },
    {
      id: "3",
      imageUrl:
        "https://thecoffeeholic.vn/storage/photos/2/Phinholic/esp/ca-phe-Americano-1.jpg",
      name: "Americano",
      description: "Espresso with steamed milk and a hint of foam.",
      price: 2.5,
      quantity: 1,
    },
  ]);
  const [isCheckout, setIsCheckout] = useState(false);

  const addItemToCart = (item: Item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeItemFromCart = (itemId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };


  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Icon name="arrow-left" style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>My Cart</Text>
      </View>
      {/* Danh sách item giỏ hàng */}
      <SwipeListView
        data={cartItems}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <Text style={styles.itemText}>
                x{item.quantity} - ${item.price * item.quantity}
              </Text>
            </View>
          </View>
        )}
        renderHiddenItem={({ item }) => (
          <View style={styles.hiddenItem}>
            <TouchableOpacity onPress={() => removeItemFromCart(item.id)}>
              <Icon name="trash" size={30} color="white" />
            </TouchableOpacity>
          </View>
        )}
        leftOpenValue={0}
        rightOpenValue={-75}
        keyExtractor={(item) => item.id}
      />
      {/* Hiển thị tổng tiền */}
      <View style={styles.totalContainer}>
        <Text style={styles.total}>Total:</Text>
        <Text style={styles.price}>${getTotalPrice()}</Text>
      </View>
      {/* Nút Checkout */}
      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() => router.push("/orderSuccess")}
      >
        <Text style={styles.checkoutText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#EAEAEA",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
  },
  backButton: {
    marginBottom: 20,
    width: 50,
    // backgroundColor: 'red',
  },
  icon: {
    fontSize: 28,
  },
  title: {
    fontSize: 24,
    fontWeight: 500,
    marginBottom: 20,
  },
  itemContainer: {
    height: 100,
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 4,
    borderRadius: 8,
    flexDirection: "row",
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemInfo: {
    marginLeft: 10,
    justifyContent: "center",
  },
  itemText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
  },
  itemDescription: {
    fontSize: 12,
    color: "#777",
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginTop: 10,
  },
  hiddenItem: {
    position: "absolute",
    top: 10,
    right: 0,
    width: 75,
    height: "80%",
    backgroundColor: "#E08348",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    zIndex: 1,
    paddingRight: 5,
  },
  totalContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  total: {
    width: 100,
    fontSize: 20,
    color: "#734629",
    fontWeight: "bold",
    marginTop: 20,
  },
  price: {
    // width: 100,
    justifyContent: "flex-end",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
  },
  checkoutButton: {
    backgroundColor: "#54331E",
    padding: 15,
    marginTop: 30,
    alignItems: "center",
    borderRadius: 8,
  },
  checkoutText: {
    color: "#fff",
    fontSize: 18,
  },
  successText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#28a745",
    textAlign: "center",
    marginTop: 50,
  },
});

export default Cart;
