import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Drawer } from 'react-native-paper';
import {AuthContext} from '../component/Context';

const DrawerContent =(props)=>{
    const {signOut} = React.useContext(AuthContext)
    return(
        <View style={styles.container}>
             <View style={styles.header}>
              <Image 
               source={require('../assets/images/profile.jpg')}
               style={styles.profile}
              />
              <Text style={styles.name}>Bashamlan Salem</Text>
              </View>

              <Drawer.Section style={{flex:1}}>
              <View  style={{...StyleSheet.absoluteFillObject,backgroundColor:'#ff3333',}}>
              <View 
            style={{ paddingTop:20,borderTopLeftRadius:50, borderBottomRightRadius:50,backgroundColor:'#dcdcdc',flex:1, }}>
              <DrawerItem
                 icon={()=>(
                     <Icon 
                     name="home-outline"
                     color="#000"
                     size={25}
                     />
                 )}
                 label='Home'
                 labelStyle={{color:'#000'}}
                 onPress={()=>{}}
                />
                  <DrawerItem
                 icon={()=>(
                     <Icon 
                     name="account-outline"
                     color="#000"
                     size={25}
                     />
                 )}
                 label='My Account'
                 labelStyle={{color:'#000'}}
                 onPress={()=>{}}
                />
                 <DrawerItem
                 icon={()=>(
                     <MaterialIcons
                     name="shopping-basket"
                     color="#000"
                     size={25}
                     />
                 )}
                 label='My Orders'
                 labelStyle={{color:'#000'}}
                 onPress={()=>{}}
                />
                  <DrawerItem
                 icon={()=>(
                     <Icon 
                     name="settings"
                     color="#000"
                     size={25}
                     />
                 )}
                 label='Settings'
                 labelStyle={{color:'#000'}}
                 onPress={()=>{}}
                />
                  <DrawerItem
                 icon={()=>(
                     <Icon 
                     name="account-check-outline"
                     color="#000"
                     size={25}
                     />
                 )}
                 label='Support'
                 labelStyle={{color:'#000'}}
                 onPress={()=>{}}
                />
                </View>
               
                </View>
                
              </Drawer.Section>
              <View style={{height:50, marginBottom:-10, bottom:5, backgroundColor:'#ff3333', borderTopLeftRadius:50,}}>
                <DrawerItem
                 icon={()=>(
                     <Icon 
                     name="exit-to-app"
                     color="#dcdcdc"
                     size={25}
                     />
                 )}
                 label='Sign Out'
                 labelStyle={{color:'#dcdcdc'}}
                 onPress={()=>{signOut()}}
                />
            </View>
         
             
             
         


          
            
           
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#dcdcdc',
       
    },
    header:{
        flex:0.3,
        backgroundColor:'#ff3333',
        borderBottomRightRadius:50
    },
    profile:{
        width:80,
        height:80,
        borderRadius:40,
        borderWidth:3,
        borderColor:'#000',
        padding:10,
        alignSelf:'center',
        marginTop:10
    },
    name:{
        color:'#dcdcdc',
        fontSize:20,
        fontWeight:'800',
        textAlign:'center',
        paddingVertical:10
    },
    drawerItem:{
       
        borderTopColor:"#000",
        borderTopWidth:1
    }
})

export default DrawerContent;