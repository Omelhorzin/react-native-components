import {View,Text, StyleSheet} from "react-native"

function Descricao () {
    return(
        <View>
        <Text style={styles.productDescription}>Lorem ipsum dolor sit amet conseqt adiscipli elit. Lorem ipsum dolor sit amet conseqt adiscipli elit.Lorem ipsum dolor sit amet conseqt adiscipli elit.Lorem ipsum dolor sit amet conseqt adiscipli elit.Lorem ipsum dolor sit amet conseqt adiscipli elit.</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    productDescription: {
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 15,
        color: '#6b5b95',
        textAlign: 'justify',
      },
})
export default Descricao