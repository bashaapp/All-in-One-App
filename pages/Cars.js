import React from 'react';
import {View, Text, StyleSheet, 
    ImageBackground,Image, 
    Dimensions, FlatList, 
    TouchableOpacity, ScrollView} from 'react-native';
import {DATA} from '../model/Data';
const { width, height } = Dimensions.get("window");
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Cars =()=>{

    const renderItem=({item})=>{
        return(
            <View style={{marginHorizontal:5, alignSelf:'baseline'}}>
                <Image 
                source={item.image}
                resizeMode="cover"
                style={{
                width:130,
                height:70,
               
                
            }}
                
                />
              <Text style={styles.carText}>{item.name}</Text>
            </View>
        )
    }
    return(
        <View style={styles.container}>
           <View style={styles.header}>
              
             <ImageBackground 
             source={require('../assets/cars/banner.jpg')}
             style={{
                 width:'100%',
                 height:'80%',
            }}>
                 <View style={{backgroundColor: "rgba(0,0,0,0.6)", flex:1, paddingLeft:10, padding:30}}>
                    <Image
                    source={require('../assets/cars/rolls.jpg')}
                    resizeMode="cover"
                    style={styles.image}
                    />
                     <Image
                    source={require('../assets/cars/mb.png')}
                    resizeMode="cover"
                    style={styles.image}
                    />
                     <Image
                    source={require('../assets/cars/land.jpg')}
                    resizeMode="cover"
                    style={styles.image}
                    />
                     <Image
                    source={require('../assets/cars/lexus.jpg')}
                    resizeMode="cover"
                    style={styles.image}
                    />
                 </View>
                 <View style={styles.title}>
                 <Text style={styles.text}>LUXURY CHOICE</Text>
                 <Text style={{fontSize:35, color:'#fff', fontWeight:'bold'}}>2020</Text>

                 <View style={{flexDirection:'row',alignSelf:'center', marginTop:5}}>
                 <Image source={require('../assets/cars/left.png')} 
                  style={{width:60, height:60, tintColor:'#cdcdcd'}}/>
                 <Image source={require('../assets/cars/car.png')} 
                 style={{marginLeft:10, marginRight:10, width:60, height:60, tintColor:'#fff'}}/>
                 <Image source={require('../assets/cars/right.png')} 
                 style={{width:60, height:60, tintColor:'#cdcdcd'}}/>
                 </View>
                 </View>
                </ImageBackground>
                <View style={{marginLeft:3, marginTop:15, flexDirection:'row',}}>
                    <Text style={{fontSize:16, fontWeight:'bold',paddingLeft:10, color:'#cdcdcd', borderRadius:20, width:'30%', backgroundColor:'#ff3333' }}>New Arrival</Text>
                </View>
             
           </View>

           {/*Body Section*/}

           <View style={styles.body}>
               
           <ScrollView>
               <FlatList
               horizontal
               showsHorizontalScrollIndicator={false}
               data={DATA}
               keyExtractor={item=>item.id}
               renderItem={renderItem}
               />
                    <View style={{ flexDirection:'row', alignSelf:'center', marginTop:10}}>
                     <TouchableOpacity style={styles.style} onPress={()=>{}}>
                      <FontAwesome name="heart-o" size={25} color='red' style={{padding:5}} />
                     <Image
                     source={require('../assets/cars/Fj2020.png')}
                     resizeMode="cover"
                     style={{width:130, height:70, marginBottom:'5%', alignSelf:'center',}}/>
                    <Text style={{fontSize:20, fontWeight:'bold', textAlign:'center', color:'#000',marginBottom:'8%'}}>FJ-2020</Text>
                    </TouchableOpacity>

                   <TouchableOpacity style={styles.style} onPress={()=>{}}>
                   <FontAwesome name="heart-o" size={25} color='red' style={{padding:5}} />
                     <Image
                     source={require('../assets/cars/Landc.png')}
                     resizeMode="cover"
                     style={{width:130, height:70, marginBottom:'5%', alignSelf:'center' }}/>
                    
                     <Text style={{fontSize:20, fontWeight:'bold', textAlign:'center', color:'#000',marginBottom:'8%'}}>LAND-2020</Text>
                     </TouchableOpacity>
                </View>

                <View style={{ flexDirection:'row', alignSelf:'center', marginTop:10}}>
                     <TouchableOpacity style={styles.style} onPress={()=>{}}>
                      <FontAwesome name="heart-o" size={25} color='red' style={{padding:5}} />
                     <Image
                     source={require('../assets/cars/Bugatti.png')}
                     resizeMode="cover"
                     style={{width:130, height:70, marginBottom:'5%', alignSelf:'center'}}/>
                    <Text style={{fontSize:20, fontWeight:'bold', textAlign:'center', color:'#000',marginBottom:'8%'}}>BUGATTI-2020</Text>
                    </TouchableOpacity>

                   <TouchableOpacity style={styles.style} onPress={()=>{}}>
                   <FontAwesome name="heart-o" size={25} color='red' style={{padding:5}} />
                     <Image
                     source={require('../assets/cars/Bm2020.png')}
                     resizeMode="cover"
                     style={{width:130, height:70, marginBottom:'5%', alignSelf:'center' }}/>
                    
                     <Text style={{fontSize:20, fontWeight:'bold', textAlign:'center', color:'#000',marginBottom:'8%'}}>BMW-2020</Text>
                     </TouchableOpacity>
                </View>

                <View style={{ flexDirection:'row', alignSelf:'center', marginTop:10}}>
                     <TouchableOpacity style={styles.style} onPress={()=>{}}>
                      <FontAwesome name="heart-o" size={25} color='red' style={{padding:5}} />
                     <Image
                     source={require('../assets/cars/Rollsc.png')}
                     resizeMode="cover"
                     style={{width:130, height:70, marginBottom:'5%', alignSelf:'center'}}/>
                    <Text style={{fontSize:20, fontWeight:'bold', textAlign:'center', color:'#000',marginBottom:'8%'}}>R-ROYCE-2020</Text>
                    </TouchableOpacity>

                   <TouchableOpacity style={styles.style} onPress={()=>{}}>
                   <FontAwesome name="heart-o" size={25} color='red' style={{padding:5}} />
                     <Image
                     source={require('../assets/cars/Bmw2020.png')}
                     resizeMode="cover"
                     style={{width:130, height:70, marginBottom:'5%', alignSelf:'center' }}/>
                    
                     <Text style={{fontSize:20, fontWeight:'bold', textAlign:'center', color:'#000',marginBottom:'8%'}}>BMW-2020</Text>
                     </TouchableOpacity>
                </View>
                   
                   </ScrollView>
               
           </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#cdcdcd'
    },
    
       
    header:{
        flex:1,
        
    },
    image:{
        width:'15%',
        height:'25%',
        borderRadius:40,
        borderColor:'#fff',
        borderWidth:1,
        marginBottom:5
     },
     title:{
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      bottom:'0%',
      left:'0%',
      right:'0%',
      paddingLeft:15
    },
    text:{
        fontSize:30, 
        color:'#fff', 
        fontWeight:'bold',
        borderBottomColor:'#ff3333', 
        width:'70%', 
        alignSelf:'center', 
        borderBottomWidth:2,
        marginTop:60
    },
    body:{
        flex:1,
        
    },
    carText:{
        fontSize:15,
        color:'#ff3333',
        fontWeight:'600',
        alignSelf:'center'
    },
    style:{ 
    borderRadius:10, 
    paddingHorizontal:10,
    borderWidth:0.5,
    borderColor:'#ff3333',
    borderRadius:10,
    height:'90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5, 
   
},
            
})

export default Cars;