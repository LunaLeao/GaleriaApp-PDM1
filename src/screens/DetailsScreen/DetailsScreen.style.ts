import { StyleSheet, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#121212',
  },
  
  fullImage: {
    width: screenWidth,
    height: screenHeight * 0.6,
    
  },

  detailsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#ffff',
  },

  info: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 4,
  },
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default styles;