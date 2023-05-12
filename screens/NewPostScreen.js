import { SafeAreaView, } from 'react-native'
import React from 'react'
import AddNewPost from '../components/home/addnewpost/AddNewPost'

const NewPostScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1,  paddingTop: 45}}>
      <AddNewPost navigation={navigation} />
    </SafeAreaView>
  )
}

export default NewPostScreen

