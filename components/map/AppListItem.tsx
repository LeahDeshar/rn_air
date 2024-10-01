import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const AppListItem = ({ app }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: app.image,
        }}
        style={{
          width: 150,
          aspectRatio: 1,
          resizeMode: "cover",
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
        }}
      />
      <View
        style={{
          padding: 10,
          width: "60%",
        }}
      >
        <Text style={styles.title}>{app.title}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.title}>$ {app.price} night</Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Ionicons name="star" color={"orange"} style={{ marginTop: 1 }} />
            <Text style={styles.title}>
              {app.rating} ({app?.numOfStars})
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AppListItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 80,
    right: 10,
    left: 10,
    borderRadius: 20,
    flexDirection: "row",
  },
  title: {
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 5,
  },
  price: {
    fontWeight: "bold",
    marginBottom: 10,
  },
});
