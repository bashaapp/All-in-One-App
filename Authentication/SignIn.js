import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import {AuthContext} from '../component/Context';
import {Users} from '../model/users';

const SignIn =({navigation})=>{

    const [data, setData]= React.useState({
        username:'',
        password:'',
        check_textInput:false,
        secureTextEntry:true,
        isValidUser:true,
        isValidPassword:true
    })
  const {signIn} = React.useContext(AuthContext)

 
    const textInput =(val)=>{
        if(val.trim().length >= 4){
            setData({
                ...data, 
                username:val,
                check_textInput:true,
                isValidUser:true
            });

        }else{
            setData({
                ...data, 
                username:val,
                check_textInput:false,
                isValidUser:false
            });

        }
    } 
    const handlePassword=(val)=>{
        if(val.trim().length >= 8){
        setData({
            ...data,
            password:val,
            isValidPassword:true
        })
    } else{
        setData({
            ...data,
            password:val,
            isValidPassword:false
        })
    }
    }

    const toggle=()=>{
        setData({
            ...data,
            secureTextEntry:!data.secureTextEntry
        })
    }
 const handleValid=(val)=>{
     if(val.trim().length >4){
         setData({
             ...data,
            isValidUser:true
         })
     }else{
         setData({
             ...data,
             isValidUser:false
         })
     }
 }
 const loginHandle = (userName, password)=>{
   const foundUser = Users.filter(item =>{
       return userName == item.username && password == item.password
   })

   if (data.username.length == 0 || data.password.length == 0){
       alert('Wrong Input..! Username or Password Field is Empty',[
       {text:'Okay'}
       ]);
       return;
   }
   if (foundUser.length == 0){
    alert('Inavlid User..! Username or Password is Incorrect',[
    {text:'Okay'}
    ]);
    return;
}
   signIn(foundUser)
}
    
    return(
        <Animatable.View 
        animation='fadeInRight'
        style={styles.container}>
            <View style={styles.header}>
                <Image
                source={require('../assets/images/user.png')}
                resizeMode='cover'
                style={{
                    width:'40%', height:'40%', borderRadius:50, alignSelf:'center', marginTop:'15%'
                }}
                
                
                />
                <Text style={styles.title}>LOGIN</Text>

                <View style={{marginTop:'12%'}}>
                  <View style={{flexDirection:'row', justifyContent:'center'}}>
                    <FontAwesome style={{ position:'absolute', left:'12%',alignSelf:'center',}}
                     name='user-o' color='#05375a' size={20}
                    />
                  <TextInput
                   style={styles.input}
                   placeholder="Your Name"
                   placeholderTextColor = "#9a73ef"
                   autoCapitalize = "none"
                   onChangeText={(val)=>textInput(val)}
                   onEndEditing={(e)=>handleValid(e.nativeEvent.text)}
                   
                  
                  /> 
                  {data.check_textInput ?
                  <Feather
                   style={{ position:'absolute', right:'12%',alignSelf:'center',}}
                  name="check-circle"
                  color='green'
                  size={20}
                  /> :null
                }
                  </View>
                  {data.isValidUser ? null :
                  <Animatable.View animation='fadeInLeft'>
                      <Text  style={{color:'#dcdcdc', alignSelf:'center'}}>Username Muse be More than 4 Characters...!</Text>
                  </Animatable.View>
                 }
                  <View style={{marginTop:5,flexDirection:'row', justifyContent:'center'}}>
                    <FontAwesome style={{ position:'absolute', left:'12%',alignSelf:'center',}}
                     name='lock' color='#05375a' size={20}
                    />
                  <TextInput
                   style={styles.input}
                   placeholder="Your Password"
                   secureTextEntry={data.secureTextEntry ? true : false}
                   placeholderTextColor = "#9a73ef"
                   onChangeText={(val)=>handlePassword(val)}
                   
                  
                  /> 
                  <TouchableOpacity onPress={toggle}>
                     {data.secureTextEntry ?
                  <Feather
                   style={{ position:'absolute', right:'12%',justifyContent:'center', top:8, paddingRight:10}}
                  name="eye-off"
                  color='grey'
                  size={20}
                  /> 
                  :
                  <Feather
                   style={{ position:'absolute', right:'12%',alignSelf:'center', top:8,paddingRight:10}}
                  name="eye"
                  color='grey'
                  size={20}
                  /> 
                     }
                  </TouchableOpacity>
                  </View>
                  {data.isValidPassword ? null
                   :
                  <Animatable.View animation='fadeInLeft'>
                      <Text style={{color:'#dcdcdc', alignSelf:'center'}}>Password Must be 8 Characters</Text>
                  </Animatable.View>
                  }

                </View>
            </View>

            <View style={styles.body}>
                <View style={{...StyleSheet.absoluteFillObject, backgroundColor:'#ff3333'}}/>
                <View style={{backgroundColor:'#dcdcdc', borderTopRightRadius:50, flex:1}}>

                  <TouchableOpacity style={styles.button} onPress={()=>loginHandle(data.username, data.password)}>
                      <Text style={styles.textBtn}>LOG-IN</Text>
                  </TouchableOpacity> 
                  <TouchableOpacity onPress={()=>navigation.navigate('signup')} style={[styles.button,{marginTop:'2%'}]}>
                      <Text style={styles.textBtn}>SIGN-UP</Text>
                  </TouchableOpacity>  
                
                </View>
              
            
            
            </View>
            <View style={styles.social}>
                <Entypo name="facebook" size={40}  color='blue'/>
                <Entypo name="instagram" size={40}  color='#34465d'/>
                <FontAwesome name="google-plus-square" size={43}  color='#ff3333'/>
                </View>
        </Animatable.View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#dcdcdc'
    },

    header:{
        flex:2,
        backgroundColor:'#ff3333',
        borderBottomLeftRadius:50

    },
    title:{ 
        fontSize:30, 
        color:'#dcdcdc', 
        alignSelf:'center', 
        marginTop:'1%', 
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
        borderRadius:50, 
        borderBottomColor:'red', 
       paddingLeft:'8%',
       outlineStyle: "none",
   
        },
    body:{
        flex:1
    },
    button:{ 
        marginTop:'10%', 
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

export default SignIn;