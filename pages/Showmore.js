import React from 'react';
import {View, Text, StyleSheet,Dimensions, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get("window");


const Showmore=()=>{

    return(
        <View style={styles.container}>
         <View style={styles.header}>

        <View style={{flexDirection:'row'}}> 
         <TouchableOpacity onPress={()=>{}} style={styles.icon}>
         
         <View style={{width:63, height:63}}>
             <LinearGradient  colors={["#dcdcdc","#dcdcdc"]}
             style={styles.background}>
              <FontAwesome5 name='tshirt' size={35} color="#ff3333"/>
             </LinearGradient>
          
         </View>
            <Text style={styles.text}>T-Shirt</Text>
       </TouchableOpacity>

       <TouchableOpacity onPress={()=>{}} style={styles.icon}>
         
         <View style={{width:63, height:63}}>
             <LinearGradient colors={["#dcdcdc","#dcdcdc"]}
             style={styles.background}>
              <Fontisto name='wallet' size={35} color="#ff3333"/>
             </LinearGradient>
          
         </View>
            <Text style={styles.text}>Wallets</Text>
       </TouchableOpacity>

       <TouchableOpacity onPress={()=>{}} style={styles.icon}>
         
         <View style={{width:63, height:63}}>
             <LinearGradient colors={["#dcdcdc","#dcdcdc"]}
             style={styles.background}>
              <MaterialCommunityIcons name='shoe-formal' size={35} color="#ff3333"/>
             </LinearGradient>
          
         </View>
            <Text style={styles.text}>Boots</Text>
       </TouchableOpacity> 
       <TouchableOpacity onPress={()=>{}} style={styles.icon}>
         
         <View style={{width:63, height:63}}>
             <LinearGradient colors={["#dcdcdc","#dcdcdc"]}
             style={styles.background}>
              <FontAwesome5 name='glasses' size={35} color="#ff3333"/>
             </LinearGradient>
          
         </View>
            <Text style={styles.text}>Glasses</Text>
       </TouchableOpacity>

         </View>

         <View style={{flexDirection:'row'}}> 
         <TouchableOpacity onPress={()=>{}} style={styles.icon}>
         
         <View style={{width:63, height:63}}>
             <LinearGradient colors={["#dcdcdc","#dcdcdc"]}
             style={styles.background}>
             <MaterialCommunityIcons name='purse' size={35} color="#ff3333"/>
             </LinearGradient>
          
         </View>
            <Text style={styles.text}>Purses</Text>
       </TouchableOpacity>

       <TouchableOpacity onPress={()=>{}} style={styles.icon}>
         
         <View style={{width:63, height:63}}>
             <LinearGradient colors={["#dcdcdc","#dcdcdc"]}
             style={styles.background}>
              <MaterialCommunityIcons name='diamond-stone' size={35} color="#ff3333"/>
             </LinearGradient>
          
         </View>
            <Text style={styles.text}>Diamons</Text>
       </TouchableOpacity>

       <TouchableOpacity onPress={()=>{}} style={styles.icon}>
         
         <View style={{width:63, height:63}}>
             <LinearGradient colors={["#dcdcdc","#dcdcdc"]}
             style={styles.background}>
              <MaterialCommunityIcons name='shoe-heel' size={35} color="#ff3333"/>
             </LinearGradient>
          
         </View>
            <Text style={styles.text}>Shoes</Text>
       </TouchableOpacity> <TouchableOpacity onPress={()=>{}} style={styles.icon}>
         
         <View style={{width:63, height:63}}>
             <LinearGradient colors={["#dcdcdc","#dcdcdc"]}
             style={styles.background}>
              <FontAwesome5 name='chair' size={35} color="#ff3333"/>
             </LinearGradient>
          
         </View>
            <Text style={styles.text}>Chairs</Text>
       </TouchableOpacity>

         </View>

         <View style={{flexDirection:'row'}}> 
         <TouchableOpacity onPress={()=>{}} style={styles.icon}>
         
         <View style={{width:63, height:63}}>
             <LinearGradient colors={["#dcdcdc","#dcdcdc"]}
             style={styles.background}>
              <FontAwesome5 name='blender-phone' size={35} color="#ff3333"/>
             </LinearGradient>
          
         </View>
            <Text style={styles.text}>blenders</Text>
       </TouchableOpacity>

       <TouchableOpacity onPress={()=>{}} style={styles.icon}>
         
         <View style={{width:63, height:63}}>
             <LinearGradient colors={["#dcdcdc","#dcdcdc"]}
             style={styles.background}>
              <MaterialCommunityIcons name='lamp' size={35} color="#ff3333"/>
             </LinearGradient>
          
         </View>
            <Text style={styles.text}>Lights</Text>
       </TouchableOpacity>

       <TouchableOpacity onPress={()=>{}} style={styles.icon}>
         
         <View style={{width:63, height:63}}>
             <LinearGradient colors={["#dcdcdc","#dcdcdc"]}
             style={styles.background}>
              <MaterialCommunityIcons name='glass-cocktail' size={35} color="#ff3333"/>
             </LinearGradient>
          
         </View>
            <Text style={styles.text}>Cups</Text>
       </TouchableOpacity> <TouchableOpacity onPress={()=>{}} style={styles.icon}>
         
         <View style={{width:63, height:63}}>
             <LinearGradient colors={["#dcdcdc","#dcdcdc"]}
             style={styles.background}>
              <MaterialCommunityIcons name='silverware-fork-knife' size={35} color="#ff3333"/>
             </LinearGradient>
          
         </View>
            <Text style={styles.text}>Kitchen-Items</Text>
       </TouchableOpacity>

         </View>

        
         <View style={{flexDirection:'row'}}> 
         <TouchableOpacity onPress={()=>{}} style={styles.icon}>
         
         <View style={{width:63, height:63}}>
             <LinearGradient colors={["#dcdcdc","#dcdcdc"]}
             style={styles.background}>
              <FontAwesome5 name='luggage-cart' size={35} color="#ff3333"/>
             </LinearGradient>
          
         </View>
            <Text style={styles.text}>Luggage</Text>
       </TouchableOpacity>

       <TouchableOpacity onPress={()=>{}} style={styles.icon}>
         
         <View style={{width:63, height:63}}>
             <LinearGradient colors={["#dcdcdc","#dcdcdc"]}
             style={styles.background}>
              <MaterialCommunityIcons name='bag-personal' size={35} color="#ff3333"/>
             </LinearGradient>
          
         </View>
            <Text style={styles.text}>Bags</Text>
       </TouchableOpacity>

       <TouchableOpacity onPress={()=>{}} style={styles.icon}>
         
         <View style={{width:63, height:63}}>
             <LinearGradient colors={["#dcdcdc","#dcdcdc"]}
             style={styles.background}>
              <FontAwesome5 name='clock' size={35} color="#ff3333"/>
             </LinearGradient>
          
         </View>
            <Text style={styles.text}>Wall-Clocks</Text>
       </TouchableOpacity> 
       <TouchableOpacity onPress={()=>{}} style={styles.icon}>
         
         <View style={{width:63, height:63}}>
             <LinearGradient colors={["#dcdcdc","#dcdcdc"]}
             style={styles.background}>
              <FontAwesome5 name='plug' size={35} color="#ff3333"/>
             </LinearGradient>
          
         </View>
            <Text style={styles.text}>Electrical</Text>
       </TouchableOpacity>

         </View>
         </View> 
          <View style={styles.body}>
              <View style={{  marginTop:'3%',flexDirection:'row', justifyContent:'space-between',
               borderRadius:30,alignItems:'center',marginLeft:30, marginRight:30}}>
                  <View>
                <TouchableOpacity style={styles.bodyIcon}>
                    <FontAwesome name='windows' size={35} color="darkgray" />
                </TouchableOpacity>
                <Text style={styles.txt}>WINDOWS</Text>
                </View>
               <View>
               <TouchableOpacity style={styles.bodyIcon}>
                   <FontAwesome name='apple' size={35} color="darkgray" />
                </TouchableOpacity>
                <Text style={styles.txt}>@APPLE</Text>
                </View>
                <View>
              <TouchableOpacity style={styles.bodyIcon}>
                  <Fontisto name='android' size={35} color="darkgray" />
                </TouchableOpacity>
                <Text style={styles.txt}>ANDROID</Text>
                </View>
              </View>

              <View style={{  marginTop:'3%',flexDirection:'row', justifyContent:'space-between',
               borderRadius:30,alignItems:'center',marginLeft:30, marginRight:30}}>
                <View>
                <TouchableOpacity style={styles.lastIcon}>
                    <FontAwesome name='linux' size={35} color="darkgray" />
                </TouchableOpacity>
                <Text style={styles.txt}>LINUX</Text>
                </View>
                <View>
                <TouchableOpacity style={styles.lastIcon}>
                    <FontAwesome name='amazon' size={35} color="darkgray" />
                </TouchableOpacity>
                <Text style={styles.txt}>AMAZON</Text>
                </View>
                <View>
              <TouchableOpacity style={styles.lastIcon}>
                  <FontAwesome name='globe' size={35} color="darkgray" />
                </TouchableOpacity>
                <Text style={styles.txt}>GLOBEL</Text>
                </View>
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
        flex:1.1,
        backgroundColor:'#dcdcdc',
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
        borderBottomColor:'#ff3333',
        borderBottomWidth:4
       
    },
    icon:{ 
        flex: 1, 
        alignItems:'center', 
        marginTop:'2%',
    },
    text:{
        marginTop:8, 
        fontSize:14, 
        color:'#000',
         fontWeight:'600'
        },
        background:{
            flex:1, 
            alignItems:"center",
             justifyContent:'center',
             borderRadius:20,
             borderColor:'#ff3333',
             borderWidth:2
            },
    body:{
        flex:0.5,
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50, 
      
    },
    bodyIcon:{
        borderRadius:10, 
      //  borderBottomRightRadius:30,
      //  borderBottomRightRadius:50, 
        borderColor:'darkgray',   
        alignItems:"center",
        justifyContent:'center',
        borderWidth:3,
        width:60, 
        height:60
    },
    lastIcon:{
        borderRadius:10, 
      //  borderbottomLeftRadius:30,
      //  borderTopRightRadius:50, 
        borderColor:'darkgray',   
        alignItems:"center",
        justifyContent:'center',
        borderWidth:3,
        width:60, 
        height:60
    },
    txt:{
        marginTop:2, 
        fontSize:14, 
        color:'darkgray',
         fontWeight:'700',
         alignSelf:'center'
        },
})

export default Showmore;