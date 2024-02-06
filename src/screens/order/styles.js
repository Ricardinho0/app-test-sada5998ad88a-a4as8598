import { StyleSheet } from 'react-native';
import { Theme } from '../../theme';
import Constants from 'expo-constants'
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    // padding: 15,
    backgroundColor: Theme.background
  },
  body: {
    flex: 1,
    marginTop: 5,
    gap: 10,
    paddingHorizontal: 15
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: '500'
  },
  clientContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Theme.papper,
    padding: 10,
    borderRadius: Theme.border.radius
  },
  paymentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: -10
  },
  titleClient: {
    fontSize: 18,
    fontWeight: '500'
  },
  picker: {
    width: 150
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: -10
  },
  productsListItem: {
    padding: 10,
    flex: 1,
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
    width: 80,
    height: 80,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 10
  },
  itemRigth: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingLeft: 10,
    gap: 10

  },
  itemRigthContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 5
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
    fontWeight: '500'
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  discountsItem: {
    fontSize: 11,
    color: Theme.grey[700]
  },
  footerOrder: {
    backgroundColor: Theme.papper,
    gap: 10,
    padding: 15,
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
