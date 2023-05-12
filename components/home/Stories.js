import { View, Text, ScrollView, FlatList,Image,StyleSheet } from 'react-native'
import React from 'react'
import { USERS } from '../../data'

const Stories = () => {
  return (
    <View style={{marginBottom: 13,}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
{USERS.map((story, index)=>(
    <View key={index} style={{alignItems: 'center'}}>
<Image source={{uri: story.image}} style={styles.story} />
<Text style={{color: 'white', marginLeft: 5}}>
   {
    story.name.length > 11  ? story.name.slice(0,10).toLowerCase() + '..' : 
    story.name.toLowerCase()
   }
</Text>
    </View>
    

))}
        </ScrollView>

      
    </View>
  )
}

const styles = StyleSheet.create({
    story: {
        height: 60,
        width: 60,
        borderRadius: 50,
        marginLeft: 6,
        borderColor: '#ff8501',
        borderWidth: 3
    }
})

export default Stories