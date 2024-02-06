import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles"
import { Theme } from "../../theme";
import { StorageService } from "../../service/storage/auth";

const SettingsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Preferências</Text>
            </View>
            <TouchableOpacity style={styles.btnLogout} onPress={() => StorageService.logout()}>
                <Text style={styles.btnLogoutText}>
                    Sair
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default SettingsScreen;