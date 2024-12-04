import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

interface ItemCardProps {
  imageUrl: string; 
  name: string; 
  description: string; 
  price: number; 
  width?: number; 
  height?: number; 
  onPress: () => void; 
  onAddToCart?: () => void; 
}

const ItemCard: React.FC<ItemCardProps> = ({
  imageUrl,
  name,
  description,
  price,
  width = 150, 
  height = 230, 
  onPress, 
  onAddToCart = () => {},
}) => {
  const isCustomSize = width !== 150 || height !== 230;

  return (
    <TouchableOpacity
      style={[
        styles.card,
        { width, height, flexDirection: isCustomSize ? "row" : "column" },
      ]}
      onPress={onPress} 
    >
      <Image
        source={{ uri: imageUrl }}
        style={[
          styles.image,
          {
            width: width !== 150 || height !== 230 ? 100 : width - 30,
            height: width !== 150 || height !== 230 ? 100 : height / 2.3,
            marginRight: width !== 150 || height !== 230 ? 20 : 0,
          },
        ]}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={onPress}>
        <Icon name="plus" size={16} color="#fff" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginRight: 20,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    borderRadius: 8,
  },
  info: {
    flex: 1,
    marginTop: 10,
    width: "100%",
  },
  name: {
    width: "100%",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginVertical: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  addButton: {
    position: "absolute",
    backgroundColor: "#54331E",
    borderRadius: 1000,
    padding: 10,
    justifyContent: "flex-end",
    right: 10,
    bottom: 10,
  },
});

export default ItemCard;
