
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

export default function Hearder() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Compendio</Text>
      <TouchableOpacity style={styles.buttonUser}>
        <Feather name='user' size={27} color='#666' />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textClose: {
    color: '#fff',
  },
  container: {
    backgroundColor: '#00c662',
    paddingTop: statusBarHeight,
    flexDirection: 'row',
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
  buttonUser: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
