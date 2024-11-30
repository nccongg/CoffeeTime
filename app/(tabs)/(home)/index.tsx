import React from "react";
import { View, StyleSheet, Image, FlatList, ScrollView } from "react-native";
import { Text } from "@/components/Themed";
import Icon from "react-native-vector-icons/FontAwesome";
import LoyaltyCard from "@/components/based/LoyaltyCard";
import ItemCard from "@/components/based/ItemCard";
import { useRouter } from "expo-router"; // Khai báo useRouter từ expo-router
import { Button } from "react-native-paper";

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

function HomeScreen() {
  const router = useRouter(); // Khởi tạo router từ expo-router

  // Hàm điều hướng tới màn hình chi tiết
  const navigateToDetail = (item: any) => {
    // console.log(item);
    router.push({
      pathname: "/detail",
      params: { item: JSON.stringify(item) }, // Chuyển đổi object thành JSON string
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <View style={styles.userContainer}>
            <Image
              source={{
                uri: "https://lh3.googleusercontent.com/a/ACg8ocKkrrJH43cgRwPtPbKr94pl51NrEkH_CYH1ut5Jo-z9qF97eIsK=s288-c-no",
              }}
              style={styles.avatar}
            />
            <Text style={styles.userTitle}>Good morning, Cong</Text>
          </View>
          <Icon
            name="shopping-cart"
            style={styles.icon}
            onPress={() => router.push("/detail")}
          />{" "}
          {/* Sử dụng router.push */}
        </View>

        <LoyaltyCard drinksPurchased={5} />
      </View>

      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.contentContainer}>
          <View style={styles.fixedOfferContainer}>
            <Text style={styles.itemTitle}>Great offer 🔥🔥🔥</Text>
            <FlatList
              data={items}
              renderItem={({ item }) => (
                <ItemCard
                  imageUrl={item.imageUrl}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  onPress={() => navigateToDetail(item)} // Khi nhấn vào item, điều hướng tới màn hình chi tiết
                />
              )}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.flatListContent}
            />
          </View>

          <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>Menu</Text>
            <FlatList
              data={items}
              renderItem={({ item }) => (
                <ItemCard
                  imageUrl={item.imageUrl}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  width={330} // Cung cấp width
                  height={150} // Cung cấp height
                  onPress={() => navigateToDetail(item)} // Khi nhấn vào item, điều hướng tới màn hình chi tiết
                />
              )}
              keyExtractor={(item) => item.id.toString()} // Đảm bảo id là string
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.flatListContent}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#EAEAEA",
  },
  scrollContainer: {
    marginTop: 0,
  },
  headerContainer: {},
  header: {
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-between",
    paddingTop: 20,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  userTitle: {
    marginLeft: 10,
    fontWeight: "600",
    fontSize: 22,
    color: "#000",
  },
  icon: {
    fontSize: 28,
    color: "#353535",
    marginLeft: 20,
  },
  contentContainer: {
    marginTop: 0,
    flex: 1,
  },
  fixedOfferContainer: {
    marginBottom: 20,
  },
  itemContainer: {
    marginTop: 0,
  },
  itemTitle: {
    marginLeft: 10,
    fontWeight: "600",
    fontSize: 20,
    color: "#000",
  },
  flatListContent: {
    paddingHorizontal: 10,
  },
});

export default HomeScreen;


// import { Link } from "expo-router";
// import { Text } from "@/components/Themed";

// function HomeScreen() {
//     return (
//       <Link href="/detail">
//         <Text>hellloooo</Text>
//       </Link>
//     );
// }

// export default HomeScreen;