import React from 'react';
import {View, Text, StyleSheet,Image, TouchableOpacity} from 'react-native';
import StarRating from '../model/Starts';

const HotelCard = ({itemData, onPress})=>{
    return(
    <TouchableOpacity onPress={onPress}>
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
        backgroundColor:'transparent',
        marginLeft:5,
        marginRight:5,
        marginVertical: 5,
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
        borderRadius: 50,
        borderColor:'#cdcdcd',
        borderWidth:3,
       
        
      },
      cardInfo: {
        flex: 2,
        padding: 10,
        
      },
      cardTitle: {
        fontWeight: 'bold',
        fontSize:25,
        color:'#cdcdcd'
      },
      cardDetails: {
        fontSize: 20,
        color: '#ff3333',
      },
})

export default HotelCard;