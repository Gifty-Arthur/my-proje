import React from 'react'
import {
  Text,
  View,
  Button,
  StyleSheet,
  Dimensions,
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const height = Dimensions.get('screen').height

// do this instead
export default function Login ({navigation}) { 
  return(
    <View style={styles.container}>
      <View style={styles.text_header}>
        <Text style={styles.text_header}>Welcome!</Text>
        
      </View>
      <View style={styles.footer}>
      
        <Text style={styles.text_footer}>Email</Text>
        
        <View style={styles.action}>
        <FontAwesome
         name="user"
          size={24}
           color="black"
            />

        </View>
      </View>

      <Button title=" Go to Splash screen" onPress={() => navigation.navigate("Splash")}/>  
    </View>
  )
}

// this is wrong, you should export the function you ceated above instead.
// so don't do this
// export default function App() {
  
// };
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },
  header:{
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 40
  },
  footer: {
    backgroundColor: 'white',
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    paddingHorizontal:20,
    paddingVertical:30
  },
  text_header:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    
  },
  text_footer:{
    color: "black",
    fontSize: 15,
    marginTop: 5
  },
  action:{
    flexDirection: 'row',
    marginTop: 10,
    borderBottomColor: '#f4511c',
    borderBottomWidth: 1,
    paddingBottom: 5
  },
  textInput:{
    marginTop: Platform.OS == 'ios' ? 0 : -12,
    paddingLeft: 30,
    color: 'black',
  },
  button:{
    alignItems: 'center',
    marginTop: 30
  },
  signIn:{
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  textSign:{
    fontSize: 10,
    fontWeight: 'bold'
  },
  new:{
    width: height * 0.28,
    height: height * 0.28
},
image: {
  flex: 1,
  justifyContent: "center",
  height: '150%',
  width:'110%',
  alignItems: "center",
  
  

},
scrollView: {
  backgroundColor: 'white',
  marginHorizontal: 20,
},





  
});