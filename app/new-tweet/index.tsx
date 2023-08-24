import { useState } from 'react';
import {
    StyleSheet, Text, View,
    Image,
    TextInput,
    Pressable,
    SafeAreaView
} from 'react-native';
import React from 'react';
import { Link, useNavigation, useRouter } from 'expo-router';

const NewTweet = () => {

    const [text, setText] = useState("")

    const user = {
        id: 'u1',
        username: 'VadimNotJustDev',
        name: 'Vadim',
        image:
            'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png',
    }
    const router = useRouter()
    const onTweet = () => {
        console.warn(text)
        setText("")
        router.back();
    }
    return (
        <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Link href="../" style={{ fontSize: 18 }}>Cancel</Link>
                    <Pressable onPress={onTweet} style={styles.button}>
                        <Text style={styles.buttonText}>Tweet</Text>
                    </Pressable>
                </View>
                <View style={styles.inputContainer}>
                    <Image source={{ uri: user.image }} style={styles.image} />
                    <TextInput
                        placeholder="What's happening"
                        multiline
                        numberOfLines={5}
                        value={text}
                        onChangeText={(newValue) => setText(newValue)}
                        style={{ flex: 1 }} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default NewTweet

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop:20,
        flex: 1
    },
    inputContainer: {
        flexDirection: 'row',

    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    button: {
        backgroundColor: '#1C9BF0',
        padding: 5,
        paddingHorizontal: 20,
        borderRadius: 50
    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
    },
    image: {
        width: 50,
        borderRadius: 50,
        aspectRatio: 1,
        marginRight: 10,
    }
})