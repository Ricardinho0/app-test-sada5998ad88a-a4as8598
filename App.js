import React from 'react';
import { StatusBar, View } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import { AuthProvider } from './src/context/auth';
import Routes from './src/routes';
import 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import { Theme } from './src/theme';

export default function App() {
  NavigationBar?.setBackgroundColorAsync(Theme.papper);
  NavigationBar?.setButtonStyleAsync("dark");

  return (
    <View style={{ flex: 1 }}>
      <AuthProvider>
        <StatusBar barStyle='dark-content' translucent backgroundColor={'transparent'} />
        <Routes />
        <Toast />
      </AuthProvider>
    </View>
  );
}

