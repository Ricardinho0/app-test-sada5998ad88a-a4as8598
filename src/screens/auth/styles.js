
import { StyleSheet, Dimensions } from 'react-native';
import { Theme } from '../../theme';
import Constants from 'expo-constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 15,
    backgroundColor: Theme.background,
    justifyContent: 'center',
    alignContent: 'center',
    height: Dimensions.get('screen').height - (Constants.statusBarHeight + 20)
  },
  mainText: {
    fontSize: 45,
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Theme.grey[700]
  },
  textSearch: {
    fontSize: 20
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
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
  textLogin: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  }
});
