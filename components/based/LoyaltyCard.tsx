import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

interface LoyaltyCardProps {
  drinksPurchased: number; // Số ly nước đã mua
}

const LoyaltyCard: React.FC<LoyaltyCardProps> = ({ drinksPurchased }) => {
  const maxCups = 8;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Loyalty card</Text>
        <Text style={styles.text}>{`${drinksPurchased}/${maxCups}`}</Text>
      </View>

      <View style={styles.coffee}>
        {[...Array(maxCups)].map((_, index) => (
          <Icon
            key={index}
            name="coffee" // Icon ly nước
            size={24}
            style={styles.cupIcon}
            color={index < drinksPurchased ? "#151515" : "#ccc"}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#54331E",
    height: 130,
    borderRadius: 10,
    marginBottom: 20,
  },
  header: {
    // display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    // backgroundColor: 'white',
    paddingHorizontal: 30,
    height: 30,
    width: "100%",
  },
  title: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  cupIcon: {
    marginHorizontal: 5,
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  coffee: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
});

export default LoyaltyCard;
