import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import LottieView from 'lottie-react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { useEffect } from "react";

const FinalizaOrder = ({ navigation }) => {

    const opacityView = useSharedValue(0)

    const opacity = useAnimatedStyle(() => {
        return{
            opacity: opacityView.value
        }
    })

    useEffect(() => {
        setTimeout(() => {
            opacityView.value = withSpring(1)
        },500)
    },[])

    return (
        <View style={{ flex: 1, position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
            <LottieView
                speed={.6}
                style={[{
                    width: Dimensions.get('screen').height,
                    height: Dimensions.get('screen').height
                }]}
                source={require('../../assets/Animates/splash.json')} autoPlay loop={false} />
            <Animated.View style={[StyleSheet.absoluteFillObject, { flex: 1, alignItems: 'center', justifyContent: 'center' }, opacity]}>
                <Text style={{
                    color: 'white',
                    fontSize: 22,
                    fontWeight: 'bold'
                }}>
                    NÚMERO DO PEDIDO
                </Text>
                <Text style={{
                    color: 'white',
                    fontSize: 60,
                    fontWeight: 'bold'
                }}>
                    55
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={{ minWidth: 200, backgroundColor: '#fff', padding: 10, marginTop: 50, borderRadius: 10 }}
                >
                    <Text style={{
                        color: 'black',
                        fontSize: 22,
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}>
                        Entendi
                    </Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    )
}

export default FinalizaOrder;