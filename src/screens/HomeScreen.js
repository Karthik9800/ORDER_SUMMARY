// import React,{useState,useRef,useContext} from 'react';
// import {View,Text,FlatList,StyleSheet,Dimensions,TextInput,Image, ScrollView} from 'react-native';
// import { foods } from '../Data/Food';
// import FoodCard from '../Components/FoodCard';
// import Carousel from "react-native-reanimated-carousel";
// import {Feather} from '@expo/vector-icons';
// import { PRODUCTS } from '../Data/Products';
// import { CartContext } from '../../App';


// const { width: screenWidth } = Dimensions.get('screen');


// export default function HomeScreen({navigation}) {

//  const { dispatch } = useContext(CartContext);

//   // handler for adding to cart
//   const handleAdd = (item, qty) => {
//     dispatch({ type: 'ADD', payload: { ...item, qty } });
//   };

//   // handler for navigating to detail screen
//   const handleDetail = (item) => {
//     navigation.navigate('Product', { product: item });
//   };
    
//     const carouselRef = useRef(null);

//   const renderItem = ({ item }) => (
//   <View key={item.id} style={styles.card}>
//     <Image source={item.img} style={styles.img} />
//     <Text style={styles.title}>{item.name}- ₹{item.price}</Text>
    
//   </View>
// );
//   return (
//     <ScrollView>
//     <View style={styles.container}>
//         <View style={{flexDirection:"row"}}>
//         <Feather name="menu" size={24} color="black" />
//         <Text style={styles.htxt}>THINDHAM</Text>
//         <Feather name="shopping-cart" size={24} color="black" onPress={()=>navigation.navigate('Cart Page')}/>
//         </View>
//         <View style={styles.bar}>
//             <Feather style={styles.srIc} name='search'/>
//             <TextInput 
//             style={styles.input} 
//             placeholder="search" />
//         </View>

        
//       <Text style={styles.heading}>What would you like to Eat?</Text>
//       <View style={styles.bg}>
//         <Text style={styles.head}>Recommended:</Text>
//       <View style={styles.container1} >
//       <Carousel
//             ref={carouselRef}
//             data={foods}
//             renderItem={renderItem }
//             width={350}
//             height={270}
//             loop
//             autoPlay
//             autoPlayInterval={1500}
            
//              />
//             </View>
    
//        <FlatList
//         data={PRODUCTS}
//         keyExtractor={(item) => item.id}
//         numColumns={2}                       // optional grid look
//         contentContainerStyle={styles.list}
//         renderItem={({ item }) => (
//           <FoodCard
//             item={item}
//             onPressAdd={handleAdd}
//             onPressDetail={handleDetail}
//           />
//         )}
//       />
//       </View>
//     </View>
//     </ScrollView>

//   );
// }
// const styles=StyleSheet.create({
//   container:{flex:1,
//     backgroundColor:'#9e9e9dff',
//     padding:12,
//     paddingTop:50,
    
// },
// htxt:{
//     marginHorizontal:95,
//     fontSize:20,
//     fontWeight:"bold",
//     fontFamily:"cursive"
// },
//   heading:{
//     fontSize:20,
//     fontWeight:'700',
//     marginVertical:12
// },
//   bar:{
//         backgroundColor:"#fcfdf9ff",
//         height:40,
    
//         borderRadius:5,
//         marginTop:20,
//         borderColor:'black',
//         borderWidth:0.5,
//         flexDirection:'row'
//     },
//     input:{
//         flex:1,
//         fontSize:18
//     },
//     srIc:{
//         fontSize:25,
//         alignSelf:"center"
//     },
//      bg:{
//         backgroundColor:"transparent",
//         flex:1,
//         paddingTop:2
//     },
//     head:{
//         textAlign:"left",
//         fontWeight:"bold",
//         fontSize:20,
//         marginLeft:5,
//         marginTop:10
//     },
//     container1: {
//     backgroundColor: 'transparent',
//   },
//   card: {
//     borderRadius: 10,
//     height: 250,
//     padding: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   img: {
//     width: '100%',
//     height: 160,
//     borderRadius: 10,
//   },
//   title: {
//     fontSize: 20,
//     color: '#fff',
//     marginTop: 10,
//     fontWeight:"900"
//   },
//   list: { paddingBottom: 16 },
// });

import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, Pressable, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MenuItem from "../Components/MenuItem";
import { useApp } from "../Context/AppContext";
import {Feather} from '@expo/vector-icons';
const Meals = [
    { id: "1", name: "Samosa", price: 1300, quantity: 1, image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1371&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: "2", name: "Pizza", price: 1400, quantity: 1, image: "https://images.unsplash.com/photo-1694849789325-914b71ab4075?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: "3", name: "Biriyani", price: 1400, quantity: 1, image: "https://images.unsplash.com/photo-1669281645373-a83c87336565?q=80&w=980&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: "4", name: "Chicken Lollipop", price: 1600, quantity: 1, image: "https://images.unsplash.com/photo-1700514015106-4d8480938dcb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: "5", name: "Pizza", price: 1400, quantity: 1, image: "https://images.unsplash.com/photo-1619734490039-a68d5c82cf30?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: "6", name: "Biriyani", price: 1300, quantity: 1, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=481&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

export default function HomeScreen({ navigation }) {
    const { selectedTab, setSelectedTab } = useApp();
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{flexDirection:"row"}}>
            <Feather name="menu" size={24} color="black" />
            <Text style={styles.htxt}>THINDHAM</Text>
           <Feather name="shopping-cart" size={24} color="black" onPress={()=>navigation.navigate('Cart Page')}/>
           </View>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.greeting}>Hello Chinwe</Text>
                <Text style={styles.title}>
                    What <Text style={{ color: "#FF6600" }}>would you like to Eat?</Text>
                </Text>
            </View>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <Ionicons name="search-outline" size={20} color="#777" />
                <TextInput placeholder="Enter your dish name" style={styles.searchInput} />
                <TouchableOpacity style={styles.filterButton}>
                    <Ionicons name="options-outline" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
          
      
            {/* Tabs */}
            <View style={styles.tabs}>
                <Pressable style={({ pressed }) => pressed ? [styles.activeTab, styles.tab] : styles.tab} onPress={() => {
                    setSelectedTab("Meals")
                    navigation.navigate("Menu Page");

                }}>
                    <Text>Meals</Text>
                </Pressable>
                <Pressable style={({ pressed }) => pressed ? [styles.activeTab, styles.tab] : styles.tab} onPress={() => {
                    setSelectedTab("Slides")
                    navigation.navigate("Menu Page",);

                }} >

                    <Text style={styles.tab}>Slides</Text>
                </Pressable>
                <Pressable style={({ pressed }) => pressed ? [styles.activeTab, styles.tab] : styles.tab} onPress={() => {
                    setSelectedTab("Snacks")
                    navigation.navigate("Menu Page", { selectedTab, setSelectedTab });

                }}>

                    <Text style={styles.tab}>Snacks</Text>
                </Pressable>
                <Pressable style={({ pressed }) => pressed ? [styles.activeTab, styles.tab] : styles.tab}>

                    <Text style={styles.tab}>Drinks</Text>
                </Pressable>
            </View>

            {/* Today's Special */}
            <Text style={styles.sectionTitle}>Today's Special offer</Text>
            <View style={styles.specialCard}>
                <Image
                    source={{ uri: "https://img.freepik.com/free-photo/delicious-pizza-isolated-white_1232-1897.jpg" }}
                    style={styles.specialImage}
                />
                <View style={styles.specialContent}>
                    <Text style={styles.specialTitle}>yummies Special Burger</Text>
                    <Text style={styles.specialPrice}>₹1,800</Text>
                    <TouchableOpacity style={styles.addButton}>
                        <Text style={styles.addButtonText}>Add to cart</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Popular Now */}
            <Text style={styles.sectionTitle}>Popular Now</Text>


            {/* <View style={{}}>
                {Meals.map((mealItem) => <MenuItem mealData={mealItem} />)}
            </View> */}


            <FlatList data={Meals} numColumns={2} renderItem={(mealItem) => <MenuItem item={mealItem.item} keyExtractor={(item) => item.id} />} />
        </View>
       </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff", padding: 12 ,marginVertical:30},
    header: { marginTop: 10 },
    greeting: { fontSize: 16, color: "#444" },
    title: { fontSize: 20, fontWeight: "bold", marginTop: 5 },
    htxt:{
       marginHorizontal:95,
       fontSize:20,
       fontWeight:"bold",
       fontFamily:"cursive",
       color:"#FF6600"
   },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        paddingHorizontal: 10,
        marginTop: 15,
    },
    searchInput: { flex: 1, padding: 8 },
    filterButton: {
        backgroundColor: "#FF6600",
        padding: 8,
        borderRadius: 8,
        marginLeft: 5,
    },
    tabs: { flexDirection: "row", marginTop: 15, justifyContent: "space-around" },
    tab: { marginRight: 15, fontSize: 14, color: "#666" },
    activeTab: {
        color: "#fff",
        backgroundColor: "#FF6600",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,

    },
    sectionTitle: { fontSize: 16, fontWeight: "bold", marginTop: 20, marginBottom: 10 },
    specialCard: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#eee",
        padding: 10,
    },
    specialImage: { width: 100, height: 100, borderRadius: 10 },
    specialContent: { marginLeft: 10, flex: 1, justifyContent: "center" },
    specialTitle: { fontSize: 14, fontWeight: "bold" },
    specialPrice: { fontSize: 16, fontWeight: "bold", marginVertical: 5 },
    addButton: {
        backgroundColor: "#FF6600",
        paddingVertical: 5,
        borderRadius: 5,
        alignItems: "center",
    },
    addButtonText: { color: "#fff", fontWeight: "bold" },
    grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
    foodCard: {
        width: "48%",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        alignItems: "center",
    },
    foodImage: { width: 100, height: 100, borderRadius: 10 },
    foodName: { fontSize: 14, fontWeight: "bold", marginTop: 5 },
    foodPrice: { fontSize: 14, color: "#333" },
});



