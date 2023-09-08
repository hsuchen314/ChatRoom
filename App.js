import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, Image, Alert } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SecondScreen from './Second';
import InterestPage from './InterestPage';
import ChatScreen from './ChatScreen';
import { useEffect, useState } from 'react';

const Stack = createStackNavigator();

const Home = () => {
  const navigation = useNavigation();
  const [initialVisit, setInitialVisit] = useState(true);

  console.log('initialVisit 的值為: ', initialVisit)

  const handleAccountButtonPress = () => {
    navigation.navigate('Second');
  }
  const handleStartButtonPress = () => {
    if (initialVisit === true) {
      navigation.navigate('InterestPage');
    } else {
      navigation.navigate('ChatScreen');
    }
    setInitialVisit(false)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.topic}>解憂聊天室</Text>
      <TouchableOpacity onPress={handleStartButtonPress} style={styles.buttonStart}>
        <Text style={styles.textStart}>開始聊天</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAccountButtonPress} style={styles.buttonAccount}>
        <Text style={styles.textAccount}>帳號</Text>
      </TouchableOpacity>
      <Image style={styles.Image1} source={require('./assets/chat_first(1).png')} />
      <Image style={styles.Image2} source={require('./assets/chat_first(2).png')} />
      <StatusBar style="auto" />
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: '首頁',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Second"
          component={SecondScreen}
          options={{
            title: '個人資料',
            headerTintColor: '#7D6357',
            headerStyle: {
              backgroundColor: '#FCF2E6',
            }
          }}
        />
        <Stack.Screen
          name="InterestPage"
          component={InterestPage}
          options={{
            title: '偏好選擇',
            headerStyle: {
              backgroundColor: '#FCF2E6',
            },
            headerTitleStyle: {
              fontSize: 20,
            },
            headerBackTitleStyle: {
              fontSize: 20,
            },
            headerTintColor: '#7D6357',
          }}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={({ navigation }) => ({
            title: '聊天機器人',
            headerStyle: {
              backgroundColor: '#FCF2E6',
            },
            headerTitleStyle: {
              fontSize: 20,
            },
            headerBackTitleStyle: {
              fontSize: 20,
            },
            headerTintColor: '#7D6357',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Home');
                }}
              >
                <Text style={{ fontSize: 20, color: '#7D6357', marginLeft: 12 }}>離開</Text>
              </TouchableOpacity>
            )
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCF2E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topic: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#CD9A99',
    position: 'absolute',
    top: 200,
    textAlign: 'center',
    zIndex: 1,
  },
  buttonStart: {
    backgroundColor: '#CD9A99',
    padding: 10,
    borderRadius: 25,
    height: 64,
    width: 200,
    position: 'absolute',
    top: 530,
    zIndex: 1,
  },
  textStart: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonAccount: {
    backgroundColor: '#D6C9BB',
    padding: 10,
    borderRadius: 25,
    height: 52,
    width: 126,
    position: 'absolute',
    top: 610,
    zIndex: 1,
  },
  textAccount: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 8,
    paddingLeft: 8,
  },
  Image1: {
    width: 300,
    height: 300,
    position: 'absolute',
    top: 300,
    left: -90,
  },
  Image2: {
    width: 200,
    height: 200,
    position: 'absolute',
    top: 40,
    right: -20,
  }
});
export default App;