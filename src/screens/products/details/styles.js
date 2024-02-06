import { StyleSheet, Dimensions } from 'react-native';
import { Theme } from '../../../theme';

const heightScreen = Dimensions.get('screen').height

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.papper,
    justifyContent: 'space-between'
  },
  imgView: {
    height: heightScreen * 0.35,
    position: 'relative'
  },
  img: {
    width: '100%',
    height: '100%'
  },
  containerDetails: {
    flex: 1,
    marginTop: -25,
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    backgroundColor: Theme.papper,
    padding: 10
  },
  btnBack: {
    position: 'absolute',
    left: 20,
    top: 35,
    zIndex: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.papper,
    borderRadius: Theme.border.radius
  },
  headerDetails:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10
  },
  textNameProduct: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1
  },
  containerAmoutItem: {
    width: 120,
    height: 40,
    alignItems: 'center',
    gap: 10,
    padding: 10,
    backgroundColor: Theme.primary,
    borderRadius: Theme.border.radius,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textDescriptionProduct: {
    fontSize: 13,
    marginTop: 10,
    color: Theme.grey[700]
  },
  details: {
    marginTop: 10
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10
  },
  detailRowText: {
    fontWeight: '500'
  },
  footerDetails: {
    padding: 10,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold'
  }
});
