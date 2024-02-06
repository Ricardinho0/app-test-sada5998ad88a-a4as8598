import { StyleSheet } from 'react-native';
import { Theme } from '../../theme';
// import { Theme } from '../../theme';


export const styles = StyleSheet.create({
  container: {  
    padding: 10,
    maxHeight: 120
  },
  textMain: {
    fontSize: 20
  },
  categorieItem: {
    padding: 10,
    marginRight: 10,
    borderRadius: Theme.border.radius,
    width: 80
  },
  categorieImage: {
    width: '100%',
    height: 50,
    borderRadius: Theme.border.radius
  },
  categorieText: {
    textAlign: 'center',
    marginTop: 5,
    fontWeight: '500'
  }
});
