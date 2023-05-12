import { Text, View , Image, StyleSheet} from 'react-native'
import React from 'react'
import SingUpForm from '../components/singUpScreen/SingUpForm'

const SingUpScreen = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
 <View style={styles.container}>
  <Image source={require('../assets/Instagram_logo.png')} style={{width: 100, height: 100}} />
 </View>
 <SingUpForm navigation={navigation}/>
    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    marginTop: 50
  },
  container: {
    alignItems : 'center',
    marginTop: 60,
    paddingHorizontal: 10
  }
})
export default SingUpScreen

