import React, { useState, useEffect } from "react";
import {
  FlatList,
  ActivityIndicator,
  View,
  ImageBackground,
} from "react-native";
import { getLocations } from "../helpers/getLocations";
import LocationItem from "./LocationItem";
import styles from "../styles";

const LocationList = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const result = await getLocations();
      setLocations(result);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useState(() => {
    fetchData();
  }, []);

  return (
    <ImageBackground
      source={{
        uri: "https://images.wallpapersden.com/image/download/rick-and-morty-space_a2VlbGaUmZqaraWkpJRsZ2WtZmdtZQ.jpg",
      }}
      resizeMode="cover"
      style={styles.bgImage}
    >
      {loading ? (
        <View style={{ height: "92%", justifyContent: "center" }}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          data={locations}
          renderItem={({ item: location }) => {
            return <LocationItem {...location} />;
          }}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          contentContainerStyle={styles.flatList}
        />
      )}
    </ImageBackground>
  );
};

export default LocationList;
