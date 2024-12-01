import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Feather"; // Đảm bảo bạn đã cài thư viện react-native-vector-icons


import { useNavigation } from "@react-navigation/native";
import { Text } from "@/components/Themed";
const Profile = () => {
  const navigation = useNavigation();

  const [editableField, setEditableField] = useState<string | null>(null);
  const [profileData, setProfileData] = useState({
    fullName: "Anderson",
    phoneNumber: "+60134589525",
    email: "Anderson@email.com",
    address: "3 Addersion Court\nChino Hills, HO56824, United States",
  });

  const handleEditField = (field: string) => {
    setEditableField(field);
  };

  const handleSaveField = () => {
    setEditableField(null);
  };

  const handleChange = (field: string, value: string) => {
    setProfileData({ ...profileData, [field]: value });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Icon name="arrow-left" style={styles.icon} />
        </TouchableOpacity>

        <Text style={styles.title}>Profile</Text>
      </View>

      <View style={styles.fieldContainer}>
        <Icon
          name="user"
          size={24}
          color="#334E68"
          style={{ paddingRight: 10 }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.label}>Full name</Text>
          {editableField === "fullName" ? (
            <TextInput
              style={styles.input}
              value={profileData.fullName}
              onChangeText={(value) => handleChange("fullName", value)}
              onBlur={handleSaveField}
              autoFocus
            />
          ) : (
            <Text style={styles.value}>{profileData.fullName}</Text>
          )}
        </View>
        <TouchableOpacity onPress={() => handleEditField("fullName")}>
          <Icon name="edit-2" size={20} color="#334E68" />
        </TouchableOpacity>
      </View>

      <View style={styles.fieldContainer}>
        <Icon
          name="phone"
          size={24}
          color="#334E68"
          style={{ paddingRight: 10 }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.label}>Phone number</Text>
          {editableField === "phoneNumber" ? (
            <TextInput
              style={styles.input}
              value={profileData.phoneNumber}
              onChangeText={(value) => handleChange("phoneNumber", value)}
              onBlur={handleSaveField}
              keyboardType="phone-pad"
              autoFocus
            />
          ) : (
            <Text style={styles.value}>{profileData.phoneNumber}</Text>
          )}
        </View>
        <TouchableOpacity onPress={() => handleEditField("phoneNumber")}>
          <Icon name="edit-2" size={20} color="#334E68" />
        </TouchableOpacity>
      </View>

      <View style={styles.fieldContainer}>
        <Icon
          name="mail"
          size={24}
          color="#334E68"
          style={{ paddingRight: 10 }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.label}>Email</Text>
          {editableField === "email" ? (
            <TextInput
              style={styles.input}
              value={profileData.email}
              onChangeText={(value) => handleChange("email", value)}
              onBlur={handleSaveField}
              keyboardType="email-address"
              autoFocus
            />
          ) : (
            <Text style={styles.value}>{profileData.email}</Text>
          )}
        </View>
        <TouchableOpacity onPress={() => handleEditField("email")}>
          <Icon
            name="edit-2"
            size={20}
            color="#334E68"
            style={{ paddingRight: 10 }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.fieldContainer}>
        <Icon
          name="map-pin"
          size={24}
          color="#334E68"
          style={{ paddingRight: 10 }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.label}>Address</Text>
          {editableField === "address" ? (
            <TextInput
              style={[styles.input, { height: 60 }]}
              value={profileData.address}
              onChangeText={(value) => handleChange("address", value)}
              onBlur={handleSaveField}
              multiline
              autoFocus
            />
          ) : (
            <Text style={styles.value}>{profileData.address}</Text>
          )}
        </View>
        <TouchableOpacity onPress={() => handleEditField("address")}>
          <Icon name="edit-2" size={20} color="#334E68" />
        </TouchableOpacity>
      </View>
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
  },
  backButton: {
    marginBottom: 20,
    width: 50,
  },
  icon: {
    fontSize: 28,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: 500,
    marginBottom: 20,
  },
  fieldContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingBottom: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  label: {
    fontSize: 12,
    color: "#A0A0A0",
  },
  value: {
    fontSize: 16,
    color: "#334E68",
  },
  input: {
    fontSize: 16,
    color: "#334E68",
    borderBottomWidth: 1,
    borderBottomColor: "#A0A0A0",
    paddingVertical: 2,
  },
});

export default Profile;
