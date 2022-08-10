import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

const Favourite=()=>{
    return(
        <View style={styles.container}>
            <Text>Favourite Screen</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        borderStartColor:'white',
        alignItems:'center',
        justifyContent:'center'
        
    }
})

export default Favourite;

