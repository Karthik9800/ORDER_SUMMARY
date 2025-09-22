// screens/FavoritesScreen.js
import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import { useApp } from "../Context/AppContext";

export default function FavoritesScreen() {
  const { favorites } = useApp();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      {favorites.length === 0 ? (
        <Text>No favorites yet.</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text>{item.name}</Text>
              <Text>{item.price}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  item: { flexDirection: "row", alignItems: "center", marginVertical: 5 },
  image: { width: 50, height: 50, borderRadius: 8, marginRight: 10 },
});
