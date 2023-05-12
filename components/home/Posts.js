import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import React from 'react'




const Posts = ({post}) => {

  return (
    <View style={{marginBottom: 30}} >
 <PostHeader post={post} />
 <ImagePost post={post}/>
 <View style={{marginHorizontal: 15, marginVertical: 10}}>
   <PostFooder/>
   <Likespost post={post}/>
   <Caption post={post}/>
   <ComentSection post={post}/>
   <Commentpost post={post} />
 </View>


    </View>
  )
}

const PostHeader = ({post})=>(

    <View style={styles.container}>
        <View style={styles.row}>
            <Image  source={{uri: post.post_picture}} style={styles.profile}  />
            <Text style={styles.name}>{post.name}</Text>
        </View>
        <View>
          <Text style={{color: 'white', fontWeight: '900'}}>...</Text>
        </View>
    </View>
)

const ImagePost = ({post})=> (
  <View style={
    {
      width: "100%",
      height: 370
    }
  }>
    <Image source={{uri: post.imagepost }} style={{height: '100%' , resizeMode: 'cover'}} />
  </View>
)
const PostFooder = ()=> {
  return(
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
   <View style={{flexDirection: 'row'}}>
<TouchableOpacity>
<AntDesign name="hearto" size={22} color="white" style={styles.iconsContainer} />
 </TouchableOpacity>
<TouchableOpacity>
<Ionicons name='chatbubble-outline' color={"white"} size={22} style={styles.iconsContainer}  /> 
</TouchableOpacity>
<TouchableOpacity>
 <Ionicons name='send' color={"white"} size={22} style={[{
  transform: [{ rotate: '320deg'}],
  marginTop: -3
 }, styles.iconsContainer]} /> 
 </TouchableOpacity>
 <View style={{
alignItems: 'flex-end',
  flex: 1
 }}>
 <TouchableOpacity>
 <Ionicons name='bookmark-outline' color={"white"} size={22}  /> 
 </TouchableOpacity> 
 </View>

      </View>
    </View>
  
  )
}

const Likespost = ({post})=>(
  <View style={{marginTop: 5, flexDirection: 'row'}}>
    <Text style={{color: 'white', fontWeight: '500',}}>
      {
        post.likes.toLocaleString('')
      }   Likes
      
    </Text>
  </View>
)

const Caption = ({post}) => (
  <View style={{ marginTop: 5,}}>
    <Text>

    <Text style={{color: 'royalblue', fontWeight: 'bold',}}>{post.name}</Text>
    <Text style={{color: 'white'}}> {''} {post.postmessage}</Text>
    </Text>


  </View>
)

// JAVASCRIPT  davilnagtion 
// length  > 1 true
// length < 0 flase

// 0 coments don't render coment
// one coemnt render comepent and make without 'alll' 'single'
// show comment with 'all' with plural word

const ComentSection = ({post})=> (
<View>
  {!!post.coments.length &&(
      <Text style={{color: 'gray'}}>
 
      View { 
      post.coments.length > 1 ? 'all' : ' ' } {post.coments.length } {''}
      {
      
        post.coments.length > 1 ? 'comments' : 'comment'
      }
        </Text>
  )}
</View>



)
const Commentpost = ({post}) =>(
  <View style={{marginTop: 5, }}>
    {
      post.coments.map((one, index) => (
        <Text key={index} style={{marginBottom: 4}}>
          <Text  style={{color: 'white', fontWeight: '600'}}>{one.name}</Text>{''}
          <Text style={{color: 'white'}}> {one.coment}</Text>
          
        </Text>
      ))
    }
  </View>

)
 
export default Posts

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginLeft: 5
  },
  profile :{
    width: 35,
    height: 35,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#ff8501',
    padding: 5,
    resizeMode: 'contain'

  },
  name: {
    fontWeight: '600',
    color: 'white',
    marginLeft: 5
  },
  iconsContainer: {
  // width: '43%',
    justifyContent : 'space-between',
    flexDirection: 'row',
    marginRight: 10

  


// backgroundColor: 'pink'

  }
})