import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import FormikPostUploader from './FormikPostUploader'

const AddNewPost = ({navigation}) => (
  <View style={styles.container}>
    <Header navigation={navigation}/>
    <FormikPostUploader navigation={navigation} />
  </View>
)

const Header = ({navigation}) => {
    return (
        <View style={styles.headerContainer}>
    <TouchableOpacity onPress={()=> navigation.goBack()}>
    <Ionicons name="chevron-back-outline" size={33} color="white" />    
    </TouchableOpacity>
    
          <Text style={styles.headerText}>New Post</Text>
          <Text></Text>
        </View>
      )
}

export default AddNewPost

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        fontWeight: '700',
        color: 'white',
        marginRight: 25,
        
    }
})