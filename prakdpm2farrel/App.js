import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.centerText}>Teks di Tengah Layar</Text>

      {/* Dua kotak horizontal */}
      <View style={styles.flexContainer}>
        <View style={[styles.box, styles.boxLeft]} />
        <View style={[styles.box, styles.boxRight]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Latar belakang abu-abu terang
  },
  centerText: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%', // Mengatur lebar container untuk kotak
  },
  box: {
    width: 100,
    height: 100,
  },
  boxLeft: {
    backgroundColor: '#FF5733', // Warna bebas
  },
  boxRight: {
    backgroundColor: '#33FF57', // Warna bebas
  },
});
