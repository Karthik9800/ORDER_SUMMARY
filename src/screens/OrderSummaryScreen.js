// import React from 'react';
// import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import Feather from '@expo/vector-icons/Feather';


// const deliveryFee = 100;

// export default function OrderSummary({route,navigation}) {
//   const cartItem = route.params?.item;
//   const qty = route.params?.qty || 1;
//   const subtotal = cartItem ? cartItem.price * qty : 0;
//   const total = subtotal + deliveryFee;

//   const renderItem = ({ item }) => (
//     <View style={styles.itemContainer}>
//       <Image source={ item.image } style={styles.itemImage} />
//       <View style={styles.itemText}>
//         <Text style={styles.itemName}>{item.name}</Text>
//         <Text style={styles.itemQty}>₹ {item.price} * {item.qty}</Text>
//       </View>
//       <Text style={styles.itemPrice}>₹ {item.price}</Text>
//     </View>
//   );

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//         <View style={styles.arrow}>
//                 <TouchableOpacity onPress={()=>navigation.navigate('Address Page')} >
//               <Ionicons name="arrow-back" size={24}  />
//               </TouchableOpacity>
        
//               <Text style={styles.header}>Order Summary</Text>
//               <Feather name="help-circle" size={24} color="black" />
//               </View>
// <View style={styles.progressWrapper}>
    
//                 <View style={[styles.progressDot, styles.activeDot]}><Text style={styles.tick}>✓</Text></View>
//                 <View style={styles.progressLine}/>
//                 <View style={[styles.progressDot, styles.activeDot]}/>
//                 <View style={styles.progressline}/>
//                 <View style={styles.progressDot}/>
    

//       </View>
      
//       <View style={styles.orderGrid}>
//        {cartItem ? (
//               <>
//                 <Text style={styles.title}>{cartItem.name}  x{qty}</Text>
//                 <Text style={styles.total}>Total Price:₹ {total}</Text>
//               </>
//             ):<Text>No items</Text>}

//       <View style={styles.summary}>
//         <Text style={styles.summaryText}>Sub total: <Text style={styles.price}>₹ {subtotal}</Text></Text>
//         <Text style={styles.summaryText}>Delivery fee: <Text style={styles.price}>₹ {deliveryFee}</Text></Text>
//         <Text style={styles.totalText}>Amount payable: <Text style={styles.totalPrice}>₹ {total}</Text></Text>
//       </View>
//       </View>

//       <View style={styles.addressBox}>
//         <Text style={styles.addressTitle}>Delivery Address</Text>
//         <Text>Name: Bhargavi</Text>
//         <Text>Address: Nellore</Text>
//         <Text>City: Nellore</Text>
//         <Text>Phone: 345675678</Text>
//       </View>
//       <View>

//       <TouchableOpacity style={styles.paymentButton} onPress={()=>navigation.navigate('Payment Page')}>
//         <Text style={styles.paymentText}>Proceed to payment</Text>
//       </TouchableOpacity>
//       </View>
//     </ScrollView>
    
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding:20,
// paddingTop:40,
//     backgroundColor: '#fff',
    
//   },
//    progressWrapper: {
//     flexDirection: 'row',
//     justifyContent:'center',
//     marginVertical:20,

// alignItems:"center",
  

//   },
//   arrow:{
//     flexDirection:"row",
//     justifyContent:"space-between"
//   },
//   progressDot: {
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//     borderWidth: 2,
//     backgroundColor:'white',
  
//   },
//   activeDot:{
//     backgroundColor:'green',
//   },
//   activeLine:{
//     backgroundColor:'green'
//   },
//     progressLine: {
//  width:150,
//  height:2,
//  backgroundColor:'green'
//   },
//   progressline:{
//      width:150,
//  height:2,
//  backgroundColor:'#ccc'
//   },
// tick: {
//   color: '#fff',
//   fontSize: 10,
//   fontWeight: 'bold',
//   textAlign: 'center',
//   lineHeight: 12, 
// },

 
//  header: {
//     fontSize: 24,
//     fontWeight: 'bold', 
//   },
//   orderGrid:{
//     borderWidth:1,
//     padding:15,
//     borderRadius:5,  
//     borderColor: '#ccc', 
    
//   },
//   itemContainer: {
//     flexDirection: 'row',
//     marginVertical: 10,
//     alignItems: 'center',
//     paddingBottom: 8,
//     borderBottomWidth:1,
//     borderColor: '#ccc', 

//   },
//   itemImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 6,
//     marginRight: 10,
//   },
//   itemText: {
//     flex: 1,
//   },
//   itemName: {
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   itemQty: {
//     fontSize: 14,
//     color: '#666',
//   },
//   itemPrice: {
//     fontWeight: 'bold',
//   },
//   summary: {
//     marginTop: 20,
//   },
//   summaryText: {
//     fontSize: 16,
//     marginVertical: 4,
//   },
//   price: {
//     fontWeight: '600',
//   },
//   totalText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
//   totalPrice: {
//     color: '#000',
//   },
//   addressBox: {
//     marginTop: 35,
//     padding: 12,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 6,
//   },
//   addressTitle: {
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   paymentButton: {
//     marginTop: 30,
//     backgroundColor: '#ff6600',
//     padding: 16,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   paymentText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });

// import React, { useContext } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { CartContext } from '../../App';

// export default function OrderSummaryScreen({ navigation }) {
//   const { state, dispatch } = useContext(CartContext);
//   const total = state.items.reduce((sum, i) => sum + i.price * i.qty, 0);

//   return (
//     <View style={{ flex: 1, padding: 20 }}>
//       <Text style={styles.header}>Order Summary</Text>
//       {state.items.map(i => (
//         <Text key={i.id}>{i.name} x {i.qty} = ₹{i.price * i.qty}</Text>
//       ))}
//       <Text style={styles.total}>Grand Total: ₹{total}</Text>
//       <TouchableOpacity
//         style={styles.placeBtn}
//         onPress={() => {
//           alert('Order Placed ✅');
//           dispatch({ type: 'CLEAR' });
//           navigation.navigate('Home');
//         }}
//       >
//         <Text style={{ color: '#fff' }}>Place Order</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   header: { fontSize: 20, fontWeight: '700', marginBottom: 10 },
//   total: { fontSize: 18, marginVertical: 20 },
//   placeBtn: { backgroundColor: '#4CAF50', padding: 14, borderRadius: 8, alignItems: 'center' },
// });
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, ScrollView } from "react-native";
import { useApp } from "../Context/AppContext";
import OrderSummaryCart from "../Components/OrderSummarryCart";
 
const delfee=100;

const OrderSummaryScreen = ({ navigation, route }) => {
    const { name, address, city, phone } = route.params;
    const { cart } = useApp();
     const total = cart.reduce((sum, item) => sum + item.price, 0);
     const GrandTotal= total+delfee
    return (
        <ScrollView>
        <View style={styles.container}>
            {/* Order details */}
            <View style={styles.card}>
                <Text style={styles.subtitle}>Order details</Text>
                {cart.map((item) => <OrderSummaryCart item={item} />)}
                {/* <FlatList data={cart} keyExtractor={() => new Date().toString() + Math.random().toString()} renderItem={(cartData) => { <OrderSummaryCart item={cartData.item} /> }} /> */}
                <Text>Sub total: ₹ {total}</Text>
                <Text>Delivery fee: ₹{delfee}</Text>
                <Text style={{ fontWeight: "bold" }}>Amount payable: ₹{GrandTotal}</Text>
            </View>
            {/* Delivery Address */}
            <View style={styles.card}>
                <Text style={styles.subtitle}>Delivery address</Text>
                <Text>Name: {name}</Text>
                <Text>Address: {address}</Text>
                <Text>City: {city}</Text>
                <Text>Phone: {phone}</Text>
            </View>

            {/* Proceed Button */}
            <TouchableOpacity style={styles.payBtn} onPress={() => {
                navigation.navigate("Payment Page");
            }}>
                <Text style={styles.payText}>Proceed to payment</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#fff" ,marginVertical:20},
    title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
    subtitle: { fontWeight: "bold", marginBottom: 10 },
    card: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 15,
        marginBottom: 20,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
        alignItems: "center",
    },
    img: { width: 40, height: 40, marginRight: 10 },
    price: { fontWeight: "bold" },
    payBtn: {
        backgroundColor: "orange",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
    },
    payText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});

export default OrderSummaryScreen;
