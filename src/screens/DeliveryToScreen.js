// import React, { useState } from 'react';
// import {
//   View,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import Feather from '@expo/vector-icons/Feather';

// export default function DeliveryAddressScreen({ navigation }) {
//   const [form, setForm] = useState({
//     name: '',
//     address: '',
//     city: '',
//     phone: '',
//   });

//   const handleChange = (key, value) =>
//     setForm(prev => ({ ...prev, [key]: value }));


//   return (
//     <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
//       <View style={styles.arrow}>
//                       <TouchableOpacity onPress={()=>navigation.navigate('Cart Page')} >
//                     <Ionicons name="arrow-back" size={24}  />
//                     </TouchableOpacity>
              
//                     <Text style={styles.header}>Deliver To</Text>
//                     <Feather name="help-circle" size={24} color="black" />
//                     </View>
    
//       <View style={styles.progressWrapper}>
//         <View style={[styles.progressDot, styles.activeDot]} />
//         <View style={styles.progressLine} />
//         <View style={styles.progressDot} />
//         <View style={styles.progressLine} />
//         <View style={styles.progressDot} />
//       </View>

//       <Text style={styles.sectionTitle}>Enter Delivery Address</Text>

//       {['name', 'address', 'city', 'phone'].map(field => (
//         <TextInput
//           key={field}
//           placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//           style={styles.input}
//           value={form[field]}
//           onChangeText={val => handleChange(field, val)}
//           keyboardType={field === 'phone' ? 'phone-pad' : 'default'}
//         />
//       ))}

//       <View style={styles.orRow}>
//         <View style={styles.orLine} />
//         <Text style={styles.orText}>OR</Text>
//         <View style={styles.orLine} />
//       </View>

      
//       <TouchableOpacity style={styles.profileButton}>
//         <Text style={styles.profileText}>Use my profile details</Text>
//         <View style={styles.radioOuter}>
//           <View style={styles.radioInner} />
//         </View>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.proceedButton} onPress={()=>navigation.navigate('Order Page')}>
//         <Text style={styles.proceedText}>Proceed</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     paddingTop: 40,
    
//     backgroundColor: '#fff',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold', 
//   },
//   headerTitle: { fontSize: 18, fontWeight: '600' ,},

//   progressWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 24,
//     justifyContent: 'center',
//     marginVertical:20
//   },
//   progressDot: {
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//     backgroundColor: '#ccc',
//   },
//   activeDot: { backgroundColor: 'green' },
//   progressLine: {
//     width: 130,
//     height: 2,
//     backgroundColor: '#ccc',
//   },
//    arrow:{
//     flexDirection:"row",
//     justifyContent:"space-between"
//   },

//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: '500',
//     marginBottom: 12,
//   },

//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 6,
//     padding: 12,
//     marginBottom: 12,
//   },

//   orRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 20,
//   },
//   orLine: { flex: 1, height: 1, backgroundColor: '#ccc' },
//   orText: { marginHorizontal: 8, color: '#777' },

//   profileButton: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 6,
//     padding: 12,
//     marginBottom: 20,
//   },
//   profileText: { fontSize: 15 },
//   radioOuter: {
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     borderWidth: 2,
//     borderColor: '#f60',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   radioInner: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: '#f60',
//   },

//   proceedButton: {
//     backgroundColor: '#f60',
//     paddingVertical: 14,
//     borderRadius: 6,
//     alignItems: 'center',
//   },
//   proceedText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });
import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from "react-native";

const DeliverToScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");

    const useProfileDetails = () => {
        // Hardcoded profile details (could be fetched from context/api)
        setName("Karthik");
        setAddress("LIG-735");
        setCity("Hyderabad");
        setPhone("9502606689");
    };

    const handleProceed = () => {
        navigation.navigate("OrderSummary Page", {
            name,
            address,
            city,
            phone,
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Deliver to</Text>

            <Text style={styles.label}>Name:</Text>
            <TextInput style={styles.input} value={name} onChangeText={setName} />

            <Text style={styles.label}>Address:</Text>
            <TextInput style={styles.input} value={address} onChangeText={setAddress} />

            <Text style={styles.label}>City:</Text>
            <TextInput style={styles.input} value={city} onChangeText={setCity} />

            <Text style={styles.label}>Phone:</Text>
            <TextInput
                style={styles.input}
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
            />

            <Text style={styles.or}>OR</Text>

            <TouchableOpacity style={styles.profileBtn} onPress={useProfileDetails}>
                <Text>Use my profile details</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.proceedBtn} onPress={handleProceed}>
                <Text style={styles.proceedText}>Proceed</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#fff" },
    title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
    label: { marginTop: 10, fontWeight: "600" },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        marginTop: 5,
    },
    or: { textAlign: "center", marginVertical: 15, fontWeight: "bold" },
    profileBtn: {
        borderWidth: 1,
        borderColor: "orange",
        borderRadius: 8,
        padding: 12,
        alignItems: "center",
        marginBottom: 20,
    },
    proceedBtn: {
        backgroundColor: "orange",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
    },
    proceedText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});

export default DeliverToScreen;
