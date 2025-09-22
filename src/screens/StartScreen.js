import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  Text,
  StatusBar,
  TouchableOpacity
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width, height } = Dimensions.get("screen");

export default function StartScreen({navigation}) {
  
  const slides = [
    require("../../assets/vg.webp"),
    require("../../assets/ht.webp"),
    require("../../assets/ice.webp"),
  ];

  return (
    <View style={styles.container}>
      <Carousel
        width={width}
        height={height}
        data={slides}
        loop
        autoPlay
        scrollAnimationDuration={800}
        renderItem={({ item, index }) => (
          <ImageBackground
            key={index}
            source={item}
            style={styles.slide}
            resizeMode="cover"
          >
         
          </ImageBackground>
        )}
      />
       

       <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.title}>THINDHAM</Text>
          <Text style={styles.subtitle}>
            tasty meals delivered to{'\n'}your doorstep
          </Text>

          <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('SignIn Page')}>
            <Text style={styles.buttonText}>Get started</Text>
          </TouchableOpacity>
        </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" }, 
  slide: {
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.1)', 
  },
   content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#ff6a00',
    marginBottom: 8,
    
    borderRadius:7
  },
  subtitle: {
    fontSize: 16,
    color: '#fdf9f9ff',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 22,
    borderRadius:7
  },
  button: {
    backgroundColor: '#ff6a00',
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
