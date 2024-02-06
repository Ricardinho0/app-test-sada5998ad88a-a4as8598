import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Feather, FontAwesome6 } from "@expo/vector-icons";
import { Picker } from '@react-native-picker/picker';
import { useState } from "react";
import { GlobalStyles } from "../../components/GlobalStyles";
import { Theme } from "../../theme";
import { ProductsList } from "../products";

const payments = [
    { value: 'money', label: 'Dinheiro' },
    { value: 'pix', label: 'PIX' },
    { value: 'credit', label: 'Cartão de Credito' },
]
const Order = ({ navigation }) => {

    const [formPayment, setFormPayment] = useState('money');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FontAwesome6 name="chevron-left" size={22} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>Novo pedido</Text>
                <View></View>
            </View>

            <View style={styles.body}>
                <TouchableOpacity style={styles.clientContainer} onPress={() => navigation.navigate('clients')}>
                    <Text style={styles.titleClient}>Cliente</Text>
                    <FontAwesome6 name="chevron-right" size={18} color="black" />
                </TouchableOpacity>
                <View style={styles.paymentContainer}>
                    <Text style={styles.titleClient}>Forma de pagamento</Text>
                    <Picker
                        mode="dropdown"
                        style={styles.picker}
                        selectedValue={formPayment}
                        onValueChange={(itemValue, itemIndex) =>
                            setFormPayment(itemValue)
                        }>
                        {
                            payments.map(({ label, value }) => <Picker.Item key={value} label={label} value={value} />)
                        }
                    </Picker>
                </View>
                <View style={styles.orderHeader}>
                    <Text style={styles.titleClient}>Items do pedido</Text>
                    <TouchableOpacity style={[GlobalStyles.btn, { paddingHorizontal: 30 }]} onPress={() => navigation.navigate('Products')}>
                        <Text style={{ color: 'white' }}>Adicionar items</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={{ flex: 1, paddingHorizontal: 10 }}>
                    {ProductsList.map((a, index) => {
                        return (
                            <ProductsListItem item={a} key={index} onPressItem={() =>{}} />
                        )
                    })}
                </ScrollView>
            </View>
            <View style={styles.footerOrder}>
                <View style={[styles.itemFooter, { marginTop: 15 }]}>
                    <Text style={styles.titleClient}>Valor do pedido</Text>
                    <Text style={styles.titleClient}>R$ 158,63</Text>
                </View>
                <View style={GlobalStyles.divider} />
                <View style={styles.itemFooter}>
                    <Text style={styles.titleClient}>Descontos/Acréscimo</Text>
                    <Text style={styles.titleClient}>R$ 00,00</Text>
                </View>
                <TouchableOpacity style={[GlobalStyles.btn, { paddingVertical: 15, marginTop: 5 }]} onPress={() => navigation.navigate('finish-order')}>
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>
                        Finaliza Pedido
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default Order;




const ProductsListItem = ({ onPressItem, item }) => {

    const [count, setCount] = useState(1)

    const AddItemAmmount = () => {
        setCount(_count => _count + 1)
    }

    const RemoveItemAmmount = () => {
        setCount(_count => _count > 1 ? (_count - 1) : _count)
    }

    return (
        <View style={styles.productsListItem} onPress={onPressItem}>
            <View style={styles.containerImg}>
                <Image style={styles.productImage} src={item.img} />
            </View>
            <View style={styles.itemRigth}>
                <View style={styles.itemRigthContainer}>
                    <View style={{ flex: 1 }}>
                        <Text
                            numberOfLines={3}
                            style={styles.productText}>{item.name} </Text>
                        <Text
                            numberOfLines={3}
                            style={styles.discountsItem}>(-R$ 0,00) 1x 2,75 </Text>
                    </View>
                    <TouchableOpacity style={styles.containerAmoutItem}>
                        <TouchableOpacity onPress={RemoveItemAmmount} style={{ height: 40, justifyContent: 'center' }}>
                            <Feather name="minus" color="black" size={22} />
                        </TouchableOpacity>
                        <Text style={{ color: 'black' }}>{count}</Text>
                        <TouchableOpacity onPress={AddItemAmmount} style={{ height: 40, justifyContent: 'center' }}>
                            <Feather name="plus" color="black" size={22} />
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>
                <View style={[styles.itemRigthContainer, { alignItems: 'flex-end' }]}>
                    <Text
                        numberOfLines={3}
                        style={styles.productPrice}>R$29,99</Text>
                </View>
            </View>
        </View>
    )
}