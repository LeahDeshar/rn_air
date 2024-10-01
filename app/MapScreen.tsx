import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import appartments from "@/assets/data/appartments.json";
const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {appartments?.map((app) => (
          <Marker
            key={app.id}
            coordinate={{
              latitude: app.lat,
              longitude: app.long,
            }}
            title={app.title}
          >
            <View
              style={{
                backgroundColor: "white",
                padding: 5,
                paddingHorizontal: 18,
                borderWidth: 1,
                borderColor: " gray",
                borderRadius: 20,
              }}
            >
              <Text style={{ fontFamily: "InterBold" }}>${app.price}</Text>
            </View>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
