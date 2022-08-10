import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import {BEVERAGE} from '../model/Data';

const Beverage =()=>{
       
    const renderItem =({item})=>{
        return(
            <View style={styles.flatview}>
                <Image
                resizeMode="cover"
                source={item.image}
                style={styles.image}
                
                />
                <Text style={styles.textName}>
                     {item.name}</Text>
            </View>
        )
    }


    return(
        <View style={styles.container}>
           <View style={styles.header}>
            <ImageBackground
            source={require('../assets/beverage/banner.jpg')}
            style={{width:'100%', height:'100%'}}
            >
            <View style={{backgroundColor:'rgba(0,0,0,0.5)', flex:1}}>
                <View style={{marginTop:'5%', paddingLeft:10,}}>
               <Text style={{fontSize:30, fontWeight:'bold', color:'#ff3333',}}>TRENDS</Text>
               <Text style={{fontWeight:'bold', fontSize:40, color:'#cdcdcd',}}>DRINKS...</Text>
               </View>
               <FlatList 
                 horizontal
                 showsHorizontalScrollIndicator={false}
                 data={BEVERAGE}
                 keyExtractor={item=>item.id}
                 renderItem={renderItem}
                />
                 
                <View style={styles.miniContainer}>
                  <View style={{flex:2,backgroundColor:'rgba(205,205,205,0.4)', borderRadius:20,margin:10, }}>
                  <Image 
                   source={require('../assets/beverage/cola.png')}
                   resizeMode="cover"
                   style={{width:'70%', height:'80%', marginLeft:15, bottom:'8%',}}
                  />
                  <Text style={{fontSize:35, fontWeight:'bold', color:'#000', paddingLeft:5, position:'absolute', top:'75%'}}>COKE...</Text>
                  <Text style={{fontSize:25, fontWeight:'bold', color:'red', paddingLeft:5, marginTop:25}}>
                    Grab it Now</Text>

                 </View> 
                 <View style={{flex:0.9,margin:10,}}>
                   <TouchableOpacity style={{backgroundColor:'rgba(255,255,255,0.9)', height:'18%', width:'70%', borderRadius:15}}>
                    <Image
                      source={require('../assets/beverage/starbucks.png')}
                      resizeMode="cover"
                      style={{width:70, height:70, bottom:'35%',marginLeft:-10}}
                    />  
                    </TouchableOpacity>

                     <TouchableOpacity style={styles.drinkList}>
                    <Image
                      source={require('../assets/beverage/pepsi.png')}
                      resizeMode="cover"
                      style={{width:70, height:70, bottom:'35%',marginLeft:-10}}
                    />  
                    </TouchableOpacity>    

                    <TouchableOpacity style={[styles.drinkList,{backgroundColor:'rgba(148,0,211,0.9)'}]}>
                    <Image
                      source={require('../assets/beverage/chatime.png')}
                      resizeMode="cover"
                      style={{width:70, height:70, bottom:'35%',marginLeft:-10}}
                    />  
                    </TouchableOpacity>  
                     
                    <TouchableOpacity style={[styles.drinkList,{backgroundColor:'rgba(255,247,0,0.9)'}]}>
                    <Image
                      source={require('../assets/beverage/miranda.png')}
                      resizeMode="cover"
                      style={{width:70, height:70, bottom:'35%',marginLeft:-10}}
                    />  
                    </TouchableOpacity>  
                    
                </View> 

            </View>
           
               
                
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
        flex:1
    },
    textName:{
        fontSize:16, 
        fontWeight:'bold', 
        color:'#cdcdcd',
        marginTop:'8%', 
        alignSelf:'center', 
    },
    image:{
        width:100, 
        height:100, 
        borderRadius:50,
        borderColor:'#ff3333',
         borderWidth:3 
        },

    flatview:{
      //  marginTop:5, 
        paddingHorizontal: 5,
      },
      miniContainer:{
          height:'55%',
          width:'100%',
          position:'absolute', 
          top:'44%', 
          flexDirection:'row',
          justifyContent:'space-between'
         },
         drinkList:{
             backgroundColor:'rgba(0,0,255,0.9)', 
             height:'18%',
              width:'70%', 
              borderRadius:15, 
              marginTop:'24%'}
})

export default Beverage;