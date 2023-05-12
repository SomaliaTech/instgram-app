import { View, Text, TouchableOpacity,StyleSheet,Image } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

const BottomTabp = () => {
  const {active ,setActive} = useState(true)
  return (
    <View style={styles.wraper}>
    <View style={styles.container}>
     <View  style={styles.cont}>
      <TouchableOpacity>
        <Entypo name='home' color={"white"} size={20} style={styles.icon}  />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome name='search' color={"white"} size={20}   style={styles.icon}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name='play' color={"white"} size={20}   style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Entypo name='shopping-bag' color={"white"} size={20}   style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={{uri: 'https://pps.whatsapp.net/v/t61.24694-24/315427620_5819801638110603_2052908591544698392_n.jpg?ccb=11-4&oh=01_AdRsdHd_u453akDGtwfBPL9Di-Y9ltaM_JMqjbznx-f00g&oe=6407D736'}} style={{width: 30, height: 30 ,borderRadius: 50}} />
      </TouchableOpacity>
     </View>
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
wraper: {
  width: '100%',
   bottom: 0,
  backgroundColor: '#000',
  zIndex: 999,
  position: 'absolute'
},
container: {
flexDirection: 'row'
},
cont: {
  justifyContent: 'space-between',
  flexDirection: 'row',
  flex: 1,
  paddingVertical: 7,
  alignItems: 'center',
  marginHorizontal: 10,
  
  
},
icon:{
  color: 'white',
  flexDirection: "row",
  marginHorizontal: 10,
  width: 33,
  height: 33
}

})
export default BottomTabp