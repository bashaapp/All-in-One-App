import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Shop from '../screens/Shop';
import Favourite from '../screens/Favourite';
import Restaurant from '../pages/Restaurant';
import Cars from '../pages/Cars';
import Hotels from '../pages/Hotel'; 
import Beverage from '../pages/Beverage';
import Store from '../pages/store';
import Showmore from '../pages/Showmore';


const HomeStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const Mainstack=()=>{
    return (
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#fff"
          inactiveColor="#A8A8A8"
          barStyle={{backgroundColor:'#ff3333'}}
         
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: '',
              
              
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={30} />
              ),
            }}
          />
          <Tab.Screen
            name="Shop"
            component={Shop}
            options={{
              tabBarLabel: '',
              tabBarIcon: ({ color }) => (
                <FontAwesome name="shopping-cart" color={color} size={30} />
              ),
            }}
          />
          <Tab.Screen
            name="Favourite"
            component={Favourite}
            options={{
              tabBarLabel: '',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="heart-multiple" color={color} size={30} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: '',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={30} />
              ),
            }}
          />
        </Tab.Navigator>
      );
}

const HomeScreen = ({navigation})=>{
    return(
        <HomeStack.Navigator >
            <HomeStack.Screen name="Home" component={Home} options={{
      title:'Home',
      headerTitleStyle:{
        alignSelf:'center'
      },
     headerLeft:()=>(
      <Icon.Button
      name="ios-menu"
      size={25}
      color="#000"
      backgroundColor='#fff'
      onPress={() => navigation.openDrawer()}
       />
     ),
     headerRight:()=>(
       <Icon.Button name="ios-search" size={25} color="#000" backgroundColor="#fff"/>
     )
    }}/>
    <HomeStack.Screen 
    name="Restaurant" component={Restaurant} options={({route})=>({
      title: route.params.title,
      headerTintColor:'#fff',
    
      headerTitleStyle:{marginLeft:50,fontWeight:'600',},
      headerStyle:{backgroundColor:'#ff3333'}
    })}
    
    />
    <HomeStack.Screen 
    name="car" component={Cars} options={({route})=>({
      title:route.params.title,
      headerTintColor:'#fff',
      headerTitleStyle:{marginLeft:50, fontWeight:'600'},
      headerStyle:{backgroundColor:'#ff3333'}
    })}
    
    
    />
    <HomeStack.Screen
    name="Hotel" component={Hotels} options={({route})=>({
      title:route.params.title,
      headerTitleStyle:{marginLeft:50, fontWeight:'600'},
      headerShown:false
    })}
    
    />
    <HomeStack.Screen 
    name="beverage" component={Beverage} options={({route})=>({
      title:route.params.title,
      headerTitleStyle:{marginLeft:50, fontWeight:'600'},
      headerShown:false
    })}
    
    />
    <HomeStack.Screen 
    name="store" component={Store}
    options={{
      headerShown:false
    }}
    
    />
    <HomeStack.Screen name="show" component={Showmore} 
    options={{headerShown:false}}
    />
        </HomeStack.Navigator>
    )
}




export default Mainstack;

