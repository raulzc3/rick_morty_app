import React from "react";
import { View, Text } from "react-native";
import CharacterList from "./CharacterList";
import AppBar from "./AppBar";
import { Route, Routes, Link } from "react-router-native";
import LocationList from "./LocationList";

const Main = () => {
  return (
    <View
      style={{
        flexGrow: 1,
      }}
    >
      <AppBar />
      <Routes>
        <Route exact path="/" element={<CharacterList />} />
        <Route exact path="/locations" element={<LocationList />} />
        <Route exact path="/episodes" element={<Text>Work in progress</Text>} />
      </Routes>
    </View>
  );
};

export default Main;
