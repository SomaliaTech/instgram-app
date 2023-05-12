import { View, Text ,StyleSheet,Image} from 'react-native'
import React from 'react'
import Login from '../components/loginFrom/Login'
const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.logoheader}>
        <Image  source={require('../assets/Instagram_logo.png' ) } style={{width: 100,
        height: 100}} />
        </View>
      {/* LoginFrom from  */}
      <Login navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        paddingHorizontal: 12,
        flex: 1
    },
    logoheader:{
        alignItems: 'center',
        marginTop: 60,
        
    }
})
export default LoginScreen