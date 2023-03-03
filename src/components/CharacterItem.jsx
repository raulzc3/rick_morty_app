import React from "react";
import { View, Image } from "react-native";
import CharacterData from "./CharacterData";
import StyledText from "./StyledText";

import styles from "../styles";

const CharacterItem = (props) => {
  return (
    <View key={props.id} style={styles.card}>
      <Image source={{ uri: props.image }} style={styles.image} />
      <View style={styles.cardData}>
        <StyledText
          fontSize="subheading"
          fontWeight="bold"
          color="secondary"
          align="center"
        >
          {props.id + "." + props.name}
        </StyledText>
        <CharacterData {...props} />
        <StyledText color="secondary" align="center">
          View more {">"}
        </StyledText>
      </View>
    </View>
  );
};

export default CharacterItem;
