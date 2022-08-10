import React from 'react';
import {View, Text, StyleSheet,Image, TouchableOpacity} from 'react-native';
import StarRating from '../model/Starts';

const Card = ({itemData, onPress})=>{
    return(
    <TouchableOpacity onPress={onPress} style={{ backgroundColor:'rgba(220,220,220,0.9)',}}>
          <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={itemData.img}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
    <Text style={styles.cardTitle}>{itemData.name}</Text>
            <StarRating  ratings={4} reviews={99} />
            <Text style={styles.cardDetails}>
             {itemData.title}
            </Text>
          </View>
        </View>
</TouchableOpacity>
 )
}

const styles = StyleSheet.create({
  
    card: {
        height: 100,
        backgroundColor:'#ff3333',
        marginLeft:3,
        marginVertical: 2,
       // borderBottomLeftRadius:20,
       // borderTopLeftRadius:20,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      },
      cardImgWrapper: {
        flex: 1,
        
      },
      cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 20,
        borderColor:'rgba(220,220,220,0.9)',
        borderWidth:5,
       
        
      },
      cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: 'rgba(220,220,220,0.9)',
       // borderWidth: 3,
        borderLeftWidth: 0,
        
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor:'rgba(220,220,220,0.9)',
      },
      cardTitle: {
        fontWeight: 'bold',
        fontSize:20,
        color:'#000'
      },
      cardDetails: {
        fontSize: 14,
        color: '#000',
      },
})

export default Card;