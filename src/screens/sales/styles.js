import { StyleSheet } from 'react-native';
import { Theme } from '../../theme';
import Constants from 'expo-constants'
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 10,
    padding: 15,
    backgroundColor: Theme.background
  },
  body: {
    flex: 1,
    marginTop: 20,
    gap: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: '500'
  },
  itemList: {
    padding: 10,
    borderRadius: Theme.border.radius,
    backgroundColor: Theme.papper,
    marginVertical: 10,
    gap: 10
  },
  textSync: {
    fontWeight: 'bold'
  },
  syncBtnText: {
    fontWeight: 'bold',
    textAlign: 'center'
  },
  price: {
    fontWeight: 'bold',
    fontSize: 20
  }
});
