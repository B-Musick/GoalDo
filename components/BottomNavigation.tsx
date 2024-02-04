import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../pages/HomeScreen';
import ToDoScreen from '../pages/ToDoScreen';
import GoalsScreen from '../pages/GoalsScreen';
import CalendarScreen from '../pages/CalendarScreen';

const Tab = createBottomTabNavigator();
function BottomNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}/>
        <Tab.Screen 
            name="ToDo" 
            component={ToDoScreen} 
            options={{
                tabBarLabel: 'To Do',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="format-list-checks" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen 
            name="Goals" 
            component={GoalsScreen} 
            options={{
                tabBarLabel: 'Goals',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="flag-checkered" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen 
            name="Calendar" 
            component={CalendarScreen} 
            options={{
                tabBarLabel: 'Calendar',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="calendar-blank" color={color} size={26} />
                ),
            }}
        />
    </Tab.Navigator>
  );
}

export default BottomNavigation;