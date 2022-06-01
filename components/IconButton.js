import { StyleSheet, Text, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const IconButton = ({ icon, color, onPress }) => {
  return (
    <View style={styles.iconContainer}>
      <Pressable
        onPress={onPress}
        // android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Ionicons name={icon} size={24} color={color} />
      </Pressable>
    </View>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  iconContainer: {
    borderRadius: 10,
    // backgroundColor: "red",
  },
  pressed: {
    opacity: 0.7,
  },
});
