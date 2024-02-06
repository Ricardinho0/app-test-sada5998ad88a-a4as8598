import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Image, Dimensions, ImageBackground, TouchableOpacity } from "react-native";
import { CameraView, Camera } from "expo-camera/next";
import { GlobalStyles } from "../../components/GlobalStyles";

export default function BarcodeScreen({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
        const getCameraPermissions = async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        };
        getCameraPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        navigation.navigate("product-detail")
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <View style={[StyleSheet.absoluteFillObject, styles.scannContainer]}>
                <View style={styles.widthScann}>
                    <TouchableOpacity style={[GlobalStyles.btn, styles.btnBarr]}>
                        <Text style={{ fontWeight: '500', color: 'black', textAlign: 'center' }}>Digitar codigo</Text>
                    </TouchableOpacity>
                </View>
                <View style={[{ width: '40%', height: '100%' }]}>
                    <View style={{ backgroundColor: '#00000050', width: '100%', height: '10%' }}></View>
                    <View style={styles.bgscann}>
                        <View style={styles.line} />
                    </View>
                    <View style={{ backgroundColor: '#00000050', width: '100%', height: '10%' }}></View>
                </View>
                <View style={styles.widthScann}></View>
            </View>
            <CameraView
                onBarcodeScanned={handleBarCodeScanned}
                barcodeScannerSettings={{
                    barCodeTypes: ["qr", "pdf417"],
                }}
                style={StyleSheet.absoluteFillObject}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        position: 'relative',
        alignContent: 'center'
    },
    bgscann: {
        height: '80%',
        width: '100%',
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    widthScann: {
        height: '100%',
        width: '30%',
        backgroundColor: '#00000050',
        justifyContent: 'center',
        alignItems: 'center'
    },
    scannContainer: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        zIndex: 10,
        position: 'absolute',
        alignItems: 'center',
        backgroundColor: '#00000050'
    },
    line: {
        height: '80%',
        width: 1,
        borderWidth: 1,
        borderColor: 'red'
    },
    btnBarr: {
        transform: [{rotate: '90deg'}],
        backgroundColor: 'white',
        minWidth: 200,
        padding: 15
    }
});