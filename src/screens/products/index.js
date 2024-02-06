import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons';
import { Theme } from '../../theme';
import Categories from '../../components/Categories';
import { useState } from 'react';

export const ProductsList = [
  { name: 'Arroz Básico saboroso feito com MAGGI', img: 'https://www.receitasnestle.com.br/sites/default/files/srh_recipes/7c44045d2e8577819cb76b2b404902dd.jpg', },
  { name: 'Açúcar Refinado Especial União Pct 1kg', img: 'https://m.media-amazon.com/images/I/61zsoyAdgCL.jpg', },
  { name: 'Carne 1kg', img: 'https://espetinhodesucesso.com.br/wp-content/uploads/2023/08/1-kg-de-carne-serve-quantas-pessoas.jpg', },
  { name: 'Feijão Carioca Kicaldo 1kg ', img: 'https://propao.agilecdn.com.br/4491_1.jpg?v=27-246342608', },
  { name: 'Bebida Alcoólica Vodka Stolinov Frutas Vermelhas 900 ML Original', img: 'https://down-br.img.susercontent.com/file/br-11134207-7r98q-llut2b09312jfb', },
  { name: 'Drink Pronto Xeque Mate Lata 355ml', img: 'https://xequematebebidas.com.br/wp-content/uploads/2023/02/XM_foto_produto_1327x918px-e1675600254691.png', },
]

export default function ProductsScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.textSearch}>
            Buscar pela descrição, referência ou código interno
          </Text>
          <View style={styles.inputContainer}>
            <View style={styles.textInoutContainer}>
              <Feather name="search" size={20} style={{ marginRight: 10 }} />
              <TextInput
                placeholder='buscar produto...'
                style={styles.textInput} />
            </View>
            <TouchableOpacity style={styles.btnBarcode} onPress={() => navigation.navigate('barcode')}>
              <FontAwesome5 name="barcode" size={22} color={Theme.background} />
            </TouchableOpacity>
          </View>
        </View>
        <Categories />
        {ProductsList.map((a, i) => <ProductsListItem item={a} key={i} onPressItem={() => navigation.navigate('product-detail')} />)}
      </View>
    </ScrollView >
  );
}

const ProductsListItem = ({ onPressItem, item }) => {

  const [count, setCount] = useState(1)

  const AddItemAmmount = () => {
    setCount(_count => _count + 1)
  }

  const RemoveItemAmmount = () => {
    setCount(_count => _count > 1 ? (_count - 1) : _count)
  }

  return (
    <TouchableOpacity style={styles.productsListItem} onPress={onPressItem}>
      <View style={styles.containerImg}>
        <Image style={styles.productImage} src={item.img} />
      </View>
      <View style={styles.itemRigth}>
        <View style={styles.itemRigthContainer}>
          <Text
            numberOfLines={3}
            style={styles.productText}>{item.name}</Text>
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
          <TouchableOpacity style={styles.btnAddOrder}>
            <Text style={{ color: Theme.background }}>Adicionar ao pedido</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
}