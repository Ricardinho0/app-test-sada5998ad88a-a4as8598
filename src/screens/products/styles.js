import { StyleSheet } from 'react-native';
import { Theme } from '../../theme';
import Constants from 'expo-constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.background,
    padding: 10,
    paddingTop: Constants.statusBarHeight + 10
  },
  headerContainer: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textSearch: {
    fontSize: 20
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  textInoutContainer: {
    padding: 10,
    backgroundColor: Theme.papper,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    borderRadius: Theme.border.radius
  },
  textInput: {
    flex: 1
  },
  btnBarcode: {
    backgroundColor: Theme.primary,
    padding: 10,
    borderRadius: Theme.border.radius,
    marginLeft: 10
  },
  productsListItem: {
    padding: 10,
    width: '100%',
    backgroundColor: Theme.papper,
    borderRadius: Theme.border.radius,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  containerImg: {
    padding: 10,
    backgroundColor: Theme.background,
    borderRadius: Theme.border.radius,
    width: 90,
    height: 90,
  },
  productImage: {
    width: 70,
    height: 70,
    borderRadius: Theme.border.radius
  },
  itemRigth: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingHorizontal: 10,
    gap: 10
  },
  itemRigthContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10
  },
  containerAmoutItem: {
    width: 100,
    height: 40,
    alignItems: 'center',
    gap: 10,
    padding: 10,
    backgroundColor: Theme.background,
    borderRadius: Theme.border.radius,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btnAAmount: {
    
  },
  productText: {
    fontSize: 15,
    fontWeight: '500',
    maxWidth: '60%'
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  btnAddOrder: {
    padding: 10,
    backgroundColor: Theme.primary,
    borderRadius: Theme.border.radius
  }
});
