import { View, Text,Image,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
      <Image style={styles.logo} source={require("../../assets/images.png")} />
      </TouchableOpacity>
      
      <View style={styles.iconsContainer}>
<TouchableOpacity>
 <FontAwesome name='heart' color={"white"} size={20}  style={styles.icons}/> 
 </TouchableOpacity>
 <TouchableOpacity onPress={()=> navigation.push('NewPost')} >
 <AntDesign name='plussquareo' color={"white"} size={20} style={styles.icons} /> 
 </TouchableOpacity>
<TouchableOpacity>
  <View style={styles.unreadBage}>
<Text style={styles.unreadBageText}>9</Text>
  </View>
<Ionicons name='chatbubble-outline' color={"white"} size={22} style={styles.icons} /> 
</TouchableOpacity>


      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    alignItems: 'center'

  },
  iconsContainer: {
    flexDirection: 'row',
  
  },
  logo: {
   width: 150,
   height: 50,
   resizeMode: "contain"
  },
icons: {
  marginLeft: 10,
  resizeMode: 'contain'
},
unreadBage: {
  backgroundColor: '#ff3250',
  position: 'absolute',
  left: 17,
  bottom: 18,
  width: 25,
  height: 18,
borderRadius: 7,
justifyContent: 'center',
alignItems: 'center',
zIndex: 100
  
},

unreadBageText: {
  color: 'white',
  fontWeight: "600"
}
})

export default Header