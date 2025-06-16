import React, { useState } from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const cabins = [
  {
    id: '1',
    title: 'Cabaña El Bosque',
    description:
      'Acogedora cabaña en medio del bosque con chimenea y vistas impresionantes.',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '2',
    title: 'Cabaña Lago Azul',
    description:
      'Cabaña frente al lago con muelle privado y zona para fogatas.',
    image:
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '3',
    title: 'Cabaña Montaña Alta',
    description:
      'Hermosa cabaña en la montaña ideal para desconectarse y disfrutar la naturaleza.',
    image:
      'https://images.unsplash.com/photo-1445820132581-27b805aef553?auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '4',
    title: 'Cabaña Sol y Río',
    description:
      'Cabaña con vista al río y acceso a actividades acuáticas y senderismo.',
    image:
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=500&q=60',
  },
];

const Home = ({ navigation }) => {
  const [favoriteCabins, setFavoriteCabins] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFavorite = (cabin) => {
    if (favoriteCabins.find((item) => item.id === cabin.id)) {
      setFavoriteCabins(favoriteCabins.filter((item) => item.id !== cabin.id));
    } else {
      setFavoriteCabins([...favoriteCabins, cabin]);
    }
  };

  const filteredCabins = cabins.filter((cabin) =>
    cabin.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Lista de Cabañas</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar Cabaña..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredCabins}
        keyExtractor={(item) => item.id}
        numColumns={2} // para mantener dos columnas
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate('CabinDetails', {
                title: item.title,
                description: item.description,
                image: item.image,
              })
            }
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity
              onPress={() => toggleFavorite(item)}
              style={{ alignSelf: 'center', marginTop: 6 }}
            >
              <Icon
                name={favoriteCabins.find((c) => c.id === item.id) ? 'star' : 'star-outline'}
                size={28}
                color="#FFD700"
              />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Favorites', { favoriteCabins, toggleFavorite })}
        style={{ marginTop: 10, alignSelf: 'center' }}
      >
        <Text style={styles.favoriteLink}>Ver Favoritos</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D2B48C', // beige claro estilo Monitoreo
    padding: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
    color: '#5D4037',
    textAlign: 'center',
  },
  searchInput: {
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#8D6E63',
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#4E342E',
    marginBottom: 16,
    shadowColor: '#8D6E63',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  card: {
    backgroundColor: '#D7CCC8',
    padding: 12,
    borderRadius: 8,
    width: '48%',
    margin: '1%',
    borderWidth: 1,
    borderColor: '#8D6E63',
    // centramos contenido verticalmente
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 6,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4E342E',
    textAlign: 'center',
  },
  favoriteLink: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4E342E',
  },
});

export default Home;
