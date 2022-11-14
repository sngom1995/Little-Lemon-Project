import * as React from 'react';
import { View, StyleSheet, TextInput, Image, Pressable, Text, Alert } from 'react-native';
import { validateEmail } from '../utils';

const SubscribeScreen = () => {
  // Add subscribe screen code here
  const [email, setEmail] = React.useState('')
  return (
    <View style={{flex: 1}}>
      <Image style={subscribeStyles.imageStyle} source={require('../assets/little-lemon-logo-grey.png')}/>
      <Text style={subscribeStyles.textStyle}>Subscribe  to our newsletter for our latest delicious recipes!</Text>
      <TextInput
        style={subscribeStyles.inputStyle}
        value={email}
        onChangeText={setEmail}
        placeholder={'email'}
        keyboardType={'email-address'}
      />
      <Pressable 
      style=
      {{
        backgroundColor: validateEmail(email)?'#38B000': 'grey',
        justifyContent : 'flex-start',
        fontSize: 22,
        padding: 10,
        //marginVertical: 160,
        margin: 20,
        borderColor: validateEmail(email)?'#38B000': 'grey',
        borderWidth: 2,
        borderRadius: 10,
      }} 
  disabled={!validateEmail(email)} onPress={()=> Alert.alert('Thanks for subscribing, stay tuned!')}>
        <Text style={subscribeStyles.buttonText}> Subscribe </Text>
      </Pressable>
    </View>
  );
};

const subscribeStyles = StyleSheet.create({
  imageStyle :{
    marginTop:40,
    paddingTop: 50,
    width: 430,
    height: 120,
    padding: 20,
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  inputStyle: {
    marginTop:20,
    height: 50,
    margin: 20,
    borderWidth: 2,
    paddingLeft: 24,
    paddingRight:24,
    //padding: 24,
    justifyContent:'center',
    fontSize: 16,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'EDEFEE',
    color:'#222020',
    backgroundColor: '#F4F8F6',
  },
  button: {
    backgroundColor:'#38B000',
    justifyContent: 'flex-start',
    fontSize: 22,
    padding: 10,
    //marginVertical: 160,
    margin: 20,
    borderColor: '#38B000',
    borderWidth: 2,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color:"#FFFFFF",
    textAlign: 'center',
    fontWeight: '200',
  },
  textStyle : {
    margin: 16,
    paddingVertical: 5,
    paddingHorizontal:15,
    color: '#222020',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
})
export default SubscribeScreen;
