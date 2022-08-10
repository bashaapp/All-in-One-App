import React from 'react';
import {View, Dimensions, Text, StyleSheet, 
    Image, TouchableOpacity, FlatList} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {STORE} from '../model/Data';
const {width, height} = Dimensions.get('window');

const Store = ()=>{

const renderItem=({item})=>{
    return(
        <TouchableOpacity style={styles.flatImg}>
             <FontAwesome name="heart-o" size={15} color='#000' style={{padding:3}} />
            <Image 
            source={item.image}
            resizeMode="contain"
            style={{width:100, height:100, }}
            />
            <Text style={{fontSize:15, fontWeight:'bold', color:'#000', alignSelf:'center', paddingTop:'4%',}}>
                {item.name}</Text>

        </TouchableOpacity>
    )
}    
    return(

        <View style={styles.container}>
            <View style={styles.header}>
               <Image 
               source={require('../assets/shop/banner1.png')}
               resizeMode="cover"
               style={{width: 0.50 * width, height: 0.28 * height, alignSelf:'center', marginTop:'2%'}}
               />
                
               <View style={{flexDirection:'row', position:'absolute', right:0, left:0, bottom:'10%'}}>
              
               <Text style={styles.text}>Series 6 GPS</Text>

               </View>
            </View>


           <View style={styles.footer}>
            <View  style={{...StyleSheet.absoluteFillObject,backgroundColor:'rgba(220,220,220,0.9)'}}/>
               <View style={styles.footerContent}>
                 <View style={{flexDirection:'row', justifyContent:'space-between',paddingLeft:'10%',paddingRight:'10%',height:'20%', width:'100%', marginTop:'3%', alignSelf:'center',}}>
                     <TouchableOpacity style={{backgroundColor:'rgba(220,220,220,0.9)', height:80, width:'28%', borderRadius:15}}>
                     <Image 
                     source={require('../assets/shop/watch.png')}
                     style={{height:80, width:80, alignSelf:'center'}}
                     resizeMode='cover'

                    />
                     </TouchableOpacity>
                     <TouchableOpacity style={{backgroundColor:'rgba(220,220,220,0.9)', height:80, width:'28%', borderRadius:15}}>
                     <Image 
                     source={require('../assets/shop/phones.png')}
                     style={{height:80, width:80, alignSelf:'center'}}
                     resizeMode='cover'

                    />
                     </TouchableOpacity>
                     <TouchableOpacity style={{backgroundColor:'rgba(220,220,220,0.9)', height:80, width:'28%', borderRadius:15}}>
                     <Image 
                     source={require('../assets/shop/headphone.png')}
                     style={{height:80, width:80, alignSelf:'center'}}
                     resizeMode='cover'

                    />
                     </TouchableOpacity>
                    
                     
                </View> 
                <FlatList
                 horizontal
                 showsHorizontalScrollIndicator={false}
                 data={STORE}
                 keyExtractor={item=>item.id}
                 renderItem={renderItem}
                
                /> 
                <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
                    
               <Text style={[styles.promo,{marginLeft:'3%'}]}>UP To 70% OFF</Text>
               <Text style={[styles.promo,{justifyContent:'flex-end', marginRight:'3%'}]}>All IN ONE</Text>
                </View>
                 <View style={styles.iconView}>
                     <TouchableOpacity style={styles.icon}>
               <Fontisto name="shopify" color="#000" size={40}/>
           </TouchableOpacity>
           <TouchableOpacity style={styles.icon}>
           <Fontisto name="mastercard" color="#000" size={30}/>
           </TouchableOpacity>
           <TouchableOpacity style={styles.icon}>
               <MaterialCommunityIcons name="truck-delivery" color="#000" size={40} style={{alignSelf:'center'}}/>
           </TouchableOpacity>
           <TouchableOpacity style={styles.icon}>
               <Octicons name="watch" color="#000" size={40}/>
           </TouchableOpacity>
           </View>
               </View>
              
           </View>
         

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"   
    },

    header:{
     height:0.30 * height,
        borderBottomRightRadius:75,
        backgroundColor:'rgba(220,220,220,0.9)',
       
    },
    text:{
        fontSize:25, 
        color:'#ffffff', 
        marginLeft:8, 
        fontWeight:'bold',
        borderRadius:20, 
        padding:2,
        backgroundColor:'rgba(0,0,0,0.7)'
    },
   footer:{
        flex:1,      
    },
    footerContent:{
        flex:1,
        backgroundColor:"#fff", 
        borderTopLeftRadius:75,
       
    },
    flatImg:{
        marginTop:'10%', 
        backgroundColor:'rgba(220,220,220,0.9)',
        padding:5, 
        borderRadius:20, 
        height:0.23 * height,
        marginHorizontal:10,
        marginStart:-2,
        
     },
     iconView:{
         flexDirection:'row', 
         justifyContent:'center',
         paddingLeft:'4%',
         paddingRight:'3%',
         height:'20%',
         width:'95%', 
         borderRadius:20, 
         marginBottom:'5%', 
         backgroundColor:'rgba(220,220,220,0.9)', 
         alignSelf:'center',
        },
        icon:{
            borderColor:'#000',
            borderWidth:1, 
            height:70, 
            width:'22%',
            margin:7,
            alignItems:'center', 
            justifyContent:'center', 
           borderTopLeftRadius:20,
           borderTopRightRadius:20,
           borderBottomRightRadius:50,
           borderBottomLeftRadius:50,
            shadowColor: "#000",
            shadowOffset: {
                width:0,
                height: 8,
            },
            shadowOpacity: 0.30,
            shadowRadius: 11.14,
            

        },
        promo:{
            fontSize:18,
            marginLeft:4, 
            fontWeight:'bold',
            borderRadius:20, 
            color:'rgba(220,220,220,0.9)',
            padding:2,
            backgroundColor:'rgba(0,0,0,0.7)',
            marginBottom:'8%',
            alignSelf:'center',
           
        }
})


export default Store;