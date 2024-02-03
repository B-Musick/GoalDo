import React from 'react';
import {Text, View} from 'react-native';

function Header(): React.JSX.Element {
  const title = "GoalDo";

  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default Header;