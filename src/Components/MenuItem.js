import { Image, Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useApp } from "../Context/AppContext";
import { useNavigation } from "@react-navigation/native";


export default function MenuItem({ item }) {
    const navigation = useNavigation();
    const { favorites, toggleFavorite, addToCart } = useApp();
   
    return (<Pressable style={styles.card} onPress={() => navigation.navigate("FoodDetails Page", { item })}>
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
            onPress={() => addToCart(item)}
        >
            <Text style={{ color: "#fff" }}>Add to Cart</Text>
        </TouchableOpacity>
    </Pressable>);
}
const styles = StyleSheet.create({
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
})