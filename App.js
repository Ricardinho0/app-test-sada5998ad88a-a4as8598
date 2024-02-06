import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import { AuthProvider } from './src/context/auth';
import Routes from './src/routes';
import { Theme } from './src/theme';
import { useFonts } from 'expo-font';
import 'react-native-gesture-handler';
import 'moment/dist/locale/pt-br'
import moment from 'moment';
import Toast from 'react-native-toast-message';
export default function App() {
  moment.locale('pt-br')
  NavigationBar.setBackgroundColorAsync(Theme.papper);
  NavigationBar.setButtonStyleAsync("dark");
  return (
    <AuthProvider>
      <StatusBar backgroundColor={'transparent'} />
      <Routes />
      <Toast />
    </AuthProvider>
  );
}
