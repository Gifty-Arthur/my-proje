import React from 'react';
import {
    View,
    Text,
    Button,
    Dimensions,
    StyleSheet,
} from 'react-native';


const SplashScreen =() => {
    return (
        <View styles={StyleSheet.container}>
            <View style={styles.header}>
                <Text>Header12</Text>
            </View>  
            <View style={styles.footer}>
                <Text>footer</Text>
             </View>     
            
        </View>
    );
};


export default SplashScreen;

const {height} = Dimensions.get('screen');
const height_new = height * 0.28;

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeff41',
  },
  
  header:{
    flex:2, 
    justifyContent: 'center',
    alignItems:'center'
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
    width: height_new,
    height: height_new
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