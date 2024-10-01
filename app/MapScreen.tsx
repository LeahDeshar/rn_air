import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import appartments from "@/assets/data/appartments.json";
import CustomMarker from "@/components/map/CustomMarker";
import AppListItem from "@/components/map/AppListItem";
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
          <CustomMarker key={app.id} app={app} />
        ))}

        <AppListItem app={appartments[0]} />
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
