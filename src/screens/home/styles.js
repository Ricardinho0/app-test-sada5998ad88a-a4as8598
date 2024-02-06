import { StyleSheet } from 'react-native';
import { Theme } from '../../theme';
import Constants from 'expo-constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.background,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingTop: Constants.statusBarHeight + 10
  },
  headerContainer: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  btnUser: {
    padding: 10,
    borderRadius: 4,
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.papper
  },
  logo: {
    width: 100,
    height: 40
  },
  textMain: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30
  }
});
