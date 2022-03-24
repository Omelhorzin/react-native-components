import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Image } from 'react-native';
import { Dimensions, View } from 'react-native';

import header from './assets/header.png';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.headerView}>
        <Image source={header} style={styles.header} ></Image>
        <Text style={styles.title}>Estácio</Text>
      </View>
      <View style={styles.detailsView}>
        <Text>Xbox Series X</Text>
        <Image source={{ uri: 'https://arquivosbordados.com/wp-content/uploads/2021/10/embroidery-design-logo_753eeb22-e242-4204-bf27-f3012cc27322-1.jpg' }} style={styles.header}></Image>
        <Text>Sony</Text>
        <Text>Lorem ipsum dolor sit amet conseqt adiscipli elit</Text>
        <Text>R$ 4.0000,00</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  detailsView: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  headerView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    height: 350,
  }, 
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#6b5b95',
    paddingTop: 30,
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
  }
});
