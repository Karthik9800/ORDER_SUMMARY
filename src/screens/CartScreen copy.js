// screens/CartScreen.js
import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useApp } from "../Context/AppContext";

export default function CartScreen({ navigation, route }) {
    const [count, setCount] = useState(1);
    const { cart } = useApp();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    // const { item } = route.params;
    function incrementHandler() {
        setCount((prev) => prev + 1);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cart</Text>
            {cart.length === 0 ? (
                <Text>Your cart is empty.</Text>
            ) : (
                <>
                    <FlatList
                        data={cart}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            // <View style={styles.item}>
                            //     <Text>{item.name}</Text>
                            //     <Text>₦{item.price}</Text>
                            // </View>
                            <View style={styles.card}>
                                <Image source={{ uri: item.image }} style={styles.image} />
                                <View style={styles.details}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.price}>₹{item.price}</Text>
                                </View>
                                <View style={styles.qtyContainer}>
                                    <TouchableOpacity
                                        style={styles.qtyBtn}

                                    >
                                        <Text style={styles.qtyText}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.qtyNumber}>{count}</Text>
                                    <TouchableOpacity
                                        style={styles.qtyBtn}
                                        onPress={incrementHandler}

                                    >
                                        <Text style={styles.qtyText}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    />
                    <Text style={styles.total}>Total: ₹{total}</Text>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
    item: { flexDirection: "row", justifyContent: "space-between", marginVertical: 5 },
    total: { marginTop: 20, fontWeight: "bold", fontSize: 18 },

    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        marginVertical: 8,
        padding: 10,
        borderRadius: 8,
    },
    image: { width: 60, height: 60, borderRadius: 8, marginRight: 10 },
    details: { flex: 1 },
    name: { fontSize: 16, fontWeight: "600" },
    price: { fontSize: 14, color: "gray" },
    qtyContainer: { flexDirection: "row", alignItems: "center" },
    qtyBtn: {
        backgroundColor: "orange",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
    qtyText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
    qtyNumber: { marginHorizontal: 8, fontSize: 16 },
});
