import * as React from 'react';
import { View, Image, Text, StyleSheet, Pressable } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={welcomeStyle.container}>
     <View >
      <Image 
          style={welcomeStyle.imageStyle} 
          source={require('../assets/little-lemon-logo.png')}  
          accessible={true}
          accessibilityLabel={'Lottle Lemon Logo'}/>
     </View>
     <Text style={welcomeStyle.textStyle}> Little Lemon, your local Mediterranean Bistro</Text>
     <Pressable style={welcomeStyle.button} onPress={() => navigation.navigate('Subscribe')}>
      <Text style={welcomeStyle.buttonText}>
        Newsletter
      </Text>
     </Pressable>
    </View>
  );
};


const welcomeStyle = StyleSheet.create({
  container :{
    paddingTop: 150,
    flex: 1,
    padding: 14,
    marginTop: 25,
    flexDirection: 'column',
    justifyContent: 'flex-start'
    
  },
  textStyle : {
    marginTop: 16,
    paddingVertical: 35,
    paddingHorizontal:15,
    color: '#121212',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageStyle: {
    paddingTop: 280,
    paddingLeft: 380,
    width: 150,
    height: 250,
    justifyContent: 'center',
    resizeMode:'contain'
  },
  button: {
    backgroundColor:'#38B000',
    justifyContent: 'flex-end',
    fontSize: 22,
    padding: 10,
    marginVertical: 160,
    margin: 10,
    borderColor: '#38B000',
    borderWidth: 2,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color:"#FFFFFF",
    textAlign: 'center'
  }
})

export default WelcomeScreen;
