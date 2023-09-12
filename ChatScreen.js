import React, { useState, useRef, useEffect, useContext } from 'react';
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import axios from 'axios';
import { AntDesign } from '@expo/vector-icons';
import { UserIdContext } from './App';
import { useNavigation } from '@react-navigation/native';

const ChatScreen = () => {
    const [inputText, setInputText] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const scrollViewRef = useRef();
    const { user_id, setUser_id } = useContext(UserIdContext);


    const sendMesssage = async () => {
        try {
            const response = await axios.post(
                'https://api.openai.com/v1/engines/text-davinci-003/completions',
                {
                    prompt: inputText,
                    max_tokens: 200,
                },
                {
                    headers: {
                        Authorization: 'Bearer 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',
                        'Content-Type': 'application/json',
                    },
                }
            );

            const reply = response.data.choices[0].text;
            setChatHistory([...chatHistory, { user: inputText, bot: reply }]);
            setInputText('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
        scrollViewRef.current.scrollToEnd();
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'position' : 'height'}
            style={styles.container}
            keyboardVerticalOffset={70}
        >
            <View style={styles.chatContainer} >
                <ScrollView
                    ref={scrollViewRef}
                    contentContainerStyle={styles.chatContnet}
                    onContentSizeChange={() => scrollViewRef.current.scrollToEnd()}
                >
                    <Text style={styles.dateHeader}>{currentDate}</Text>
                    {chatHistory.map((entry, index) => (
                        <View key={index} style={styles.chatEntry}>
                            {entry.user && (
                                <View style={styles.messageUserBubble}>
                                    <Text style={styles.userText}>{entry.user}</Text>
                                </View>
                            )}
                            {entry.bot && (
                                <View style={styles.messageBotBubble}>
                                    <Text style={styles.botText}>Bot:{entry.bot}</Text>
                                </View>
                            )}

                        </View>
                    ))}
                </ScrollView>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="輸入訊息"
                    value={inputText}
                    onChangeText={(text) => setInputText(text)}
                />
                <TouchableOpacity style={styles.sendButton} onPress={sendMesssage}>
                    <AntDesign name='arrowright' size={24} color='white' />
                </TouchableOpacity>
            </View>
            <StatusBar style='auto' />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCF2E6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    chatContainer: {
        flex: 1,
        padding: 16,
        marginBottom: 60,
    },
    chatContnet: {
        minWidth: '100%',
        overflow: 'hidden',
    },
    chatEntry: {
        marginBottom: 8,
    },
    inputContainer: {
        backgroundColor: '#E6DCC6',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        borderTopWidth: 1,
        borderTopColor: '#DDDDDD',
        position: 'absolute',
        top: 670,
        height: 82,
        width: 390,
    },
    input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
        backgroundColor: '#D6C9BB',
        borderRadius: 20,
        marginRight: 8,
        marginBottom: 22,
    },
    sendButton: {
        backgroundColor: '#CD9A99',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginBottom: 22,
    },
    botText: {
        fontSize: 18,
    },
    userText: {
        fontSize: 18,
    },
    messageBotBubble: {
        backgroundColor: '#CD9A99',
        alignSelf: 'flex-start',
        maxWidth: '70%',
        borderRadius: 15,
        marginBottom: 8,
        padding: 8,
        marginLeft: 8,
    },
    messageUserBubble: {
        backgroundColor: '#D6C9BB',
        alignSelf: 'flex-end',
        maxWidth: '70%',
        borderRadius: 15,
        marginBottom: 8,
        padding: 8,
        marginRight: 8,
    },
    dateHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'blue',
        textAlign: 'center',
    },
});
export default ChatScreen;