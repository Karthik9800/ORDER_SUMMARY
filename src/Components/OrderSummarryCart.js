import { Image, StyleSheet, Text, View } from "react-native";

export default function OrderSummaryCart({ item }) {
    
    return (
        <View style={styles.row}>
            <Image
                source={{ uri: item.image }}
                style={styles.img}
            />
            <Text>{item.name} {"\n"}{item.price}*1</Text>
            <Text style={styles.price}>₹{item.price}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
        alignItems: "center",
        paddingBottom: 3,
        borderBottomWidth: 1,
        borderBottomColor: "black"
    },
    img: { width: 40, height: 40, marginRight: 10, borderRadius: 5 },
    price: { fontWeight: "bold" },
})