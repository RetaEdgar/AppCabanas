import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleLogin = () => {
    if (correo && contrasena) {
      navigation.replace('Main'); // Reemplaza con tu pantalla principal (drawer, home, etc.)
    } else {
      alert('Por favor, ingresa correo y contraseña.');
    }
  };

  const handleRegister = () => {
    navigation.navigate('Register'); // Asegúrate de tener esta pantalla definida en tu navigator
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>CORREO:</Text>
        <TextInput
          style={styles.input}
          value={correo}
          onChangeText={setCorreo}
          placeholder="usuario@ejemplo.com"
          placeholderTextColor="#555"
        />

        <Text style={styles.label}>Contraseña:</Text>
        <TextInput
          style={styles.input}
          value={contrasena}
          onChangeText={setContrasena}
          placeholder="********"
          placeholderTextColor="#555"
          secureTextEntry
        />

        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleRegister} style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Crear usuario</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#c9b697', // fondo beige
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      backgroundColor: '#f1f1f1', // fondo blanco
      width: '85%',
      padding: 25,
      borderRadius: 20,
      borderWidth: 4,
      borderColor: '#4a6843', // borde verde oscuro
    },
    label: {
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom: 6,
      color: '#000',
    },
    input: {
      borderWidth: 2,
      borderColor: '#000',
      borderRadius: 20,
      paddingHorizontal: 15,
      paddingVertical: 8,
      marginBottom: 16,
      backgroundColor: '#fff',
      color: '#000',
    },
    button: {
      backgroundColor: '#4a6843',
      padding: 12,
      borderRadius: 20,
      marginTop: 10,
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 16,
    },
    secondaryButton: {
      marginTop: 12,
      padding: 10,
      borderRadius: 20,
      backgroundColor: '#8fa987',
    },
    secondaryButtonText: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: '600',
    },
  });
  