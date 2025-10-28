// App.tsx
import 'react-native-gesture-handler'; // Import no topo (como no index.js)
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RootNavigator } from './src/navigation/RootNavigator';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar barStyle={'dark-content'} />
        
        <RootNavigator />
        
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;