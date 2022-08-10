import React from 'react';
import {View, Text, StyleSheet, ImageBackground,TouchableOpacity, Image, FlatList} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {HOTELS} from '../model/Data';
import HotelCard from './HotelCard';

const Hotels =({navigation})=>{

    const renderItem=({item})=>{
        return(
            <HotelCard
            itemData={item}
            onPress={()=>{}}
            />
        )
    }
    return(
        <View style={styles.container}>
            {/*Header Section*/}
           <View style={styles.header}>
               <ImageBackground 
               source={require('../assets/hotels/bannerr.jpg')}
               resizeMode="cover"
               style={{width:'100%', height:'100%'}}
               >
               <View style={{backgroundColor: "rgba(0,0,0,0.6)", flex:1,}}>
               <TouchableOpacity style={{padding:20}} onPress={() => navigation.goBack()} >
                <FontAwesome name="long-arrow-left" size={25} color="#fff"/>
              </TouchableOpacity>

              <View style={{ justifyContent:'center', alignItems:'center'}}>
                  <Text style={{fontSize:40, fontWeight:'700', color:'#fff',}}>HOTELS</Text> 
                  </View>
              </View> 
             
            </ImageBackground>
           </View>
         


           {/*Body Section*/}
           <View style={styles.body}>
               <ImageBackground
               source={require('../assets/hotels/Las.jpg')}
               resizeMode="cover"
               style={styles.backGround}
               >
           <View style={{backgroundColor:"rgba(255,255,255,0.5)", flex:1,}}>
              
               
            <View style={styles.viewIcon}>
            <TouchableOpacity style={styles.icon}>
                  <Text style={styles.textIcon}>Studio</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.icon}>
                  <Text style={styles.textIcon}>Deplux</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.icon}>
                  <Text style={styles.textIcon}>Suite</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.icon}>
                  <Text style={styles.textIcon}>Flat</Text>
              </TouchableOpacity>
              </View>
               

               <FlatList 
                showsHorizontalScrollIndicator={false}
                data={HOTELS}
                keyExtractor={item=>item.id}
                renderItem={renderItem}
               
               
               />
              </View>
             </ImageBackground>  
           </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
      
    }, 

    header:{
        flex:1,
    },

    body:{
        flex:2,
        marginTop:-40,
     }, 
    backGround:{ 
    width:'100%', 
    height:'110%', 
    overflow:'hidden',
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    marginTop:-20, 
    },
    icon:{
        width:80, 
        height:55,
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:'#cdcdcd',
        borderRadius:10, 
    
},
textIcon:{
    fontSize:15, 
    fontWeight:'800', 
    color:'#ff3333', 
    alignSelf:'center'
   },
   viewIcon:{
    marginTop:'7%', 
    flexDirection:'row', 
    justifyContent:'space-around', 
    borderBottomWidth:2,
    paddingBottom:10,
    paddingLeft:10,
    paddingRight:10,
    borderBottomColor:'#cdcdcd'
},
})


export default Hotels;