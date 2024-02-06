import { StyleSheet } from 'react-native';
import { Theme } from '../../theme';
import Constants from 'expo-constants'
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 10,
    padding: 15,
    backgroundColor: Theme.background,
    justifyContent: 'space-between'
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
  btnLogout: {
    padding: 10,
    width: '100%',
    borderWidth: 1,
    borderRadius: Theme.border.radius,
    borderColor: Theme.error.main
  },
  btnLogoutText: {
    color: Theme.error.main,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500'
  }
});
