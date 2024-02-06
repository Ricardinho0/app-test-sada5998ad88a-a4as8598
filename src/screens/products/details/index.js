import { Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles";
import { Feather, FontAwesome6 } from '@expo/vector-icons';
import { useState } from "react";
import { Theme } from "../../../theme";
import { GlobalStyles } from "../../../components/GlobalStyles";

const ProductDeails = ({ navigation }) => {

    const [count, setCount] = useState(1)

    const AddItemAmmount = () => {
        setCount(_count => _count + 1)
    }

    const RemoveItemAmmount = () => {
        setCount(_count => _count > 1 ? (_count - 1) : _count)
    }


    return (
        <View style={styles.container}>
            <View style={styles.imgView}>
                <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
                    <FontAwesome6 name="chevron-left" size={22} color="black" />
                </TouchableOpacity>
                <Image style={styles.img} src="https://www.omo.com/images/h0nadbhvm6m4/3hLESWJrkFOkUHynG48RgY/c93481f76cff0e2a3c8af640395b1a3a/dGVhc2VyLXN0YWlucmVtb3Zlci5qcGc/512w-384h/omo-tira-manchas-extra-poder.jpg" />
            </View>
            <View style={styles.containerDetails}>
                <View style={styles.headerDetails}>
                    <Text
                        numberOfLines={3}
                        style={styles.textNameProduct}
                    >
                        OMO TIRA MANCHAS EXTRA PODER
                    </Text>
                    <TouchableOpacity style={styles.containerAmoutItem}>
                        <TouchableOpacity onPress={RemoveItemAmmount} style={{ height: 40, justifyContent: 'center' }}>
                            <Feather name="minus" color="white" size={24} />
                        </TouchableOpacity>
                        <Text style={{ color: 'white' }}>{count}</Text>
                        <TouchableOpacity onPress={AddItemAmmount} style={{ height: 40, justifyContent: 'center' }}>
                            <Feather name="plus" color="white" size={24} />
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>
                <Text
                    numberOfLines={5}
                    style={styles.textDescriptionProduct}
                >
                    OMO Tira Manchas Extra Poder funciona como um sabão em pó ou líquido, mas
                    com ação poderosa contra manchas difíceis. Para tratamentos localizados, temos a opção em gel e espuma.
                </Text>
                <View style={styles.details}>
                    <View style={[styles.detailRow, { backgroundColor: Theme.grey[100] }]}>
                        <Text style={styles.detailRowText}>Categoria</Text>
                        <Text>Categoria 1</Text>
                    </View>
                    <View style={[styles.detailRow]}>
                        <Text style={styles.detailRowText}>Estoque</Text>
                        <Text>3</Text>
                    </View>
                    <View style={[styles.detailRow, { backgroundColor: Theme.grey[100] }]}>
                        <Text style={styles.detailRowText}>Codigo interno</Text>
                        <Text>26548</Text>
                    </View>
                    <View style={[styles.detailRow]}>
                        <Text style={styles.detailRowText}>Código de barras</Text>
                        <Text>609963086689</Text>
                    </View>
                    <View style={GlobalStyles.divider}/>
                    <View style={{ padding: 10 }}>
                    <Text style={styles.detailRowText}>Observação</Text>
                    </View>
                </View>
            </View>
            <View style={styles.footerDetails}>
                <Text style={styles.price}>R$ 34,59</Text>
                <TouchableOpacity style={[GlobalStyles.btn, { paddingHorizontal: 30 }]} onPress={() => navigation.navigate('order')}>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: '300' }}>Adicionar ao pedido</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProductDeails;