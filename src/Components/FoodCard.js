// import React,{useState} from 'react';
// import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native';
// import QuantitySelector from './QuantitySelector';
// import { foods } from '../Data/Food';


// export default function FoodCard({item,onPress,navigation}) {
//   const [qty,setQty] = useState(1);
//   return (
    
//     <TouchableOpacity style={styles.card} onPress={() => onPress(item)}>
//       <Image source={item.img} style={styles.image} />
//       <Text style={styles.title}>{item.name}</Text>
//       <Text style={styles.price}>₹ {item.price}</Text>
//       <QuantitySelector quantity={qty} onChange={v=>setQty(Math.max(1,v))}/>
        // <TouchableOpacity style={styles.cartBtn}
        //         onPress={()=>navigation.navigate('Cart Page',{item:foods,qty})}>
        //         <Text style={styles.cartTxt}>Add to Cart</Text>
        //       </TouchableOpacity>
//     </TouchableOpacity>
//   );
// }
// const styles=StyleSheet.create({
//   card:{flex:1,margin:8,backgroundColor:'#fff',borderRadius:12,elevation:2,alignItems:'center'},
//   image:{width:100,height:100,resizeMode:'cover',borderRadius:12,marginTop:8},
//   title:{fontSize:16,fontWeight:'600',marginTop:4},
//   price:{fontSize:14,color:'#f60',marginBottom:8},
//   cartBtn:{backgroundColor:'#f60',padding:7,borderRadius:12,alignItems:'center',marginTop:'auto'},
//   cartTxt:{color:'#fff',fontSize:18,fontWeight:'600'}
// });
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import QuantitySelector from './QuantitySelector';

export default function FoodCard({ item, onPressAdd, onPressDetail }) {
  const [qty, setQty] = useState(1);

  return (
    <View style={styles.card}>
      {/* tap image/title to open details */}
      <TouchableOpacity onPress={() => onPressDetail?.(item)}>
        <Image source={item.img} style={styles.image} />
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>₹{item.price}</Text>
      </TouchableOpacity>

      <QuantitySelector
        quantity={qty}
        onChange={(v) => setQty(Math.max(1, v))}
      />

      <TouchableOpacity
        style={styles.cartBtn}
        onPress={() => onPressAdd?.(item, qty)}
      >
        <Text style={styles.cartTxt}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 2,
    alignItems: 'center',
    paddingBottom: 10,
  },
  image: { width: 100, height: 100, borderRadius: 12, marginTop: 8 },
  title: { fontSize: 16, fontWeight: '600', marginTop: 4 },
  price: { fontSize: 14, color: '#f60', marginBottom: 8 },
  cartBtn: {
    backgroundColor: '#f60',
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  cartTxt: { color: '#fff', fontSize: 16, fontWeight: '600' },
});

