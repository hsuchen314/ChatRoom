import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import React, { useContext } from 'react';
import { GetCurrentTime } from './App';
import { useNavigation } from '@react-navigation/native';

const Historical = () => {

    const [time, setTime] = useContext(GetCurrentTime);
    const navigation = useNavigation();
    const handleTimeButton = () => {
        navigation.navigate('MoodReport');
    }

    return (
        <View style={styles.container}>
            <Text style={{ ...styles.topic, position: 'absolute', top: 120, left: 60, zIndex: 1 }}>歷史紀錄</Text>
            <Image style={styles.Image1} source={require('./assets/chat_second.png')} />
            <Image style={styles.Image2} source={require('./assets/chat_first(2).png')} />
            <Image style={styles.Image3} source={require('./assets/chat_first(1).png')} />
            <TouchableOpacity onPress={handleTimeButton} style={{ position: 'absolute', top: 140, left: 60, zIndex: 1 }}>
                <Text>{time}</Text>
            </TouchableOpacity>
            <StatusBar style='auto' />
        </View>
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
        fontSize: 28,
        fontWeight: 'bold',
        color: '#7D6357',
    },
    Image1: {
        height: 650,
        width: 650,
        position: 'absolute',
        top: 10,
        left: -100,
    },
    Image2: {
        height: 270,
        width: 270,
        position: 'absolute',
        top: -30,
        right: -20,
        zIndex: -1,
    },
    Image3: {
        height: 300,
        width: 300,
        position: 'absolute',
        bottom: 70,
        left: -40,
        zIndex: -1,
    },
    timeText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#7D6357',
    },
});
export default Historical;