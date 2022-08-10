import React, {useState} from 'react';
import {View,Text, TouchableOpacity, Dimensions, StyleSheet,Image, FlatList} from 'react-native';
import icons from '../constant/icons';
import images from '../constant/images';
import { LinearGradient } from 'expo-linear-gradient';


const { width, height } = Dimensions.get("window");

const MenuOption=({icon, label,onPress,bgColor})=>{
    return(
        <TouchableOpacity onPress={onPress}
        style={{ flex: 1, alignItems: 'center',}}>
         
         <View style={{width:70, height:70}}>
             <LinearGradient colors={bgColor}
             style={{flex:1, alignItems:"center", justifyContent:'center',borderRadius:50}}>
               <Image 
               source={icon} resizeMode="cover"
               style={{width:55, height:40,}}
               />
             </LinearGradient>
          
         </View>
    <Text style={{marginTop:8, fontSize:14, color:'#000', fontWeight:'600'}}>{label}</Text>



        </TouchableOpacity>

    )
}





const Home=({navigation})=>{
const [data, setData] = useState([
    {
        id:0,
        name:'Big Sale',
        img:images.banner3
    },
    {
        id:1,
        name:'Men Fashion',
        img:images.banner4
    },
    {
        id:2,
        name:'Women Style',
        img:images.banner5
    },
    {
        id:3,
        name:'Kids Smart',
        img:images.banner6
    },
    {
        id:4,
        name:'Black Friday',
        img:images.banner7
    },
])

const renderItem =({item})=>{
  
    return(
        <View style={{justifyContent:'center',alignItems:'center', marginHorizontal:8, marginBottom:15}}>
            <Image
            source={item.img}
            resizeMode="cover"
            style={{
                width:width * 0.30,
                height:'85%',
                borderRadius:20
            }}
            />
            <Text style={{marginTop:7,fontSize:12}}>{item.name}</Text>

        </View>
    )
}

    return(
        <View style={styles.container}>
            {/*Header Section*/}
           <View style={styles.header}>
               <Image
               source={require('../assets/images/banner1.jpg')}
               resizeMode={"cover"}
               style={{ 
                width:'100%',
               height:'100%', borderRadius:20}}
               />
           </View>
             
                       {/*Header Body*/}
            <View style={{flex:1, justifyContent:'center'}}>
           <View style={styles.body}>
             
              <MenuOption
              icon={icons.restaurant}
              bgColor={['#dcdcdc', '#dcdcdc']}
              label="Restaurants"
              onPress={()=>navigation.navigate('Restaurant',{title:'Restaurants'})}
              
              />
               <MenuOption
              icon={icons.car}
              bgColor={['#dcdcdc', '#dcdcdc']}
              label="Cars"
              onPress={()=>navigation.navigate('car',{title:'Luxury Cars'})}
              
              />
               <MenuOption
              icon={icons.hotel}
              bgColor={['#dcdcdc', '#dcdcdc']}
              label="Hotels"
              onPress={()=> navigation.navigate('Hotel',{title:'Comfort Places'})}
              
              />
           
           </View>
           <View style={[styles.body,{marginTop:30}]}>
             
             <MenuOption
             icon={icons.drink}
             bgColor={['#dcdcdc', '#dcdcdc']}
             label="Beverage"
             onPress={()=> navigation.navigate('beverage',{title:' Energy Drinks'})}
             
             />
              <MenuOption
             icon={icons.shop}
             bgColor={['#dcdcdc', '#dcdcdc']}
             label="Shopping"
             onPress={()=> navigation.navigate('store')}
             
             />
              <MenuOption
             icon={icons.showmore}
             bgColor={['#dcdcdc', '#dcdcdc']}
             label="Showmore"
             onPress={()=>navigation.navigate('show')}
             
             />
          
          </View>
           </View>

               {/*Footer Section*/}
           <View style={styles.footer}>
            <Text style={{marginTop:15,fontSize:18, fontWeight:'800', color:'#ff3333', padding:8}}>SHOP NOW</Text>
            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={renderItem}
            keyExtractor={item=>item.id}
            
            />
            
            
            </View>


        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
      backgroundColor:'#fff'
        
    }, 
    header:{
        flex:1,
        padding:10,
     },
    body:{
        flex:1,
        marginTop:8,
        flexDirection:'row',
    },
    footer:{
        flex:1,
        marginTop:20


    }
})

export default Home;

