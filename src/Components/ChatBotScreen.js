import React, { useState, useRef } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  FlatList, StyleSheet, KeyboardAvoidingView,
  Platform
} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function ChatScreen() {
  const [messages, setMessages] = useState([
    { id: '1', from: 'bot', text: 'Hey there! Need milk, veggies, or a snack run? 🥦', time: new Date() },
  ]);
  const [input, setInput] = useState('');
  const [botTyping, setBotTyping] = useState(false);
  const flatListRef = useRef(null);

  const quickReplies = ['Milk 🥛', 'Fruits 🍎', 'Vegetables 🥕', 'Snacks 🍪','Biryani🥘🍲🍗'];

  const botReply = (msg) => {
    const lower = msg.toLowerCase();
    if (lower.includes('milk')) return 'We have organic, toned, and full cream milk. Which one’s your pick?';
    if (lower.includes('fruit')) return 'Seasonal fruits: apples, bananas, mangoes. Add to cart?';
    if (lower.includes('snack')) return 'Chips, biscuits, or protein bars?';
    if (lower.includes('biryani')) return 'We have Fry Piece,Dum,Paneer,special and Veg types. Which one suits your hunger?'
    return 'Cool, adding that to your basket 🛒';
  };

  const sendMessage = (text) => {
    if (!text.trim()) return;

    const userMessage = { id: Date.now().toString(), from: 'user', text, time: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setBotTyping(true);

    setTimeout(() => {
      const reply = botReply(text);
      const botMessage = { id: (Date.now()+1).toString(), from: 'bot', text: reply, time: new Date() };
      setMessages(prev => [...prev, botMessage]);
      setBotTyping(false);
    }, 900);
  };

  const renderItem = ({ item }) => (
    <Animatable.View
      animation={item.from === 'user' ? 'fadeInRight' : 'fadeInLeft'}
      duration={400}
      style={[styles.bubble, item.from === 'user' ? styles.user : styles.bot]}
    >
      <Text style={styles.text}>{item.text}</Text>
      <Text style={styles.time}>{item.time.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</Text>
    </Animatable.View>
  );

  return (
    <KeyboardAvoidingView style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
        onLayout={() => flatListRef.current?.scrollToEnd({ animated: true })}
        contentContainerStyle={{ padding: 16 }}
      />

      {botTyping && (
        <Animatable.Text
          animation="pulse" iterationCount="infinite"
          style={styles.typing}
        >Bot is typing…</Animatable.Text>
      )}

      {/* Quick Reply Chips */}
      <View style={styles.quickRow}>
        {quickReplies.map((qr) => (
          <TouchableOpacity key={qr} style={styles.chip} onPress={() => sendMessage(qr)}>
            <Text style={styles.chipText}>{qr}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Type a message…"
          value={input}
          onChangeText={setInput}
          onSubmitEditing={() => sendMessage(input)}
        />
        <TouchableOpacity style={styles.sendBtn} onPress={() => sendMessage(input)}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f8f8' },
  bubble: {
    maxWidth: '90%',
    padding: 12,
    marginVertical: 2,
    borderRadius: 20,
  },
  user: {
    alignSelf: 'flex-end',
    backgroundColor: '#4CAF50',
  },
  bot: {
    alignSelf: 'flex-start',
    backgroundColor: '#e0e0e0',
  },
  text: { fontSize: 16, color: '#000' },
  time: { fontSize: 11, color: '#555', marginTop: 4, alignSelf: 'flex-end' },
  inputRow: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    marginBottom:40
  },
  input: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  sendBtn: {
    marginLeft: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  quickRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    marginBottom: 4,
  },
  chip: {
    backgroundColor: '#d1f2eb',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  chipText: { color: '#1b5e20', fontWeight: '600' },
  typing: {
    marginLeft: 16,
    marginBottom: 8,
    color: '#777',
    fontStyle: 'italic',
  },
});
