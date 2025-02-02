import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

export default function AITeacher() {
  const [lessons] = useState([
    { id: '1', title: 'Stocks 101', content: 'What is a stock?' },
    { id: '2', title: 'Diversification', content: 'Why spread investments?' },
  ]);

  return (
    <View style={{ backgroundColor: '#000', flex: 1, padding: 16 }}>
      <Text style={{ color: '#FFF', fontSize: 24 }}>AI Teacher</Text>
      <FlatList
        data={lessons}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ padding: 16, backgroundColor: '#2A2A2A', marginVertical: 8 }}>
            <Text style={{ color: '#8641F4' }}>{item.title}</Text>
            <Text style={{ color: '#FFF' }}>{item.content}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}