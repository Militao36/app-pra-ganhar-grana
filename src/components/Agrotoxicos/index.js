import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 10,
    marginTop: 10
  },
  subtitle: {
    fontSize: 14,
    backgroundColor: '#EFEFEF',
    padding: 10,
    paddingStart: 5,
    fontWeight: "400"
  },
  description: {
    padding: 10,
    fontSize: 14,
  },
  items: {
    backgroundColor: "#fff",
    marginTop: 14,
    marginStart: 14,
    marginEnd: 14,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    borderRadius: 5
  }
});


export function Agrotoxicos() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Agrotoxicos - 0101</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={[styles.items, { flex: 1 }]}>
          <Text style={styles.subtitle}>Concentração:</Text>
          <Text style={styles.description}>
            10mg/kg
          </Text>
        </View>
        <View style={[styles.items, { flex: 1 }]}>
          <Text style={styles.subtitle}>Composição:</Text>
          <Text style={styles.description}>
            10mg/kg
          </Text>
        </View>
      </View>
      <View style={styles.items}>
        <Text style={styles.subtitle}>Descrição:</Text>
        <Text style={styles.description}>
          Esse bagulho serve pra merda nenhum só mata
        </Text>
      </View>
    </View>
  );
}

