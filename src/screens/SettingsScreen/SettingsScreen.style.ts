// src/screens/SettingsScreen/styles.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#E0E0E0', // Texto claro
    marginBottom: 20, // Mais espaço abaixo do título
  },
  settingItem: {
    marginBottom: 15,
  },
  settingLabel: {
    fontSize: 18,
    color: '#BDBDBD', // Texto cinza claro
    marginBottom: 5,
  },
  settingValue: {
    fontSize: 16,
    color: '#9E9E9E', // Texto cinza mais escuro
  },
  // Adicione outros estilos conforme necessário (ex: para botões, switches)
});

export default styles;