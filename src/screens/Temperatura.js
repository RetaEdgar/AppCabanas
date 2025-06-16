import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AireAcondicionado = () => {
  const [aireEncendido, setAireEncendido] = useState(false);
  const [tempActual] = useState(27); // valor fijo para la demo
  const [tempAire, setTempAire] = useState(25);

  const toggleAire = () => setAireEncendido(!aireEncendido);

  const aumentarTemp = () => setTempAire(tempAire + 1);
  const disminuirTemp = () => setTempAire(tempAire - 1);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>ACTUAL</Text>
      <View style={styles.dataBox}>
        <Text style={styles.dataText}>{tempActual}°</Text>
      </View>

      <Text style={styles.label}>AIRE ACONDICIONADO</Text>
      <View style={styles.dataBox}>
        <Text style={styles.dataText}>{tempAire}°</Text>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity onPress={toggleAire} style={styles.button}>
          <Icon name="power" size={40} color={aireEncendido ? 'green' : 'black'} />
        </TouchableOpacity>

        <TouchableOpacity onPress={aumentarTemp} style={styles.button}>
          <Icon name="arrow-up-circle-outline" size={40} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={disminuirTemp} style={styles.button}>
          <Icon name="arrow-down-circle-outline" size={40} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D2B48C',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 16,
    marginBottom: 6,
  },
  dataBox: {
    backgroundColor: '#F1F1F1',
    width: 140,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  dataText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  controls: {
    marginTop: 20,
    gap: 20,
    alignItems: 'center',
  },
  button: {
    marginVertical: 5,
  },
});

export default AireAcondicionado;
