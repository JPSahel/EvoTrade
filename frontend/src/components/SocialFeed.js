import React from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';

const socialPosts = [
  { id: '1', user: '@CryptoPro', gain: '+15%', strategy: 'Tech Stocks' },
  { id: '2', user: '@ESGQueen', gain: '+8%', strategy: 'Green Energy' },
];

export default function SocialFeed() {
  return (
    <View style={{ backgroundColor: '#000', flex: 1 }}>
      <FlatList
        data={socialPosts}
        renderItem={({ item }) => (
          <View style={{ padding: 16, borderBottomColor: '#2A2A2A', borderBottomWidth: 1 }}>
            <Text style={{ color: '#FFF' }}>{item.user}</Text>
            <Text style={{ color: '#00FF00' }}>{item.gain}</Text>
            <TouchableOpacity style={{ backgroundColor: '#8641F4', padding: 8, marginTop: 8 }}>
              <Text style={{ color: '#FFF' }}>Copy Trade</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
