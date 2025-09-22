import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Cart({ item }) {
    const [count, setCount] = useState(1);
    function incrementHandler() {

        setCount((prev) => (prev > 0) ? prev + 1 : prev);
    }
    function decrementHandler() {
        setCount((prev) => (prev > 1) ? prev - 1 : prev);
    }

    return (
        <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>₹{item.price}</Text>
            </View>
            <View style={styles.qtyContainer}>
                <TouchableOpacity
                    style={styles.qtyBtn}
                    onPress={decrementHandler}
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
    );
}
const styles = StyleSheet.create({
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
})