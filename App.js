import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Details from './src/screens/details';
import Home from './src/screens/home';

export default function App() {
  const [fontsLoaded] = useFonts({
    "Antonio-Medium": require("./assets/fonts/Antonio-Medium.ttf"),
    "Spartan-Bold": require("./assets/fonts/LeagueSpartan-Bold.ttf"),
    "Spartan-Regular": require("./assets/fonts/LeagueSpartan-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Font is loading...</Text>;
  }

  
  return (
    <>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='light' />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
