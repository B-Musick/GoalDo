import React from 'react';
import BottomNavigation from './components/BottomNavigation';
import { NavigationContainer } from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
}

export default App;
