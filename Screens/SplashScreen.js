import React from 'react';
import {
    View,
    Text,
    Button,
    Dimensions,
    StyleSheet,
} from 'react-native';

// always put the Dimeension declaration above the component function
// also if you want to access the height you don't do this
// const {height} = Dimensions.get('screen');

// you do this instead
const height = Dimensions.get('screen').height

// same as the Login screen, do this instead
// and remember components always start with a capital letter
export default function SplashScreen ({navigation})  {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>Header12</Text>
            </View>  
            {/* button to navigate to the login screen */}
            <Button title="Go to Login screen" onPress={() => navigation.navigate("Login")}/>  
            
        </View>
    );
};


// this is not necessary
// const height_new = height * 0.28;

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeff41',
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  header:{
    // justifyContent: 'center',
    // alignItems:'center'
},

footer:{
    flex:1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical:50,
    paddingHorizontal:30
},
new:{
    // instead of this
    // width: height_new,
    // height: height_new

    // do this
    width: height * 0.28,
    height: height * 0.28
},

title:{
    color: '#0d47a1',
    fontSize: 30,
    fontWeight:'bold'
},

text:{
    color:'grey',
    marginTop: 30,
    marginTop:10
},
button:{
    alignItems: 'flex-end',
    marginTop: '30'

},
signIn:{
    width: 150,
    height:50,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius:25,
    flexDirection: 'row'
    
    
},
textSign:{
    color:'#263238',
    fontWeight: 'bold'
},

    


});