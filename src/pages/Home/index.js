import { StyleSheet, Text, View, FlatList } from "react-native";
import { Agrotoxicos } from "../../components/Agrotoxicos";
import Header from "../../components/Hearder";
// import Moviments from "../../components/Moviments";
import Search from "../../components/Search";

const list = [
  {
    id: 1,
    label: "GAME",
    date: "17/09/2022",
    type: 0,
  },
  {
    id: 2,
    label: "Pix Luiz",
    date: "17/07/2022",
    type: 1,
  },
  {
    id: 3,
    label: "Salario",
    date: "09/12/2022",
    type: 1,
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      {/* <Search /> */}
      <Agrotoxicos />
      {/* <Text style={styles.title}>Ultimas pesquisas</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Moviments data={item}/>}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    paddingStart: 14,
    paddingTop: 14,
  },
  list: {
    fontSize: 18,
    paddingStart: 14,
    paddingTop: 14,
  },
});
