import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles";
import { Feather, FontAwesome6 } from "@expo/vector-icons";
import { Theme } from "../../theme";

const nomesAleatorios = [
    "João Silva",
    "Maria Santos",
    "José Oliveira",
    "Ana Pereira",
    "Carlos Ferreira",
    "Mariana Costa",
    "Pedro Martins",
    "Sofia Rodrigues",
    "Paulo Fernandes",
    "Catarina Carvalho"
];

const clientes = [];

for (let i = 1; i <= 10; i++) {
    const nomeAleatorio = nomesAleatorios[Math.floor(Math.random() * nomesAleatorios.length)];
    clientes.push({ id: i, name: nomeAleatorio });
}
const Clients = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name="x" size={22} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>Clientes</Text>
                <View></View>
            </View>
            <View style={{ gap: 5, marginTop: 25 }}>
            {
                clientes.map(({ name, id },_index) => (
                    <TouchableOpacity style={[styles.itemClients, {
                        backgroundColor: _index % 2 === 0 ? Theme.papper : Theme.background
                     }]}>
                        <Text key={id}>{name}</Text>
                    </TouchableOpacity>
                ))
            }
            </View>
        </ScrollView>
    )
}

export default Clients;