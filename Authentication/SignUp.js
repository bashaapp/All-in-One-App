import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const SignUp =({navigation})=>{
    return(
        <View style={styles.container}>
            <View style={styles.header}>
             
                <Text style={styles.title}>REGISTRATION</Text>

                <View style={{marginTop:'20%'}}>
                  <TextInput
                   style={styles.input}
                   placeholder="User Name"
                   placeholderTextColor = "#9a73ef"
                   autoCapitalize = "none"
                  
                  />  
                  <TextInput
                   style={[styles.input,{marginTop:'4%'}]}
                   placeholder="Email"
                   placeholderTextColor = "#9a73ef"
                   autoCapitalize = "none"
                  
                  />  

                 <TextInput
                   style={[styles.input,{marginTop:'4%'}]}
                   placeholder="Password"
                   placeholderTextColor = "#9a73ef"
                   autoCapitalize = "none"
                  
                  />  
                     <TextInput
                   style={[styles.input,{marginTop:'4%'}]}
                   placeholder="Confirm Password"
                   placeholderTextColor = "#9a73ef"
                   autoCapitalize = "none"
                  
                  />  


                </View>
            </View>

            <View style={styles.body}>
                <View style={{...StyleSheet.absoluteFillObject, backgroundColor:'#ff3333'}}/>
                <View style={{backgroundColor:'#dcdcdc', borderTopRightRadius:50, flex:1}}>

                
                  <TouchableOpacity onPress={()=>navigation.navigate('signin')} style={[styles.button,{marginTop:'20%'}]}>
                      <Text style={styles.textBtn}>REGISTER</Text>
                  </TouchableOpacity>  
                
                </View>
              
            
            
            </View>
          
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#dcdcdc'
    },

    header:{
        flex:2.5,
        backgroundColor:'#ff3333',
        borderBottomLeftRadius:50

    },
    title:{ 
        fontSize:40, 
        color:'#dcdcdc', 
        alignSelf:'center', 
        marginTop:'30%', 
        fontWeight:'bold', 
        justifyContent:'center',
    },
    input:{ 
        height: 40,
        width:'80%', 
        alignSelf:'center',
        borderColor: '#dcdcdc', 
        backgroundColor:'#dcdcdc', 
        borderWidth: 1 ,
        borderRadius:5,  
        paddingLeft:'3%'
        },
    body:{
        flex:1
    },
    button:{ 
     //   marginTop:'10%', 
        padding:'3%',
        width:'60%',
         backgroundColor:'#ff3333', 
         borderRadius:50, 
         alignSelf:'center'
        },
        textBtn:{
            fontSize:20, 
            color:'#dcdcdc',
            alignSelf:'center', 
            fontWeight:'700'
        }, 
        social:{
            backgroundColor:'#dcdcdc',
            alignItems:'center', 
            flexDirection:'row', 
            justifyContent:'space-between',
            paddingLeft:30,
            paddingRight:30
        },
})

export default SignUp;