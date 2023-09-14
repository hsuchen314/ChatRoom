import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { UserIdContext } from './App';

const Historical = () => {

    const navigation = useNavigation();
    const currentDate = new Date();
    const [nextButtonPressed, setNextButton] = useState(true);
    const { user_id, setUser_id } = useContext(UserIdContext);

    const handleNextButton = () => {
        setNextButton(!nextButtonPressed)
    }
    const handleExitButton = () => {
        navigation.navigate('Second')
    }
    const optionsY = {
        year: 'numeric'
    }
    const optionsM = {
        month: '2-digit'
    }
    const optionsD = {
        day: '2-digit'
    }

    return (
        <View style={styles.container}>
            {nextButtonPressed && (
                <Image style={styles.Image1} source={require('./assets/moody(1).png')} resizeMode='contain' />
            )}
            {nextButtonPressed && (
                <TouchableOpacity onPress={handleNextButton} style={styles.nextButton}>
                    <Text style={{ color: 'transparent' }}>next</Text>
                </TouchableOpacity>
            )}
            {nextButtonPressed && (
                <Text style={{ ...styles.dateText, position: 'absolute', top: 280, left: 92 }}>{currentDate.toLocaleString('en-US', optionsY)}</Text>
            )}
            {nextButtonPressed && (
                <Text style={{ ...styles.dateText, position: 'absolute', top: 280, left: 163 }}>{currentDate.toLocaleString('en-US', optionsM)}</Text>
            )}
            {nextButtonPressed && (
                <Text style={{ ...styles.dateText, position: 'absolute', top: 280, left: 212 }}>{currentDate.toLocaleString('en-US', optionsD)}</Text>
            )}
            {nextButtonPressed && (
                <Text style={{ ...styles.dateText, position: 'absolute', top: 233, left: 100 }}>葛小明</Text>
            )}
            {nextButtonPressed && (
                <View style={styles.scrollView}>
                    <ScrollView contentContainerStyle={styles.scrollViewContent}>
                        <Text style={styles.scrollText}>
                            這邊是放入資料庫的資料，放在這裡的字都會顯示在"描述"的框框內。
                        </Text>
                    </ScrollView>
                </View>
            )}
            {!nextButtonPressed && (
                <Image style={styles.Image1} source={require('./assets/moody(2).png')} resizeMode='contain' />
            )}
            {!nextButtonPressed && (
                <TouchableOpacity onPress={handleNextButton} style={styles.backButton}>
                    <Text style={{ color: 'transparent' }}>back</Text>
                </TouchableOpacity>
            )}
            {!nextButtonPressed && (
                <TouchableOpacity onPress={handleExitButton} style={styles.exitedButton}>
                    <Text style={{ color: 'transparent' }}>exited</Text>
                </TouchableOpacity>
            )}
            {!nextButtonPressed && (
                <View style={styles.scrollView2}>
                    <ScrollView contentContainerStyle={styles.scrollViewContent}>
                        <Text style={styles.scrollText}>
                            這邊是放入資料庫的資料，放在這裡的字都會顯示在"建議"的框框內。
                        </Text>
                    </ScrollView>
                </View>
            )}
            {!nextButtonPressed && (
                <View style={styles.scrollView3}>
                    <ScrollView contentContainerStyle={styles.scrollViewContent}>
                        <Text style={styles.scrollText}>
                            這邊是放入資料庫的資料，放在這裡的字都會顯示在"注意事項"的框框內。
                        </Text>
                    </ScrollView>
                </View>
            )}
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
    scrollView: {
        width: 240,
        height: 120,
        marginTop: 275,
        marginRight: 50,
    },
    scrollView2: {
        width: 240,
        height: 125,
        marginBottom: 225,
        marginRight: 5,
    },
    scrollView3: {
        width: 240,
        height: 105,
        position: 'absolute',
        bottom: 200,
        left: 95,
    },
    topic: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#7D6357',
    },
    Image1: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    dateText: {
        color: '#A28A82',
        fontSize: 20,
    },
    nextButton: {
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 155,
        right: 10,
        height: 20,
        width: 60,
    },
    backButton: {
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 135,
        left: 10,
        height: 25,
        width: 50,
    },
    exitedButton: {
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 95,
        right: 50,
        height: 50,
        width: 25,
    },
    scrollViewContent: {
        width: 240,
        marginTop: -10,
    },
    scrollText: {
        color: '#A28A82',
        fontSize: 20,
        marginVertical: 10,
        flexWrap: 'wrap',
    }
});
export default Historical;