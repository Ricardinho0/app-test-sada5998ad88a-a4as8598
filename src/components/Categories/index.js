import { View, FlatList, Text, Image, TouchableOpacity } from "react-native"
import { styles } from "./styles";
import { Theme } from "../../theme";
import { useState } from "react";

const categoriesArr = [
    { name: 'Limpeza', img: 'https://medlimp.com.br/wp-content/uploads/2021/07/produtos-de-limpeza-profissional.jpg', id: 1},
    { name: 'Categoria', img: 'https://www.hiperzoo.com.br/media/produtos/31183ecom_400x400.webp', id: 2},
    { name: 'Bebida', img: 'https://images.tcdn.com.br/img/img_prod/645811/bebida_ice_51_maca_verde_275ml_ice_51_6893_1_ca72857e1c5e74a4293dd6cc77a86195.jpg', id: 3},
    { name: 'Carne', img: 'https://www.sabornamesa.com.br/media/k2/items/cache/7b98703f48b0025160f2b9b5aad2a874_XL.jpg', id: 4},
    { name: 'Categoria', img: 'https://www.receitasnestle.com.br/sites/default/files/srh_recipes/7c44045d2e8577819cb76b2b404902dd.jpg', id: 5},
    { name: 'Categoria', img: 'https://www.hiperzoo.com.br/media/produtos/31183ecom_400x400.webp', id: 6},
]

const Categories = () => {

    const [currentCategorie, seTcurrentCategorie] = useState()

    return (
        <View style={{ marginTop: 10, padding: 10 }}>
            <Text style={styles.textMain}>Categorias</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                style={styles.container}
                horizontal
                data={categoriesArr}
                renderItem={({ item }, index) => {
                    return (
                        <TouchableOpacity onPress={() => seTcurrentCategorie(item.id)}>
                            <View style={[styles.categorieItem, { 
                                backgroundColor: currentCategorie === item.id ? Theme.primary : Theme.papper,
                             }]} key={index}>
                                <Image style={styles.categorieImage} src={item.img} />
                            </View>
                            <Text  style={styles.categorieText}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default Categories;