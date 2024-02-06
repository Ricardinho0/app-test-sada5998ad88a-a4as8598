import { View, Text } from "react-native"

import { GestureDetector, Gesture } from "react-native-gesture-handler"
import Animated, {
    useSharedValue,
    withSpring,
    withTiming,
    runOnJS,
    useAnimatedStyle,
    SlideInDown,
    SlideOutDown,
    SlideOutRight,
    SlideInRight,
} from "react-native-reanimated"

import { styles, SHEET_WHIDTH, SHEET_OVER_DRAG } from "./styles"
import { Feather, FontAwesome6 } from "@expo/vector-icons"
import { useEffect } from "react"

export function SlideButton({ onChange }) {
    const offset = useSharedValue(0)

    const pan = Gesture.Pan()
        .onChange((event) => {
            const offsetDelta = event.changeX + offset.value
            const clamp = Math.max(-SHEET_OVER_DRAG, offsetDelta)

            offset.value = offsetDelta > 0 ? offsetDelta : withSpring(clamp)
        })
        .onFinalize(() => {
            if (offset.value < SHEET_WHIDTH / 3) {
            } else {
                offset.value = withTiming(SHEET_WHIDTH, {}, () => {
                    runOnJS(onChange)()
                })
            }
            offset.value = withSpring(0)
        })

    const translateY = useAnimatedStyle(() => ({
        transform: [{ translateX: offset.value }],
    }))

    return (
        <GestureDetector gesture={pan}>
            <Animated.View
                style={[styles.container, translateY]}
                entering={SlideInRight.springify().damping(15)}
                exiting={SlideOutRight}
            >
                <View style={[styles.containerItem, { justifyContent: 'space-between' }]}>
                    <View style={styles.containerItem}>
                        <View style={styles.circle}>
                            <Feather name="plus" size={22} />
                        </View>
                        <Text style={styles.text}>Novo pedido</Text>
                    </View>
                    <FontAwesome6 name="chevron-right" style={{ marginRight: 15 }} size={17} color="black" />
                </View>
            </Animated.View>
        </GestureDetector>
    )
}