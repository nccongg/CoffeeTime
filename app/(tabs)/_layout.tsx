import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { BottomNavigation } from "react-native-paper";
import ExploreScreen from "./explore";
import HomeScreen from "./(home)/index";
import RewardsScreen from "./(rewards)/rewards";
import MyOrderScreen from "./(my_order)/my_order";

export default function Layout() {
  const [index, setIndex] = useState(0); // Quản lý tab hiện tại
  const [routes] = useState([
    { key: 'home', title: 'Home', focusedIcon: 'home' },
    { key: 'rewards', title: 'Rewards', focusedIcon: 'gift' },
    { key: 'myOrder', title: 'My Order', focusedIcon: 'clipboard' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    rewards: RewardsScreen,
    myOrder: MyOrderScreen,
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex} // Cập nhật tab khi người dùng chọn
          barStyle={styles.tabBar} // Styling cho TabBar
          activeColor="black" // Màu icon/tab đang chọn
          inactiveColor="#ccc" // Màu icon/tab không được chọn
          renderScene={renderScene} // Hiển thị nội dung tab
          key={routes[index].key}

          
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#80EE98",
  },
  content: {
    flex: 1,
    borderRadius: 100,
  },
  tabBar: {
    // // position: "relative", // Đặt TabBar nổi
    // backgroundColor: 'white',
    // position: 'relative',
    // overflow: 'hidden',
    backgroundColor: "#fff",
    // borderRadius: 30,
    height: 70,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 5 },
    // shadowOpacity: 0.1,
    // shadowRadius: 5,
    // elevation: 10,
    // marginLeft: 20,
    // marginRight: 20,
    // marginBottom: 20,
  },
});
