import React, { useState, useEffect, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UserIdContext } from './App';

const SecondScreen = () => {
    const navigation = useNavigation();
    const [nickname, setNickname] = useState('');
    const [birthday, setBirthday] = useState('');
    const [userData, setUserData] = useState({ name: '', birthdate: '' });
    const [user_id, setUser_id] = useContext(UserIdContext);

    useEffect(() => {
        fetch('https://rwfbjrfymkkuxbqcqjej.supabase.co/get-user-info/${user_id}')
            .then(response => response.json())
            .then(data => setUserData(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const handleUpdate = () => {
        console.log('Updated Nickname:', nickname);
        console.log('Update Birthday:', birthday);
        fetch('https://rwfbjrfymkkuxbqcqjej.supabase.co/update-user-info/${user_id}', {
            method: 'POST',
            header: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_name: nickname,
                birthday: birthday,
            }),
        })
            .then(response => response.json())
            .then(data => {
                setUserData(data);
            })
            .catch(error => console.error('Error', error));
    }
    const handleHistoricalButton = () => {
        navigation.navigate('Historical')
    }

    return (
        <View style={styles.container}>
            <Text style={{ ...styles.topic, position: 'absolute', top: 120, left: 60 }}>個人資料</Text>
            <Text style={styles.Textnickname}>暱稱:</Text>
            <TextInput
                style={styles.inputNickname}
                placeholder='請輸入暱稱'
                onChangeText={text => setNickname(text)}
                value={userData.user_name}
            />
            <Text style={styles.Textbirthday}>出生日期:</Text>
            <TextInput
                style={styles.inputBirthday}
                placeholder='MM/DD'
                onChangeText={text => setBirthday(text)}
                value={userData.birthdate}
            />
            <Text style={{ ...styles.topic, position: 'absolute', top: 270, left: 60 }}>主題更換</Text>
            <Text style={{ ...styles.topic, position: 'absolute', top: 325, left: 60 }}>偏好設定</Text>
            <TouchableOpacity
                onPress={handleHistoricalButton}
                style={{ position: 'absolute', top: 380, left: 60, zIndex: 1 }}
            >
                <Text style={styles.topic}>心情報表</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonUpdata} onPress={handleUpdate}>
                <Text style={styles.Textupdata}>更新資料</Text>
            </TouchableOpacity>
            <Image style={styles.Image1} source={require('./assets/chat_second.png')} />
            <Image style={styles.Image2} source={require('./assets/chat_first(2).png')} />
            <Image style={styles.Image3} source={require('./assets/chat_first(1).png')} />
            <StatusBar style='auto' />
        </View>
    );
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
        zIndex: 1,
    },
    Textnickname: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#A28A82',
        position: 'absolute',
        top: 170,
        left: 60,
        zIndex: 1,
    },
    Textbirthday: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#A28A82',
        position: 'absolute',
        top: 220,
        left: 60,
        zIndex: 1,
    },

    inputNickname: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        zIndex: 1,
        position: 'absolute',
        top: 170,
        left: 115,
        borderWidth: 2,
        height: 30,
        width: 120,
    },
    inputBirthday: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        zIndex: 1,
        position: 'absolute',
        top: 220,
        left: 160,
        borderWidth: 2,
        height: 30,
        width: 75,
    },
    buttonUpdata: {
        backgroundColor: '#CD9A99',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        position: 'absolute',
        bottom: 200,
        right: 40,
        zIndex: 1,
    },
    Textupdata: {
        color: '#7D6357',
        fontSize: 16,
        fontWeight: 'bold',
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
    }
});
export default SecondScreen;