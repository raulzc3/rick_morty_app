import { StyleSheet } from "react-native";
import theme from "./theme";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: { padding: 20, paddingBottom: 5, paddingTop: 5 },
  flatList: { margin: 10, paddingTop: 5, paddingBottom: 15 },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "black",
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  card: {
    flexDirection: "row",
    padding: 5,
    borderColor: theme.colors.green,
    borderWidth: 2,
    borderRadius: 15,

    backgroundColor: "rgba(255,255,255,.95)",
  },
  cardData: { flexGrow: 1 },
  image: { width: 100, height: 100, margin: "auto", borderRadius: 20 },
  bgImage: {
    flex: 1,
    justifyContent: "center",
  },
  characterDataRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
