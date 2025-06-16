import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

// Importa la imagen local desde assets
import mapaa from '../../assets/mapaa.png'; // ajusta la ruta según tu estructura de carpetas

const Ubicacion = () => {
  const direccion = "Av. Reforma 123, Ciudad de México, México";

  return (
    <View style={styles.container}>
      <ImageBackground
        source={mapaa}          // usa la imagen local aquí
        style={styles.map}
        resizeMode="cover"
      >
        <View style={styles.direccionBox}>
          <Text style={styles.direccionText}>{direccion}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',  // para que el contenido quede abajo, opcional
  },
  direccionBox: {
    backgroundColor: 'rgba(255,255,255,0.9)',  // un poco transparente para ver el fondo
    padding: 16,
    margin: 16,
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  direccionText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Ubicacion;
