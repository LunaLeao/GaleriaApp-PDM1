// src/screens/SettingsScreen/SettingsScreen.tsx
import React from 'react';
import { View, Text, ScrollView } from 'react-native'; // Use ScrollView se a lista puder crescer
import styles from './SettingsScreen.style.ts'; // Importa os estilos locais

export const SettingsScreen = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: styles.container.backgroundColor }}>
      <View style={styles.container}>
        <Text style={styles.title}>Configurações</Text>

        {/* Exemplo de item de configuração */}
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Tema do Aplicativo</Text>
          <Text style={styles.settingValue}>Escuro (Padrão)</Text>
          {/* Aqui você poderia adicionar um Switch ou botão */}
        </View>

        {/* Exemplo 2 */}
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Notificações</Text>
          <Text style={styles.settingValue}>Ativadas</Text>
          {/* Aqui você poderia adicionar um Switch */}
        </View>

        {/* Exemplo 3 */}
         <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Versão do App</Text>
          <Text style={styles.settingValue}>1.0.0</Text>
        </View>

        {/* Adicione mais itens de configuração aqui */}

      </View>
    </ScrollView>
  );
};