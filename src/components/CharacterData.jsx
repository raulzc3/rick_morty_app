import { View } from "react-native";
import StyledText from "./StyledText";
import styles from "../styles";

const CharacterData = (props) => {
  return (
    <View style={{ paddingVertical: 5 }}>
      <View style={styles.characterDataRow}>
        <View>
          <StyledText fontWeight="bold">Species</StyledText>
          <StyledText align="center">{props.species}</StyledText>
        </View>
        <View>
          <StyledText fontWeight="bold">Gender</StyledText>
          <StyledText align="center">{props.gender}</StyledText>
        </View>
        <View>
          <StyledText fontWeight="bold">Status</StyledText>
          <StyledText align="center">{props.status}</StyledText>
        </View>
      </View>
    </View>
  );
};

export default CharacterData;
