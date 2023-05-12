import { View, Text, SafeAreaView ,StyleSheet, FlatList, ScrollView} from 'react-native'
import React from 'react'
import {Active} from '../posts'
import Header from '../components/home/header'
import Stories from '../components/home/Stories'
import Posts from '../components/home/Posts'
import BottomTabp from '../components/home/BottomTabp'
import { USERS } from '../data'


const Homescreens = ({navigation}) => {
  return (
    <SafeAreaView style={styles.home}>
      <Header navigation={navigation}/>
      <Stories/>
   <ScrollView>
  {
    Active.map((post , index)=>(
      <Posts post={post} key={index}/>
    ))
  }
   </ScrollView>
   <BottomTabp  post={USERS}/>
    </SafeAreaView>
   
  )
}

const styles = StyleSheet.create({
    home: {
        paddingTop: 45,
        flex: 1,
        backgroundColor: 'black'
    }
})

export default Homescreens