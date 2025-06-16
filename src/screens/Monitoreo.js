import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const cabañas = [
  {
    id: '1',
    title: 'Cabaña 1',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60',
    temperatura: '26',
    humedad: '20',
  },
  {
    id: '2',
    title: 'Cabaña 2',
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=500&q=60',
    temperatura: '26',
    humedad: '20',
  },
];

const Monitoreo = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {cabañas.map((cabana) => (
        <View key={cabana.id} style={styles.cardContainer}>
          {/* Tarjeta estilo Home */}
          <View style={styles.card}>
            <Image source={{ uri: cabana.image }} style={styles.image} />
            <Text style={styles.title}>{cabana.title}</Text>
          </View>

          {/* Datos de temperatura y humedad */}
          <View style={styles.dataContainer}>
            <Text style={styles.label}>Temperatura:</Text>
            <View style={styles.dataBox}>
              <Text style={styles.dataText}>{cabana.temperatura}°</Text>
            </View>
            <Text style={styles.label}>Humedad:</Text>
            <View style={styles.dataBox}>
              <Text style={styles.dataText}>{cabana.humedad}%</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D2B48C',
    padding: 16,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#D7CCC8',
    padding: 12,
    borderRadius: 8,
    width: '50%',
    borderWidth: 1,
    borderColor: '#8D6E63',
    marginRight: 12,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 6,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4E342E',
    textAlign: 'center',
  },
  dataContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
    color: '#333',
  },
  dataBox: {
    backgroundColor: '#F1F1F1',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginBottom: 12,
  },
  dataText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
    color: '#888',
  },
});

export default Monitoreo;
