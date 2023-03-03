import { React } from "react";
import { StyleSheet, View, Text } from "react-native";
import StyledText from "./StyledText";
import styles from "../styles";
import AppBarTab from "./AppBarTab";

const AppBar = () => {
  return (
    <View style={styles.appBar}>
      <AppBarTab to="/">Characters</AppBarTab>
      <StyledText color="white">|</StyledText>
      <AppBarTab to="/locations">Locations</AppBarTab>
      <StyledText color="white">|</StyledText>
      <AppBarTab to="/episodes">Episodes</AppBarTab>
    </View>
  );
};

export default AppBar;
