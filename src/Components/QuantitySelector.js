import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';

export default function QuantitySelector({quantity,onChange}) {
  return (
    <View style={styles.row}>
      <TouchableOpacity onPress={()=>onChange(quantity-1)}><Text style={styles.btn}>-</Text></TouchableOpacity>
      <Text style={styles.qty}>{quantity}</Text>
      <TouchableOpacity onPress={()=>onChange(quantity+1)}><Text style={styles.btn}>+</Text></TouchableOpacity>
    </View>
  );
}
const styles=StyleSheet.create({
  row:{flexDirection:'row',alignItems:'center'},
  btn:{fontSize:20,paddingHorizontal:12,color:'#f60',fontWeight:'bold'},
  qty:{fontSize:18,minWidth:20,textAlign:'center'}
});


