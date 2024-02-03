/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Header from './components/Header';
import { useState } from 'react';
// import type {PropsWithChildren} from 'react';
import {
  Button,
  TextInput,
  SectionList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  
  // StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

function App(): React.JSX.Element {
  const [colorMode, setColorMode] = useState(useColorScheme() === 'dark');
  const [inputText, setInputText] = useState('');

  const backgroundStyle = {
    backgroundColor: colorMode ? Colors.darker : Colors.lighter,
  };

  const toDoData = [
    {
      title: 'Goals',
      data: ['Run', 'Program', 'Play'],
    }
  ];
  
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={colorMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
       <Header />
       <Button
          title='colorMode'
          onPress={() => {
            setColorMode(!colorMode);
          }}
        />
        <TextInput
          style={{height: 40}}
          placeholder="What to do ..."
          onChangeText={newText => setInputText(newText)}
          defaultValue={inputText}
        />
        <SectionList
          sections={toDoData}
          keyExtractor={(item, index) => item + index}
          renderSectionHeader={({section: {title}}) => (
            <Text>{title}</Text>
          )}
          renderItem={({item}) => (
            <View>
              <Text>{item}</Text>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
