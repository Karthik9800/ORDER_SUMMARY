// import React from 'react';
// import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import Feather from '@expo/vector-icons/Feather';

// export default function CartScreen({route,navigation}) {
//   const cartItem = route.params?.item;
//   const qty = route.params?.qty || 1;
//   const total = cartItem ? cartItem.price * qty : 0;
//   return (
//     <View style={styles.container}>
//         <View style={styles.arrow}>
//                               <TouchableOpacity  >
//                             <Ionicons name="arrow-back" size={24}  />
//                             </TouchableOpacity>
                      
//                             <Text style={styles.header}>Cart Page</Text>
//                             <Feather name="help-circle" size={24} color="black" />
//                             </View>
//       {cartItem ? (
//         <>
//           <Text style={styles.title}>{cartItem.name}  x{qty}</Text>
//           <Text style={styles.total}>Total Price: ₦{total}</Text>
//         </>
//       ):<Text>No items</Text>}
//       <TouchableOpacity style={styles.checkout} onPress={()=>navigation.navigate('Address Page')}>
//         <Text style={styles.checkoutTxt}>Check out</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }
// const styles=StyleSheet.create({
//   container:{flex:1,padding:20,marginTop:40},
//   title:{fontSize:18,fontWeight:'600',marginBottom:8},
//   total:{fontSize:20,color:'#f60',marginBottom:16},
//   checkout:{backgroundColor:'#f60',padding:16,borderRadius:12,alignItems:'center'},
//   checkoutTxt:{color:'#fff',fontSize:18,fontWeight:'700'},
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold', 
//   }, arrow:{
//     flexDirection:"row",
//     justifyContent:"space-between",
//     marginBottom:20
//   }
// });
// import React, { useContext } from 'react';
// import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
// import { CartContext } from '../../App';

// export default function CartScreen({ navigation }) {
//   const { state, dispatch } = useContext(CartContext);
//   const total = state.items.reduce((sum, i) => sum + i.price * i.qty, 0);

//   return (
//     <View style={{ flex: 1, padding: 16 }}>
//       <FlatList
//         data={state.items}
//         keyExtractor={i => i.id}
//         renderItem={({ item }) => (
//           <View style={styles.row}>
//             <Text style={styles.name}>{item.name}</Text>
//             <Text>Qty: {item.qty}</Text>
//             <Text>₹{item.price * item.qty}</Text>
//             <TouchableOpacity onPress={() => dispatch({ type: 'REMOVE', payload: item.id })}>
//               <Text style={{ color: 'red' }}>Remove</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       />
//       <Text style={styles.total}>Total: ₹{total}</Text>
//       <TouchableOpacity
//         style={styles.checkout}
//         onPress={() => navigation.navigate('OrderSummary')}
//       >
//         <Text style={{ color: '#fff' }}>Proceed to Checkout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 12,
//     backgroundColor: '#eee',
//     padding: 10,
//     borderRadius: 6
//   },
//   name: { fontWeight: '600' },
//   total: { fontSize: 18, fontWeight: '700', marginTop: 10 },
//   checkout: {
//     backgroundColor: '#4CAF50',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 20
//   }
// });
// screens/CartScreen.js
import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useApp } from "../Context/AppContext";
import Cart from "../Components/Cart";

export default function CartScreen({ navigation, route }) {

    const { cart } = useApp();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    // const { item } = route.params;

    return (
        <>
            <View style={styles.container}>

                {cart.length === 0 ? (
                    <Text>Your cart is empty.</Text>
                ) : (
                    <>
                        <View style={{ flex: 3 }}>
                            <FlatList
                                data={cart}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) => (
                                    // <Text>cart</Text>
                                    <Cart item={item} />

                                )}
                            />
                        </View>
                        {/* <Text style={styles.total}>Total: ₦{total}</Text> */}

                    </>
                )}
            </View>
            <View style={styles.priceContainer}>
                {/* Total Price Row */}
                <View style={styles.row}>
                    <Text style={styles.label}>Total Price</Text>
                    <Text style={styles.price}>₹{total}</Text>
                </View>

                {/* Checkout Button */}
                <TouchableOpacity style={styles.checkoutBtn} onPress={() => {
                    navigation.navigate("DeliverTo Page");
                }}>
                    <Text style={styles.checkoutText}>Check out</Text>
                </TouchableOpacity>

                {/* Add to Cart Button */}
                <TouchableOpacity style={styles.cartBtn}>
                    <Text style={styles.cartText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: { flex: 3, padding: 20},
    title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
    item: { flexDirection: "row", justifyContent: "space-between", marginVertical: 5 },
    total: { marginTop: 20, fontWeight: "bold", fontSize: 18 },
    priceContainer: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        padding: 15,
        backgroundColor: "#fff",
        width: "90%",
        alignSelf: "center",
        marginBottom:35

    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        fontWeight: "bold",
    },
    price: {
        fontSize: 18,
        fontWeight: "bold",
    },
    checkoutBtn: {
        backgroundColor: "orange",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 10,
    },
    checkoutText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    cartBtn: {
        borderWidth: 1,
        borderColor: "orange",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
    },
    cartText: {
        color: "orange",
        fontSize: 16,
        fontWeight: "bold",
    },


});
