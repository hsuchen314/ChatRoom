import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const Historical = () => {

    const navigation = useNavigation();
    const currentDate = new Date();
    const [nextButtonPressed, setNextButton] = useState(true);
    const [score, setScore] = useState(null);
    const [userName, setUserName] = useState('');
    const [describe, setDescribe] = useState('');
    const [suggest, setSuggest] = useState('');
    const [attention, setAttention] = useState('');
    const route = useRoute();
    const { ID } = route.params;

    useEffect(() => {
        if (ID) {
            console.log(`ID 存在Historical且值為: ${ID}`);
            fetch(`http://172.20.10.2:5000/api/get_score?user_id=${ID}`)
                .then(response => response.json())
                .then(data => {
                    setScore(data.score);
                })
                .catch(error => {
                    console.error('Error fetching score:', error);
                });
        } else {
            console.log('ID 不存在Historical或為空');
            // 在這裡執行需要在 ID 不存在或為空時執行的代碼
        }
    }, [ID]);

    useEffect(() => {
        if (ID) {
            fetch(`http://172.20.10.2:5000/api/get_name?user_id=${ID}`)
                .then(response => response.json())
                .then(data => {
                    setUserName(data.user_name);
                })
                .catch(error => {
                    console.error('Error fetching user name:', error);
                });
        }
    }, [ID]);

    useEffect(() => {
        if (ID) {
            console.log(`ID 存在Historical且值為: ${ID}`);

            // 獲取心情報告
            fetch(`http://172.20.10.2:5000/api/get_report?user_id=${ID}`, {
                method: 'POST', // 使用POST請求
            })
                .then(response => response.json())
                .then(data => {
                    if (data.report) {
                        // 將心情報告字符串分割成不同部分
                        const reportParts = data.report.split('\n');
                        if (reportParts.length >= 4) {
                            setDescribe(reportParts[1].split(':')[1]);
                            setSuggest(reportParts[2].split(':')[1]);
                            setAttention(reportParts[3].split(':')[1]);
                            console.log('describe:', describe);
                            console.log('suggest:', suggest);
                            console.log('attention:', attention);
                        }
                    }
                })
                .catch(error => {
                    console.error('Error fetching emotion report:', error);
                });
        } else {
            console.log('ID 不存在Historical或為空');
            // 在這裡執行需要在 ID 不存在或為空时執行的代碼
        }
    }, [ID]);




    const handleNextButton = () => {
        setNextButton(!nextButtonPressed)
    }
    const handleExitButton = () => {
        navigation.navigate('Second', { ID: ID })
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
                <Text style={{ ...styles.dateText, position: 'absolute', top: 220, left: 110 }}>{userName}</Text>
            )}
            {nextButtonPressed && (
                <View style={styles.scrollView}>
                    <ScrollView contentContainerStyle={styles.scrollViewContent}>
                        <Text style={styles.scrollText}>
                            {describe}
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
                            {suggest}
                        </Text>
                    </ScrollView>
                </View>
            )}
            {!nextButtonPressed && (
                <View style={styles.scrollView3}>
                    <ScrollView contentContainerStyle={styles.scrollViewContent}>
                        <Text style={styles.scrollText}>
                            {attention}
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