import { View, Image, StyleSheet, Text, Dimensions } from "react-native";

interface SplashScreenProps {
  targetTab: string;
}
const { height } = Dimensions.get("window");
const SplashScreen = () => {
  console.log("SplashScreen is being rendered for tab:"); 

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/splash.png")}
        style={styles.image}
      />
      <Text style={styles.text}>Coffee Time</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 400,
    height: 950,
  },
  text: {
    paddingTop: 200,
    position: "absolute",
    fontSize: 50,
    color: "#000",
    fontWeight: "bold", 
    textShadowColor: "rgba(0, 0, 0, 0.6)", 
    textShadowOffset: { width: 6, height: 6 }, 
    textShadowRadius: 3, 
  },
});

export default SplashScreen;
