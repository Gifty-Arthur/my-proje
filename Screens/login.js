import React from 'react'
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  

} from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const login = () => { 
  return(
    <View style={styles.container}>
      <View style={styles.text_header}>
        <Text style={styles.text.header}>Welcome!</Text>
        
      </View>
      <View style={styles.footer}>
      
        <Text style={styles.text.footer}>Email</Text>
        
        <View style={style.action}>
        <FontAwesome
         name="user"
          size={24}
           color="black"
            />

        </View>
      </View>
    </View>
  )
}

export default function App() {
  
};


 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },
  header:{
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 40
  },
  footer: {
    flex: 2,
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
    flex: 1,
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
    width: height_new,
    height: height_new
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