// screens/MenuScreen.js
import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    StyleSheet,
    Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useApp } from "../Context/AppContext";

const menuData = {
    Meals: [
        { id: "1", name: "Samosa", price: 1300, quantity: 1, image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1371&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: "2", name: "Pizza", price: 1400, quantity: 1, image: "https://images.unsplash.com/photo-1694849789325-914b71ab4075?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: "3", name: "Biriyani", price: 1400, quantity: 1, image: "https://images.unsplash.com/photo-1669281645373-a83c87336565?q=80&w=980&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: "4", name: "Chicken Lollipop", price: 1600, quantity: 1, image: "https://images.unsplash.com/photo-1700514015106-4d8480938dcb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: "5", name: "Pizza", price: 1400, quantity: 1, image: "https://images.unsplash.com/photo-1619734490039-a68d5c82cf30?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: "6", name: "Biriyani", price: 1300, quantity: 1, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=481&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    ],
    Snacks: [
        { id: "7", name: "Fries", price: 800, quantity: 1, image: "https://plus.unsplash.com/premium_photo-1672976509033-cfc634f57047?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    ],
    Slides: [
        { id: "8", name: "Coleslaw", price: 500, quantity: 1, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=481&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    ],
};

export default function MenuScreen({ navigation, route }) {

    const { favorites, toggleFavorite, addToCart, selectedTab, setSelectedTab } = useApp();
    // useEffect(() => {
    //     console.log(type);
    //     if (type === undefined) {
    //         setSelectedTab("Meals");
    //     } else {

    //         setSelectedTab(type);
    //     }
    // }, [selectedTab])
    // console.log(selectedTab);

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            {/* Tabs */}
            <View style={styles.tabs}>
                {Object.keys(menuData).map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        style={[
                            styles.tab,
                            selectedTab === tab && { borderBottomWidth: 2, borderBottomColor: "orange" },
                        ]}
                        onPress={() => {

                            setSelectedTab(tab)
                        }
                        }
                    >
                        <Text style={{ fontWeight: selectedTab === tab ? "bold" : "normal" }}>
                            {tab}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Items */}
            <FlatList
                data={menuData[selectedTab]}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={({ item }) => (
                    <Pressable style={styles.card} onPress={() => navigation.navigate("FoodDetails Page", { item })}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <TouchableOpacity
                            style={styles.heart}
                            onPress={() => toggleFavorite(item)}
                        >
                            <Ionicons
                                name={favorites.find((f) => f.id === item.id) ? "heart" : "heart-outline"}
                                size={20}
                                color="orange"
                            />
                        </TouchableOpacity>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.price}>₹{item.price}</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                addToCart(item);
                                navigation.navigate("Cart Page");
                            }}
                        >
                            <Text style={{ color: "#fff" }}>Add to Cart</Text>
                        </TouchableOpacity>
                    </Pressable>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    tabs: { flexDirection: "row", justifyContent: "space-around", padding: 10, marginVertical: 20 },
    tab: { padding: 8, },
    card: {
        flex: 1,
        margin: 10,
        backgroundColor: "#f9f9f9",
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        elevation: 3,
    },
    image: { width: 100, height: 100, borderRadius: 10 },
    heart: { position: "absolute", top: 10, right: 10 },
    name: { marginTop: 8, fontWeight: "bold" },
    price: { color: "gray" },
    button: {
        marginTop: 6,
        backgroundColor: "orange",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
    },
});
