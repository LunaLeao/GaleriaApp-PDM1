import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#3f3f3fff',
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 4,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: 'white'
  },
  date: {
    fontSize: 12,
    color: 'white',
  },
});

export default styles;