import {
  StyleSheet,
  TextInput,
  View,
} from "react-native";

import { Feather } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -20,
    paddingTop: 22,
    paddingBottom: 22,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 5,
    zIndex: 99,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  textInput: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#F2F2F2",
    padding: 8,
    borderRadius: 5,

  }
});


export default function Balance() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder="Digite sua pesquisa" />
      <Feather name="search" size={24} color="#666" style={{ alignSelf: 'center' }} />
    </View>
  );
}

