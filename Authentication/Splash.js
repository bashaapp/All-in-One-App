import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';


const Splash =({navigation})=>{
    return(
        <View style={styles.container}>
           <View style={styles.header}>
          
              <Animatable.Image 
        animation='slideInUp'
      
               source={require('../assets/images/splash.png')}
               resizeMode='cover'
               style={{height:'100%', width:'100%',position:'absolute',  shadowColor: "#000", 
               shadowOffset: {
                   width:5,
                   height: 8,
               },
              shadowOpacity: 0.3,
               shadowRadius: 11.14,
            }}
            />
             <Text style={styles.title}>WELCOME</Text>
              
           </View>


           <View style={styles.body}>
           
           <View  style={{...StyleSheet.absoluteFillObject,backgroundColor:'#ff3333',}}/>
           <View 
            style={{borderRadius:50,borderTopLeftRadius:0,backgroundColor:'#dcdcdc',flex:1, }}>
             
             <Image 
             
             source={require('../assets/images/logo.png')}
             resizeMode="cover"
             style={{width:'100%',  height:100,marginTop:'5%'}}
             
             />
             <TouchableOpacity onPress={()=>navigation.navigate('signin')}
             style={{backgroundColor:'#ff3333',marginTop:'5%', borderRadius:20, alignSelf:'center', width:'50%', height:'15%'}}
             >
              <Text style={{fontSize:25, fontWeight:'bold',  color:'#dcdcdc', alignSelf:'center'}}>Let's Start</Text>
             </TouchableOpacity>
              <Text style={{fontSize:15, alignSelf:'center', color:'#000', position:'absolute', bottom:10}}>AllinOne@bashamlan.com</Text>

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
        flex:3,
        backgroundColor:'#ff3333',
        borderBottomLeftRadius:50
    },
    title:{
        fontSize:70, 
        transform: [{ rotate: '90deg'}], 
        position:'absolute', 
        marginTop:'35%', 
        left:"-33%", 
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -10, height: 1},
        textShadowRadius: 10, 
        fontWeight:'bold', color:'#dcdcdc', 
},
    body:{
        flex:2
    }
})

export default Splash;