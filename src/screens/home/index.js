import { StatusBar } from 'expo-status-bar';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { SlideButton } from '../../components/SlideButton';
import { Theme } from '../../theme';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={{ width: 45 }}>
          <Text>
            <AntDesign name="menu-unfold" size={22} />
          </Text>
        </TouchableOpacity>
        <Image source={require('../../assets/images/logo-black.png')} resizeMode='contain' style={styles.logo} />
        <TouchableOpacity style={styles.btnUser}>
          <Text>
            <FontAwesome5 name="user" size={22} />
          </Text>
        </TouchableOpacity>
      </View>
        <Text style={styles.textMain}>FORÇA DE VENDA</Text>
        </View>
      <View style={{
        width: '100%',
        padding: 2,
        backgroundColor: Theme.papper,
        borderRadius: 50
      }}>
        <SlideButton onChange={() => navigation.navigate('order')}/>
      </View>
    </View>
  );
}