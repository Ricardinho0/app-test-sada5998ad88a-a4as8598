
import { StyleSheet } from 'react-native';
import { Theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
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
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: '500'
  },
  itemClients: {
    padding: 15,
    borderRadius: Theme.border.radius
  }
});
