import { View, Image, StyleSheet, Text, Dimensions } from "react-native";

// Định nghĩa tham số cho từng loại màn hình
interface SplashScreenProps {
  targetTab: string;
}
const { height } = Dimensions.get("window");
const SplashScreen = () => {
  console.log("SplashScreen is being rendered for tab:"); // Thêm dòng này

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
    fontWeight: "bold", // Tăng độ dày chữ nếu cần
    textShadowColor: "rgba(0, 0, 0, 0.6)", // Màu đổ bóng (đen với độ mờ)
    textShadowOffset: { width: 6, height: 6 }, // Đổ bóng theo trục x và y
    textShadowRadius: 3, // Độ mờ của bóng
  },
});

export default SplashScreen;
