import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from './Splash';
import SignIn from './SignIn';
import SignUp from './SignUp';


const RootStack = createStackNavigator();

const Authentication =({})=>{
    return(
    <RootStack.Navigator headerMode="none">
        <RootStack.Screen name="splash" component={Splash}/>
        <RootStack.Screen name="signin" component={SignIn}/>
        <RootStack.Screen name="signup" component={SignUp}/>
    </RootStack.Navigator>
    )
}

export default Authentication;