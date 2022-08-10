import React from 'react';
import {View,Text, StyleSheet, Box ,Image} from 'react-native';

const Shop=()=>{
    return(
        <View   style={{flex:1, backgroundColor:'white'}}>
          
            <Image
             source={require('../assets/restaurans/banner.jpg')}
              resizeMode="cover"
              style={{height:100, width:'100%', borderBottomLeftRadius:50}}
            />
           
        <View style={{flex:1,}}>
        <Image
             source={require('../assets/restaurans/banner.jpg')}
              resizeMode="cover"
              style={{ ...StyleSheet.absoluteFillObject,
                  height:100, width:'100%', }}
            />
            <View 
            style={{borderRadius:50,
            borderTopLeftRadius:0,
        backgroundColor:'#fff',
    flex:1}}
            
            />
        </View>
        </View >
       
    )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        borderStartColor:'white',
        alignItems:'center',
        justifyContent:'center'
        
    }
})

export default Shop;

