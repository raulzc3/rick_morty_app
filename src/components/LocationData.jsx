import { View } from "react-native";
import StyledText from "./StyledText";
import styles from "../styles";

const LocationData = (props) => {
  return (
    <View style={{ paddingVertical: 5, paddingLeft: 15 }}>
      <View style={{ flexDirection: "row" }}>
        <StyledText fontWeight="bold">Type: </StyledText>
        <StyledText>{props.type}</StyledText>
      </View>
      <View style={{ flexDirection: "row" }}>
        <StyledText fontWeight="bold">Dimension :</StyledText>
        <StyledText>{props.dimension}</StyledText>
      </View>
    </View>
  );
};

export default LocationData;
