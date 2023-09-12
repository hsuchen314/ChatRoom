import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';

const MoodReport = () => {
    return (
        <View style={styles.container}>
            <Text style={{ ...styles.topic, position: 'absolute', top: 120, left: 60, zIndex: 1 }}>心情報表</Text>
            <Image style={styles.Image1} source={require('./assets/chat_second.png')} />
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
});
export default MoodReport;