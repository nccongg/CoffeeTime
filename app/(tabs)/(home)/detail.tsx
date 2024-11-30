import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import { Link } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";
import { useSearchParams } from "expo-router/build/hooks";
import { useNavigation } from "@react-navigation/native";
import { Text } from "@/components/Themed";

const coffeeOptions = {
  size: ["Small", "Medium", "Large"],
  milk: ["Whole", "Skim", "Oat", "Almond"],
  sweetness: ["None", "Low", "Medium", "High"],
  extras: ["Sugar", "Vanilla", "Caramel"],
};

export default function DetailScreen() {
  const navigation = useNavigation();
  const searchParams = useSearchParams();
  const itemString = searchParams.get("item"); // Lấy chuỗi JSON từ params
  const [item, setItem] = useState<any>(null); // Lưu đối tượng `item` đã parse

  useEffect(() => {
    if (itemString) {
      try {
        const parsedItem = JSON.parse(itemString); // Chuyển chuỗi JSON thành object
        setItem(parsedItem);
        console.log("Received item:", parsedItem); // Debug để kiểm tra
      } catch (error) {
        console.error("Error parsing item:", error);
      }
    }
  }, [itemString]);

  console.log(item); // Kiểm tra toàn bộ object item
  
  const [size, setSize] = useState("Medium");
  const [milk, setMilk] = useState("Whole");
  const [sweetness, setSweetness] = useState("Medium");
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  console.log(parseFloat(item?.price)); // Kiểm tra item.imageUrl, nếu undefined sẽ không báo lỗi

  // Giá khởi điểm

  useEffect(() => {
    if (item && item.price) {
      let price = parseFloat(item.price);
      console.log("Parsed price:", price); // Debug log

      if (isNaN(price)) {
        console.error("item.price không phải là một số hợp lệ");
        return;
      }

      if (size === "Large") price += 2;
      if (size === "Small") price -= 1;
      if (milk !== "Whole") price += 0.5;

      console.log("Calculated price:", price); // Debug log

      setTotalPrice(price * quantity);
    } 
  }, [item, size, milk, quantity]); 

  const handleAddToCart = () => {
    console.log("Added to cart:", {
      size,
      milk,
      sweetness,
      quantity,
      totalPrice,
    });
  };

  const handleQuantityChange = (action: "increase" | "decrease") => {
    setQuantity((prev) =>
      action === "increase" ? prev + 1 : Math.max(1, prev - 1)
    );
  };

  const renderOption = (
    option: string,
    selected: string,
    onSelect: (value: string) => void
  ) => (
    <TouchableOpacity
      style={[
        styles.option,
        selected === option ? styles.optionSelected : styles.optionDefault,
      ]}
      onPress={() => onSelect(option)}
    >
      <Text
        style={
          selected === option ? styles.optionTextSelected : styles.optionText
        }
      >
        {option}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Nút quay lại */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Icon name="arrow-left" style={styles.icon} />
      </TouchableOpacity>
      {/* Thông tin chi tiết */}
      {/* <Text style={styles.title}>{item?.imageUrl}</Text> */}
      <View style={styles.content}>
        <Image
          source={{
            uri: item?.imageUrl,
          }}
          style={styles.image}
        />
        <Text style={styles.title}>{item?.name}</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Size</Text>
          <FlatList
            data={coffeeOptions.size}
            horizontal
            renderItem={({ item }) => renderOption(item, size, setSize)}
            keyExtractor={(item) => item}
            contentContainerStyle={styles.optionsContainer}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Milk</Text>
          <FlatList
            data={coffeeOptions.milk}
            horizontal
            renderItem={({ item }) => renderOption(item, milk, setMilk)}
            keyExtractor={(item) => item}
            contentContainerStyle={styles.optionsContainer}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sweetness</Text>
          <FlatList
            data={coffeeOptions.sweetness}
            horizontal
            renderItem={({ item }) =>
              renderOption(item, sweetness, setSweetness)
            }
            keyExtractor={(item) => item}
            contentContainerStyle={styles.optionsContainer}
          />
        </View>

        {/* Số lượng */}
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => handleQuantityChange("decrease")}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity onPress={() => handleQuantityChange("increase")}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>
        {/* Tổng giá */}
        <Text style={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</Text>

        {/* Nút Thêm vào giỏ hàng */}
        <TouchableOpacity
          onPress={handleAddToCart}
          style={styles.addToCartButton}
        >
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
      {/* Biểu tượng giỏ hàng */}
      <Link href="/" asChild>
        <TouchableOpacity style={styles.cartButton}>
          <Icon name="shopping-cart" style={styles.icon} />
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF",
  },
  content: {},
  image: {
    height: 120,
  },
  backButton: {
    marginBottom: 20,
  },
  icon: {
    fontSize: 28,
    color: "#353535",
    // marginLeft: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  optionsContainer: {
    flexDirection: "row",
  },
  option: {
    padding: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
  optionDefault: {
    borderColor: "#CCC",
  },
  optionSelected: {
    borderColor: "#000",
    backgroundColor: "#DDD",
  },
  optionText: {
    fontSize: 14,
    color: "#000",
  },
  optionTextSelected: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  quantityButton: {
    fontSize: 18,
    padding: 10,
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 5,
    textAlign: "center",
    width: 40,
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 20,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  addToCartButton: {
    backgroundColor: "#54331E",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  addToCartText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  cartButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
});
