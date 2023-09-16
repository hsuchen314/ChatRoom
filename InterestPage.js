import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const InterestPage = () => {
    const navigation = useNavigation();
    const [isPressed, setIsPressed] = useState(true);
    const [nextPressed, setNextPressed] = useState(true);
    const [endPressed, setEndPressed] = useState(true);
    const [foodPressed, setFoodPressed] = useState(true);
    const [makeupPressed, setMakeupPressed] = useState(true);
    const [techPressed, setTechPressed] = useState(true);
    const [outdoorPressed, setOutdoorPressed] = useState(true);
    const [sportPressed, setSportPressed] = useState(true);
    const route = useRoute();
    const { ID } = route.params;//從App.js傳過來的ID，ID的值就是App.js的userId

    const handleCheckButtonPress = () => {
        navigation.navigate('ChatScreen', { ID: ID });//依據'興趣Pressed'的值，將選擇的資料回傳(等於false是被選擇的)
        //依據isPressed的值，判斷回傳到資料庫的內容是學生(isPressed==true)or上班族(isPressed==false)
    }
    const handleJobPress = () => {
        setIsPressed(!isPressed);
    }
    const handleNextPress = () => {
        setNextPressed(!nextPressed);
    }
    const handleEndPress = () => {
        setEndPressed(!endPressed);
    }
    const foodPress = () => {
        setFoodPressed(!foodPressed);
    }
    const makeupPress = () => {
        setMakeupPressed(!makeupPressed);
    }
    const techPress = () => {
        setTechPressed(!techPressed);
    }
    const outdoorPress = () => {
        setOutdoorPressed(!outdoorPressed);
    }
    const sportPress = () => {
        setSportPressed(!sportPressed);
    }

    return (
        <View style={styles.container}>
            <Image source={require('./assets/interest(1).png')}
                resizeMode='cover'
                style={styles.image1}
            />
            <Image source={require('./assets/interest(2).png')}
                style={styles.image2}
            />
            {nextPressed && endPressed && (
                <TouchableOpacity
                    onPress={() => {
                        if (isPressed == false) {
                            handleJobPress()
                        }
                    }}
                    style={styles.buttonS}
                >
                    <Image
                        style={styles.studentImage}
                        resizeMode='contain'
                        source={isPressed ? require('./assets/studentPicB.png') : require('./assets/studentPicD.png')}
                    />
                </TouchableOpacity>
            )}
            {nextPressed && endPressed && (
                <TouchableOpacity
                    onPress={() => {
                        if (isPressed) {
                            handleJobPress()
                        }
                    }}
                    style={styles.buttonW}
                >
                    <Image
                        style={styles.workerImage}
                        resizeMode='contain'
                        source={!isPressed ? require('./assets/workerPicB.png') : require('./assets/workerPicD.png')}
                    />
                </TouchableOpacity>
            )}
            {nextPressed && endPressed && (
                <Text style={styles.studentText}>學生</Text>
            )}
            {nextPressed && endPressed && (
                <Text style={styles.workerText}>上班族</Text>
            )}
            {nextPressed && endPressed && (
                <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
                    <AntDesign name='arrowright' size={42} color='#CD9A99' />
                </TouchableOpacity>
            )}
            {!nextPressed && endPressed && (
                <TouchableOpacity style={styles.backButton} onPress={handleNextPress}>
                    <AntDesign name='arrowleft' size={42} color='#CD9A99' />
                </TouchableOpacity>
            )}
            {!nextPressed && endPressed && (
                <TouchableOpacity
                    onPress={foodPress}
                    style={styles.buttonF}
                >
                    <Image
                        style={styles.interestImage}
                        resizeMode='contain'
                        source={foodPressed ? require('./assets/foodD.png') : require('./assets/foodB.png')}
                    />
                </TouchableOpacity>
            )}
            {!nextPressed && endPressed && (
                <TouchableOpacity
                    onPress={makeupPress}
                    style={styles.buttonM}
                >
                    <Image
                        style={styles.interestImage}
                        resizeMode='contain'
                        source={makeupPressed ? require('./assets/makeupD.png') : require('./assets/makeupB.png')}
                    />
                </TouchableOpacity>
            )}
            {!nextPressed && endPressed && (
                <TouchableOpacity
                    onPress={outdoorPress}
                    style={styles.buttonO}
                >
                    <Image
                        style={styles.interestImage}
                        resizeMode='contain'
                        source={outdoorPressed ? require('./assets/outdoorD.png') : require('./assets/outdoorB.png')}
                    />
                </TouchableOpacity>
            )}
            {!nextPressed && endPressed && (
                <TouchableOpacity
                    onPress={sportPress}
                    style={styles.buttonSport}
                >
                    <Image
                        style={styles.interestImage}
                        resizeMode='contain'
                        source={sportPressed ? require('./assets/sportD.png') : require('./assets/sportB.png')}
                    />
                </TouchableOpacity>
            )}
            {!nextPressed && endPressed && (
                <TouchableOpacity
                    onPress={techPress}
                    style={styles.buttonT}
                >
                    <Image
                        style={styles.interestImage}
                        resizeMode='contain'
                        source={techPressed ? require('./assets/techD.png') : require('./assets/techB.png')}
                    />
                </TouchableOpacity>
            )}
            {!nextPressed && endPressed && (
                <TouchableOpacity
                    onPress={handleEndPress}
                    style={styles.endButton}
                >
                    <Text style={styles.endText}>完成</Text>
                </TouchableOpacity>
            )}
            {!endPressed && (
                <Image
                    source={require('./assets/interest(3).png')}
                    resizeMode='contain'
                    style={styles.image3}
                />
            )}
            {!endPressed && (
                <TouchableOpacity
                    onPress={handleEndPress}
                    style={styles.cancleButton}
                >
                    <AntDesign name='close' size={40} color='black' />
                </TouchableOpacity>
            )}
            {!endPressed && (
                <TouchableOpacity
                    onPress={handleCheckButtonPress}
                    style={styles.checkButton}
                >
                    <AntDesign name='check' size={40} color='black' />
                </TouchableOpacity>
            )}
            {!endPressed && (
                <Text style={styles.confirmText}>是否保存當前設定?</Text>
            )}
            <StatusBar style='auto' />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image1: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    image2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
    },
    buttonS: {
        position: 'absolute',
        top: 300,
        left: 70,
    },
    buttonW: {
        position: 'absolute',
        top: 300,
        right: 70,
    },
    studentImage: {
        width: 100,
        height: 100,
    },
    workerImage: {
        width: 100,
        height: 100,
    },
    studentText: {
        fontSize: 20,
        fontWeight: 'bold',
        position: 'absolute',
        top: 405,
        left: 100,
        color: 'black',
    },
    workerText: {
        fontSize: 20,
        fontWeight: 'bold',
        position: 'absolute',
        top: 405,
        right: 90,
        color: 'black',
    },
    nextButton: {
        position: 'absolute',
        top: 435,
        right: 60,
    },
    backButton: {
        position: 'absolute',
        top: 435,
        left: 60,
    },
    buttonM: {
        position: 'absolute',
        top: 290,
        left: 65,
    },
    buttonO: {
        position: 'absolute',
        top: 290,
        left: 155,
    },
    buttonF: {
        position: 'absolute',
        top: 370,
        right: 115,
    },
    buttonSport: {
        position: 'absolute',
        top: 290,
        right: 65,
    },
    buttonT: {
        position: 'absolute',
        top: 370,
        left: 105,
    },
    endButton: {
        position: 'absolute',
        top: 443,
        right: 65,
    },
    endText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
    interestImage: {
        width: 80,
        height: 80,
    },
    image3: {
        width: 250,
        height: 100,
        position: 'absolute',
        top: 380,
    },
    cancleButton: {
        position: 'absolute',
        top: 415,
        left: 90,
    },
    checkButton: {
        position: 'absolute',
        top: 415,
        right: 93,
    },
    confirmText: {
        color: '#CD9A99',
        fontWeight: 'bold',
        fontSize: 28,
        position: 'absolute',
        top: 330,
    }
})

export default InterestPage