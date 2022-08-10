import React, {useState} from 'react';
import {View, Text, StyleSheet, Image,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {RESTAURANT} from '../model/Data';
import Card from './Card';
const Restaurant =({navigation})=>{


 const renderItem=({item})=>{
     return(
         <Card
         
         itemData={item}
         onPress={()=>navigation.navigate('RestaurantDetails')}
         />
     )
 }

    return(
        <View style={styles.container}>
           {/*Header Section*/}
           <View style={styles.header}>
               <Image 
               source={require('../assets/restaurans/banner.jpg')}
               resizeMode='cover'
               style={{
                   width:'100%',
                   height:'100%',
                }}
        />
        <View style={styles.textView}>
        <Text style={styles.title}>BEST...</Text>
        <Text style={styles.text}>RESTAURANTS</Text>
        
        <View style={{flexDirection:'row',top:'17%', alignSelf:'center'}}>

        <Icon name="restaurant-menu"  style={{padding:10,}} color='#cdcdcd' size={40} />
        <AntDesign style={{padding:10,}} name="home" color='#ff3333' size={40} />
        <MaterialCommunityIcons name="food"  style={{padding:10}} color='#cdcdcd' size={40} />
        </View>
        </View>
           </View>

           <View style={styles.body}>
               <FlatList
               showsHorizontalScrollIndicator={false}
               data={RESTAURANT}
               keyExtractor={item=>item.id}
               renderItem={renderItem}
               />
           </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        background:'#ff3333'
    },
    header:{
        flex:0.5,
       
    }, textView:{
        position:'absolute',
        height:'100%',
        bottom:'0%',
        left:'0%',
        right:'0%',
        backgroundColor: "rgba(0,0,0,0.6)",
      // borderRadius:15,
     
    },
    title:{
        fontSize:25,
         color:'#cdcdcd',
         paddingLeft:1,  
         fontFamily:'cursive',
         fontWeight:'bold',
         marginTop:20,
         borderBottomColor:'#ff3333', 
         width:'50%', 
         alignSelf:'center', 
         borderBottomWidth:2
    },
    text: {
        color: "#ff3333",
        fontSize: 30,
        fontWeight: "bold",
        alignSelf:'center',
       },
    body:{
        flex:1
    }
})

export default Restaurant;