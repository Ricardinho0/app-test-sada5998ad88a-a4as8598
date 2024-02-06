import { StyleSheet } from 'react-native';
import { Theme } from '../../theme';


export const GlobalStyles = StyleSheet.create({
  divider: {
    width: '100%',
    borderWidth: 1,
    borderColor: Theme.grey[500],
    borderStyle: 'dashed'
  },
  btn: {
    padding: 10,
    backgroundColor: Theme.primary,
    borderRadius: Theme.border.radius
  }
});
