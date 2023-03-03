import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  ImageBackground,
  View,
  ActivityIndicator,
} from "react-native";
import { getCharacters } from "../helpers/getCharacters";
import CharacterItem from "./CharacterItem";
import styles from "../styles.js";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const result = await getCharacters();
      setCharacters(result);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
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
          data={characters}
          renderItem={({ item: character }) => {
            return <CharacterItem {...character} />;
          }}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          contentContainerStyle={styles.flatList}
        />
      )}
    </ImageBackground>
  );
};

export default CharacterList;
