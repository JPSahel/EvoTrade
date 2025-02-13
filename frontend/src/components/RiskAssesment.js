import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';

export default function RiskAssessment() {
  const riskScore = 75; // From backend API
  return (
    <View style={styles.container}>
      <ProgressCircle
        style={styles.chart}
        progress={riskScore / 100}
        progressColor={riskScore > 50 ? '#00FF00' : '#FF0000'}
      />
      <Text style={styles.score}>{riskScore}/100</Text>
      <Text style={styles.tip}>Tip: Diversify with ETFs!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', backgroundColor: '#000', padding: 20 },
  chart: { height: 200, width: 200 },
  score: { color: '#FFF', fontSize: 24, marginTop: 16 },
  tip: { color: '#8641F4', marginTop: 8 },
});
