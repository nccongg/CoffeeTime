import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

interface LoyaltyCardProps {
  initialDrinksPurchased?: number;
}

const LoyaltyCard: React.FC<LoyaltyCardProps> = ({
  initialDrinksPurchased = 0,
}) => {
  const [drinksPurchased, setDrinksPurchased] = useState(
    initialDrinksPurchased
  );
  const maxCups = 8;

  const handleIconPress = () => {
    if (drinksPurchased === maxCups) {
      Alert.alert("Congratulations!", "You've completed your loyalty card!", [
        {
          text: "Reset",
          onPress: () => setDrinksPurchased(0), 
        },
      ]);
    }
  };

  return (
    <TouchableOpacity onPress={handleIconPress} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Loyalty card</Text>
        <Text style={styles.text}>{`${drinksPurchased}/${maxCups}`}</Text>
      </View>

      <View style={styles.coffee}>
        {[...Array(maxCups)].map((_, index) => (
          <Icon
            key={index}
            name="coffee" 
            size={24}
            style={styles.cupIcon}
            color={index < drinksPurchased ? "#151515" : "#ccc"}
          />
        ))}
      </View>
    </TouchableOpacity>
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
    flexDirection: "row",
    justifyContent: "space-between",
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
