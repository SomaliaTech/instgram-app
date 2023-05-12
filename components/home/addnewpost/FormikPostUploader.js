import { View, Text, TextInput,Image, TouchableOpacity,Button } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import validUrl from 'valid-url'
const uploaderCaption = Yup.object().shape({
    imageUrl : Yup.string().url().required('my friend will you shotup else url image'),
    caption : Yup.string().max(2000, 'The caption is Reached the amounnt')
})



const placehoderImage = "https://o.remove.bg/downloads/8cb0b8c8-ca5b-4656-a18d-cd9fa4fe8a1b/cloud-upload-a30f385a928e44e199a62210d578375a-removebg-preview.png"

const FormikPostUploader = ({navigation}) => {
    const [themepnel,seThemepnel] = useState(placehoderImage)
  return (
   <Formik
   initialValues={{caption : '', imageUrl: ''}}
  onSubmit={values => {
    console.log(values)
    console.log('your post success')
    navigation.goBack()
  }}
   validationSchema={uploaderCaption}
   validateOnMount={true}
   
   >
{({handleBlur,handleChange, handleSubmit, values, errors, isValid})=>
<>
<View style={{margin: 20 , justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}} >
    <TouchableOpacity>
    <Image source={{uri: validUrl.isUri(themepnel ? themepnel : placehoderImage)}} style={{width: 100, height: 100,}} />
    </TouchableOpacity>
    
<View style={{flex: 1 ,overflow: 'hidden' ,marginLeft: 13}}> 
<TextInput placeholder="what's your mind ? " placeholderTextColor='gray' multiline={true} style={{color: 'white', fontSize: 20}} 
    onChangeText={handleChange('caption')}
    onBlur={handleBlur('caption')}
    value={values.caption}

    />
    { 
        errors.caption && (
            <Text style={{color: 'pink' , fontSize: 10}}>{errors.caption}</Text>
        )
    }
</View>
  
</View>
<TextInput placeholder="Enter your url" placeholderTextColor='white' style={{color: 'white', fontSize: 18 , marginBottom: 10}} 
onChangeText={handleChange('imageUrl')}
onBlur={handleBlur('imageUrl')}
value={values.imageUrl}
onChange={(e)=>seThemepnel(e.nativeEvent.text)}
/>
{
    errors.imageUrl && (
        <Text style={{fontSize: 10, color: 'red'}}>{errors.imageUrl}</Text>
    )
}
<Button onPress={handleSubmit}  title='Post' disabled={!isValid}  />
</>
}
   </Formik>
  )
}

export default FormikPostUploader