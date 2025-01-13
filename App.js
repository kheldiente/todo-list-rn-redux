import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodoListScreen from './src/screen/todoList/TodoListScreen';
import { store } from './src/app/store';
import { Provider } from 'react-redux';
import { screenKeys } from './src/screen/screenKeys';
import AddTodoScreen from './src/screen/addTodo/AddTodoScreen';
import CalendarScreen from './src/screen/calendar/CalendarScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={screenKeys.MY_TODO_LIST}
            component={TodoListScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={screenKeys.ADD_TODO}
            component={AddTodoScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={screenKeys.CALENDAR}
            component={CalendarScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
