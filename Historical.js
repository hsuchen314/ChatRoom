import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React, { useState, useContext } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const Historical = () => {

    const navigation = useNavigation();
    const currentDate = new Date();
    const [nextButtonPressed, setNextButton] = useState(true);
    const [score, setScore] = useState(30);
    const route = useRoute();
    const { ID2 } = route.params;

    const handleNextButton = () => {
        setNextButton(!nextButtonPressed)
    }
    const handleExitButton = () => {
        navigation.navigate('Second')
    }
    const getEmojiScore = () => {
        if (score < 20) {
            return require('./assets/emoji(5).png')
        } else if (score > 19 && score < 40) {
            return require('./assets/emoji(4).png')
        } else if (score > 39 && score < 60) {
            return require('./assets/emoji(3).png')
        } else if (score > 59 && score < 80) {
            return require('./assets/emoji(2).png')
        } else {
            return require('./assets/emoji(1).png')
        }
    }
    const getTextScore = () => {
        if (score < 20) {
            return '糟透了'
        } else if (score > 19 && score < 40) {
            return '烏雲密布'
        } else if (score > 39 && score < 60) {
            return '平平淡淡'
        } else if (score > 59 && score < 80) {
            return '感覺還挺好'
        } else {
            return '心情超級棒'
        }
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
                <Text style={{ ...styles.dateText, position: 'absolute', top: 273, left: 110 }}>{currentDate.toLocaleString('en-US', optionsY)}</Text>
            )}
            {nextButtonPressed && (
                <Text style={{ ...styles.dateText, position: 'absolute', top: 273, left: 192 }}>{currentDate.toLocaleString('en-US', optionsM)}</Text>
            )}
            {nextButtonPressed && (
                <Text style={{ ...styles.dateText, position: 'absolute', top: 273, left: 247 }}>{currentDate.toLocaleString('en-US', optionsD)}</Text>
            )}
            {nextButtonPressed && (
                <Text style={{ ...styles.dateText, position: 'absolute', top: 220, left: 110 }}>王曉慧</Text>
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
            {nextButtonPressed && (
                <Text style={{ ...styles.dateText, fontWeight: 'bold', position: 'absolute', top: 360, left: 110 }}>{getTextScore()}</Text>
            )}
            {nextButtonPressed && (
                <Image
                    source={getEmojiScore()}
                    style={styles.emojiImage}
                    resizeMode='contain'
                />
            )}
            {!nextButtonPressed && (
                <Image style={styles.Image1} source={require('./assets/moody(2).png')} resizeMode='contain' />
            )}
            {!nextButtonPressed && (
                <TouchableOpacity onPress={handleNextButton} style={styles.backButton}>
                    <AntDesign name='arrowleft' size={38} color='#BDBCBC' />
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
        width: 260,
        height: 130,
        marginTop: 300,
        marginRight: 20,
    },
    scrollView2: {
        width: 260,
        height: 140,
        marginBottom: 230,
        marginRight: 5,
    },
    scrollView3: {
        width: 260,
        height: 125,
        position: 'absolute',
        bottom: 160,
        left: 65,
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
    emojiImage: {
        position: 'absolute',
        top: 310,
        right: 80,
        width: '15%',
        height: '15%'
    },
    dateText: {
        color: '#A28A82',
        fontSize: 22,
    },
    nextButton: {
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 95,
        right: 25,
        height: 20,
        width: 60,
    },
    backButton: {
        position: 'absolute',
        bottom: 88,
        left: 30,
    },
    exitedButton: {
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 95,
        right: 30,
        height: 20,
        width: 60,
    },
    scrollViewContent: {
        width: 260,
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