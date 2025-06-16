import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Icon from 'react-native-vector-icons/Ionicons';
import Ubicacion from '../screens/Ubicacion';
import Monitoreo from '../screens/Monitoreo';
import AireAcondicionado from '../screens/Temperatura';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: { backgroundColor: '#C8E6C9' },
        drawerLabelStyle: { fontSize: 16 },
        headerStyle: { backgroundColor: '#4CAF50' },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 22,
        },
        headerTitleAlign: 'center',
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Inicio',
          drawerIcon: ({ color, size }) => (
            <Icon name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
      name="Ubicacion"
      component={Ubicacion}
      options={{
        title: 'Ubicacion',
        drawerIcon: ({ color, size }) => (
          <Icon name="home-outline" size={size} color={color} />
        ),
      }}
      />
      <Drawer.Screen
      name="Monitoreo"
      component={Monitoreo}
      options={{
        title: 'Monitoreo',
        drawerIcon: ({ color, size }) => (
          <Icon name="home-outline" size={size} color={color} />
        ),
      }}
      />
      <Drawer.Screen
      name="Temperatura"
      component={AireAcondicionado}
      options={{
        title: 'Temperatura',
        drawerIcon: ({ color, size }) => (
          <Icon name="home-outline" size={size} color={color} />
        ),
      }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
