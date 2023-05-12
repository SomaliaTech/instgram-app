import { View, Text , TextInput, StyleSheet, Pressable} from 'react-native'
import React from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'
 import validation from 'email-validator'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SingupSChame = yup.object().shape({
  email: yup.string().email().required(),
  username: yup.string().required().min(4, 'enter your username'),
  password : yup.string().required().min(6, 'password must be 8')

})
const SingUpForm = ({navigation}) => {
  return (
    <View style={styles.container}>
<Formik
onSubmit={values => console.log(values)}
validationSchema={SingupSChame}
initialValues={{username: '', password: '', email: ''}}
>
  

  {({handleSubmit, handleChange, handleBlur , values, isValid})=>
   <>
      <View style={[styles.inputField, {
        borderColor: values.email.length < 1 || validation.validate(values.email) ? '#ccc' : 'pink'
      }]}>
        <TextInput placeholder='Email' 
        placeholderTextColor={"gray"}
        autoFocus={true}
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
         textContentType={"emailAddress"} />
      </View>
      <View style={[styles.inputField, {
        borderColor:  values.username.length < 1 || values.username.length > 3  ? "#cccc" : 'pink' 
      }]}>
        <TextInput placeholder='Username' 
        placeholderTextColor={"gray"}
         textContentType={'username'} 
         onChangeText={handleChange('username')}
         onBlur={handleBlur('username')}
         value={values.username}
         />
      </View>
      <View style={[styles.inputField, {
        borderColor: values.password.length < 1 || values.password.length > 7 ? "#ccc" : 'pink'
      }]}>
        <TextInput placeholder='password'
         placeholderTextColor={"gray"}
        secureTextEntry={true}
        textContentType={"password"} 
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.password}
        />

      </View>
    <Pressable style={styles.pressableContainer(isValid)}
    // disabled={!isValid}
    onPress={handleSubmit}>
      <Text style={styles.presssableText}>SingUp</Text>
    </Pressable>
      <View style={{flexDirection: 'row', marginTop: 29, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Already have an account ? </Text>
       <TouchableOpacity onPress={()=> navigation.goBack()}>
        <Text style={{color: 'royalblue' ,fontSize: 18, fontWeight: '700'}}>Sing In</Text>
       </TouchableOpacity>
      </View>
     </>
}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
container: {
  marginTop: 60,
  paddingHorizontal: 10,
  marginBottom: 5
},
inputField: {
  padding: 12,
  borderWidth: 2,
  borderColor: '#ccc',
  marginBottom: 10,
  borderRadius: 7
},
pressableContainer: isValid =>( {
  marginTop: 30,
  alignItems: 'center',
  width: "100%",
  backgroundColor: isValid ? '#0096f6' : '#9ac'  ,
  minHeight: 42,
  justifyContent: 'center'
}),
presssableText: {
  color: "white",
  fontSize: 18,
  fontWeight: '600'
}

})
export default SingUpForm