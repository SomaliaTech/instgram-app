import { View, Text ,TextInput,StyleSheet,  Pressable,TouchableOpacity, Alert} from 'react-native'
import * as Validation from 'email-validator'
import * as yup from 'yup'

import { Formik } from 'formik'
import {auth} from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'



const ValidationSchame = yup.object().shape({
  email : yup.string().email().required('my friend will you shotup else url image'),
  password : yup.string().min(8, 'Password must be 8 characters long')
})
const Login = ({navigation}) => {
 const onlogin  = async (email, password,auth)=> {
  try{
await createUserWithEmailAndPassword(auth ,email,password)
  }catch(err){
    console.Alert(err.message)
  }
 }

  return (
    <View style={styles.wrapper}>
        
        <Formik
        initialValues={{email: "", password: ""}}
        validationSchema={ValidationSchame}
        onSubmit={values => {
          onlogin(values.email , values.password)
          
        }}
    validateOnMount={true}
        
        >
            
            {({ handleSubmit, handleChange, handleBlur,values, isValid }) => (
                <>
      <View style={[styles.inputField,{
      borderColor: values.email.length < 1 || Validation.validate(values.email) ? '#ccc' : 'pink'
      }]}>
        <TextInput 
        placeholder='Phone number , username or email'
        placeholderTextColor={'#444'}
       textContentType='emailAddress'
       autoFocus={true}
       autoCapitalize='none'
       onChangeText={handleChange('email')}
       onBlur={handleBlur('email')}
       value={values.email}
       
      
        />
      </View>
      <View style={[styles.inputField,{
    borderColor: 1 > values.password.length || values.password.length > 7 ? '#ccc' : 'pink'
      }]}>
        <TextInput  
        placeholderTextColor={'#444'}
        placeholder='Password'
        secureTextEntry={true}
        textContentType="password"
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.password}
        
        />
      </View>
      <View style={{ marginBottom: 30, alignSelf: 'flex-end'}}>
        <Text style={{color: '#6bb0f5'}}>Forget Password ?</Text>
      </View>
      
      <Pressable onPress={handleSubmit}  style={styles.pressableStyle(isValid)} disabled={!isValid} >
        <Text style={styles.pressableText}>Login</Text>
      </Pressable >
      <View style={styles.singUpContainer}>
        
        <Text>Don't have an account ?{""} </Text>
        <TouchableOpacity onPress={()=> navigation.push('SingUpScreen')}>
            <Text style={{color: '#6bb0f5', fontSize: 18}}>Sing Up</Text>
        </TouchableOpacity>
      </View>
      </>
            )}
      </Formik>
      
    </View>
  )
}
const styles = StyleSheet.create({
wrapper: {
  marginTop: 80
},
inputField: {
    padding: 11,
    borderWidth: 2,
    borderColor: '#fafafa',
    marginBottom: 10,
    borderRadius: 7
},
pressableStyle: isValid =>( {
    minHeight: 42,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isValid ? '#0096f6' : '#9acaf7',
    borderRadius: 6
}),
pressableText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20
},
singUpContainer: {
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center'

}
})

export default Login