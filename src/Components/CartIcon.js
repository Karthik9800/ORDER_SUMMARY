// components/CartIcon.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useApp } from "../Context/AppContext";

export default function CartIcon() {
    const { cart } = useApp();
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate("Cart Page")}
        >
            <View style={styles.innerContainer} >
                <Ionicons name="cart" size={24} color="black" />
                {cart.length > 0 && (
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>{cart.length}</Text>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    innerContainer: {
        // backgroundColor: "red",
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",

    },
    container: { marginLeft: 15 },
    badge: {
        position: "absolute",
        right: 1,
        top: 1,
        backgroundColor: "red",
        borderRadius: 10,
        width: 18,
        height: 18,
        justifyContent: "center",
        alignItems: "center",
    },
    badgeText: { color: "white", fontSize: 12, fontWeight: "bold" },
});
