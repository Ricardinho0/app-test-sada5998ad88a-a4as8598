import { Entypo, FontAwesome5 } from "@expo/vector-icons"
import { FlatList, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { GlobalStyles } from "../../components/GlobalStyles"
import { Theme } from "../../theme"
import { useState } from "react"
import { ProductsList } from "../products"

function formatarData() {
    const hoje = new Date();

    const dia = String(hoje.getDate()).padStart(2, '0');
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const ano = hoje.getFullYear();

    const hora = String(hoje.getHours()).padStart(2, '0');
    const minutos = String(hoje.getMinutes()).padStart(2, '0');
    const dataFormatada = `${dia}/${mes}/${ano} ${hora}:${minutos}`;
    return dataFormatada;
}

const SalesScreen = () => {

    const [filter, setFilter] = useState("Todas")

    return (
        <SafeAreaView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <Text style={styles.title}>Gerenciar vendas</Text>
            </View>
            <FlatList
                data={['Todas', 'Sincronizadas', 'Não sincronizadas']}
                horizontal
                style={{ maxHeight: 40, marginTop: 20 }}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => setFilter(item)}
                            style={[GlobalStyles.btn,
                            {
                                marginHorizontal: 5,
                                minWidth: 100,
                                borderWidth: 1,
                                borderColor: Theme.primary,
                                backgroundColor: filter === item ? Theme.primary : Theme.background
                            }]}>
                            <Text style={{ fontWeight: 'bold', color: filter === item ? 'white' : 'black', textAlign: 'center' }}>{item}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
            <ScrollView style={{ flex: 1, marginTop: 20 }} showsVerticalScrollIndicator={false}>
                {
                    ProductsList.map((__, index) => {
                        return (
                            <View key={__.name} style={styles.itemList}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={[styles.textSync, { color: index % 2 === 0 ? "red" : Theme.primary }]}>
                                        {index % 2 === 0 ? "Não sincronizado" : "Sincronizado"}
                                    </Text>
                                    <Text >{formatarData()}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={styles.textSync}>Pagamento</Text>
                                    <Text>PIX</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <TouchableOpacity style={[GlobalStyles.btn,
                                    {
                                        backgroundColor: index % 2 === 0 ? Theme.primary : Theme.background,
                                        minWidth: 120,
                                        flexDirection: 'row', alignItems: 'center', gap: 10
                                    }
                                    ]}>
                                        {index % 2 === 0 ? <FontAwesome5 name="sync" size={14} color="white"/> : <Entypo name="share" size={14}/>}
                                        <Text style={[
                                            styles.syncBtnText, { color: index % 2 === 0 ? Theme.background : Theme.primary, }
                                        ]}>
                                            {index % 2 === 0 ? "Sincronizar" : "Compartilhar"}
                                        </Text>
                                    </TouchableOpacity>
                                    <Text style={styles.price}>R$ 24,58</Text>
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </SafeAreaView>
    )
}


export default SalesScreen