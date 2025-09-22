// import React,{useState} from 'react';
// import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native';
// import QuantitySelector from '../Components/QuantitySelector';

// export default function ProductScreen({route,navigation}) {
//   const {food} = route.params;
//   const [qty,setQty] = useState(1);
//   return (
//     <View style={styles.container}>
//       <Image source={food.img} style={styles.img}/>
//       <Text style={styles.name}>{food.name}</Text>
//       <Text style={styles.price}>₹ {food.price}</Text>
//       <QuantitySelector quantity={qty} onChange={v=>setQty(Math.max(1,v))}/>
//       <Text style={styles.desc}>Description of {food.name} goes here.</Text>
//       <TouchableOpacity style={styles.cartBtn}
//         onPress={()=>navigation.navigate('Cart Page',{item:food,qty})}>
//         <Text style={styles.cartTxt}>Add to Cart</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }
// const styles=StyleSheet.create({
//   container:{flex:1,padding:16,marginVertical:20},
//   img:{width:'100%',height:200,borderRadius:12,resizeMode:'cover'},
//   name:{fontSize:22,fontWeight:'700',marginTop:12},
//   price:{fontSize:20,color:'#f60',marginVertical:4},
//   desc:{marginVertical:12,lineHeight:20},
//   cartBtn:{backgroundColor:'#f60',padding:14,borderRadius:12,alignItems:'center',marginTop:'auto'},
//   cartTxt:{color:'#fff',fontSize:18,fontWeight:'600'}
// });
// import React, { useContext } from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import { CartContext } from '../../App';

// export default function ProductScreen({ route, navigation }) {
//   const { product } = route.params;
//   const { dispatch } = useContext(CartContext);

//   return (
//     <View style={{ flex: 1, padding: 20 }}>
//       <Image source={{ uri: product.image }} style={{ width: '100%', height: 200, borderRadius: 10 }} />
//       <Text style={styles.title}>{product.name}</Text>
//       <Text style={styles.price}>₹{product.price}</Text>
//       <TouchableOpacity
//         style={styles.btn}
//         onPress={() => dispatch({ type: 'ADD', payload: { ...product, qty: 1 } })}
//       >
//         <Text style={{ color: '#fff' }}>Add to Cart</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.cartBtn}
//         onPress={() => navigation.navigate('Cart')}
//       >
//         <Text style={{ color: '#fff' }}>Go to Cart</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   title: { fontSize: 22, fontWeight: '700', marginVertical: 10 },
//   price: { fontSize: 18, marginBottom: 20 },
//   btn: { backgroundColor: '#4CAF50', padding: 12, borderRadius: 8, alignItems: 'center' },
//   cartBtn: { marginTop: 15, backgroundColor: '#FF9800', padding: 12, borderRadius: 8, alignItems: 'center' },
// });
// screens/FoodDetailScreen.js
import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { useApp } from "../Context/AppContext";

export default function FoodDetailScreen({ navigation, route }) {
    const { favorites, toggleFavorite, addToCart } = useApp();
    const [quantity, setQuantity] = useState(1);
    const [rating, setRating] = useState(4);
    const { item } = route.params;
    const price = 1300;
    const total = quantity * price;
   

    const recommended = [
        {
            id: "1",
            name: "Samosa",
            price: 1300,
            image:
                "https://upload.wikimedia.org/wikipedia/commons/7/7f/Samosa.jpg",
        },
        {
            id: "2",
            name: "Chicken",
            price: 1600,
            image:
                "https://upload.wikimedia.org/wikipedia/commons/b/bb/Chicken_lollipop.jpg",
        },
        {
            id: "3",
            name: "Biriyani",
            price: 1400,
            image:
                "https://upload.wikimedia.org/wikipedia/commons/f/f5/Hyderabadi_Chicken_Biryani.jpg",
        },
    ];

    const handleIncrement = () => setQuantity(quantity + 1);
    const handleDecrement = () =>
        setQuantity(quantity > 1 ? quantity - 1 : 1);

    return (
        <View style={styles.container}>
            {/* Food Image */}
            <Image
                source={{
                    uri: item.image,
                }}
                style={styles.image}
            />

            {/* Title + Price */}
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.price}>₹{item.price}</Text>

            {/* Rating */}
            <View style={styles.ratingRow}>
                {[1, 2, 3, 4, 5].map((star) => (
                    <TouchableOpacity key={star} onPress={() => setRating(star)}>
                        <Ionicons
                            name={star <= rating ? "star" : "star-outline"}
                            size={22}
                            color="orange"
                        />
                    </TouchableOpacity>
                ))}
            </View>

            {/* Quantity selector */}
            <View style={styles.qtyRow}>
                <TouchableOpacity style={styles.qtyBtn} onPress={handleDecrement}>
                    <Text style={styles.qtyText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.qtyNumber}>{quantity}</Text>
                <TouchableOpacity style={styles.qtyBtn} onPress={handleIncrement}>
                    <Text style={styles.qtyText}>+</Text>
                </TouchableOpacity>
            </View>

            {/* Description */}
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>
                Jollof rice is a dish from West Africa. The dish is typically made
                with long-grain rice, tomatoes, chilies and sometimes vegetables,
                and non-veg. {"\n"}
                <Text style={{ color: "red" }}>
                    (Each serving contains 240 calories)
                </Text>
            </Text>

            {/* Recommended Slides */}
            <Text style={styles.sectionTitle}>Recommended Slide</Text>
            <FlatList
                data={recommended}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.recommendCard}>
                        <Image source={{ uri: item.image }} style={styles.recommendImg} />
                        <Text style={styles.recommendText}>{item.name}</Text>
                        <Text style={styles.recommendPrice}>₹{item.price}</Text>
                    </View>
                )}
            />

            {/* Total + Add to Cart */}
            <View style={styles.footer}>
                <Text style={styles.total}>Total: ₹{total}</Text>
                <TouchableOpacity style={styles.cartBtn} onPress={() => {
                    addToCart(item);
                    navigation.navigate("Cart Page", { item });

                }}>
                    <Ionicons name="cart" size={18} color="#fff" />
                    <Text style={styles.cartText}> Add to cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 15, backgroundColor: "#fff" ,marginBottom:30},
    image: { width: "100%", height: 180, borderRadius: 10 },
    title: { fontSize: 22, fontWeight: "bold", marginTop: 10 },
    price: { fontSize: 18, color: "#333", marginBottom: 5 },
    ratingRow: { flexDirection: "row", marginVertical: 5 },
    qtyRow: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
    },
    qtyBtn: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 8,
        borderRadius: 5,
    },
    qtyText: { fontSize: 18, fontWeight: "bold" },
    qtyNumber: { marginHorizontal: 15, fontSize: 18 },
    sectionTitle: {
        marginTop: 15,
        fontSize: 18,
        fontWeight: "bold",
    },
    description: { fontSize: 14, color: "#555", marginTop: 5 },
    recommendCard: {
        backgroundColor: "#f9f9f9",
        padding: 10,
        marginRight: 10,
        borderRadius: 8,
        alignItems: "center",
    },
    recommendImg: { width: 70, height: 70, borderRadius: 8 },
    recommendText: { fontSize: 14, marginTop: 5, fontWeight: "600" },
    recommendPrice: { fontSize: 12, color: "gray" },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        alignItems: "center",
    },
    total: { fontSize: 16, fontWeight: "bold" },
    cartBtn: {
        flexDirection: "row",
        backgroundColor: "orange",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 6,
        alignItems: "center",
    },
    cartText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
