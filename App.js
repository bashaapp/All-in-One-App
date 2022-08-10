import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {View, ActivityIndicator} from 'react-native';

import DrawerContent from './screens/DrawerContent';
import Mainstack from'./navigation/Mainstack';
import Authentication from './Authentication/Authentication';
import {AuthContext} from './component/Context';

const Drawer = createDrawerNavigator();


const App=()=>{
  //const [isloading, setIsloading] = React.useState(true);
 // const [userToken, setUserToken] = React.useState(null);
 
const initialState ={
  isloading: true,
  userName: null,
  userToken:null,
}

const loginReducer = (prevState, action)=>{
  switch(action.type){
    case 'RETRIEVE_TOKEN':
    return{
      ...prevState,
      userToken:action.token,
      isloading:false,
    };
    case 'LOGIN':
      return{
        ...prevState,
        userName:action.id,
        userToken:action.token,
        isloading:false,
      };
      case 'LOGOUT':
        return{
          ...prevState,
          userName:null,
          userToken:null,
          isloading:false
        };
        case 'REGISTER':
          return{
            ...prevState,
            userName: action.id,
            userToken: action.token,
            isloading: false
          }
  }
}

const [loginState, dispatch] = React.useReducer(loginReducer, initialState)

  const authContext = React.useMemo(()=>({
    signIn:(foundUser)=>{
    
    const userToken = String(foundUser[0].userToken);
    const userName = foundUser[0].username;
    
    dispatch({type:'LOGIN', id: userName, token: userToken});
    },
    signOut:()=>{
     dispatch({type:'LOGOUT'})
    },
    signUp:()=>{
     setUserToken('basha');
     setIsloading(false);
    }
  }),[])
  useEffect(()=>{
    setTimeout(() => {
    
    dispatch({type:'REGISTER', token: 'all '})
      
    }, 1000);
  },[])
  if(loginState.isloading){
    return(
      <View style={{justifyContent:'center', alignItems:'center',flex:1}}>
        <ActivityIndicator size= 'large'/>
      </View>
    )
  }
  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      {loginState.userToken!= null ? (
         <Drawer.Navigator drawerContent= {props=> <DrawerContent {...props}/>}>
         <Drawer.Screen name="main" component={Mainstack} />
       </Drawer.Navigator>
      )
      :
       <Authentication />
      }
     

    </NavigationContainer>
    </AuthContext.Provider>
  );
}




export default App;
