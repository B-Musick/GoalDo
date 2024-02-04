import { useState } from 'react';
import Header from '../components/Header';

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
  
function HomeScreen() {
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
export default HomeScreen;