import React from "react";
import { View, Image } from "react-native";
import LocationData from "./LocationData";
import StyledText from "./StyledText";

import styles from "../styles";

const LocationItem = (props) => {
  return (
    <View key={props.id} style={styles.card}>
      <View style={styles.cardData}>
        <StyledText
          fontSize="subheading"
          fontWeight="bold"
          color="secondary"
          align="center"
        >
          {props.name}
        </StyledText>
        <LocationData {...props} />
        <StyledText color="secondary" align="center">
          View residents {">"}
        </StyledText>
      </View>
    </View>
  );
};

export default LocationItem;
