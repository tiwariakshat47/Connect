import { KeyboardAvoidingView, StyleSheet, TextInput, Pressable} from 'react-native';
import { Text, View } from '@/components/Themed';
import React, { useState } from 'react'
import { Link, useRouter } from 'expo-router'

export * from './actions/registerAction';


const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    //Handle press definition, temporarily is tabs until i can find out
    //how to make it (tabs) so that its hidden
    const handlePress = () => {
        router.replace('tabs')
    }

    return (
        <View style={styles.test}>
            <KeyboardAvoidingView>
                <View style={{ marginTop: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#4A55A2', fontSize: 17, fontWeight: '600' }}>Sign In</Text>
                    <Text style={{ fontSize: 17, fontWeight: '600', marginTop: 15 }}>Sign in to your account</Text>
                </View>

                <View style={{ marginTop: 50 }}>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: '600', color: 'gray' }}>Email</Text>

                        <TextInput
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            style={{ 
                                fontSize:email ? 18 : 18,
                                borderBottomColor: 'gray', 
                                borderBottomWidth: 1, 
                                marginVertical: 10, 
                                width: 300 }}
                            placeholderTextColor={'black'}
                            placeholder='Enter your email' />
                    </View>


                    <View style={{marginTop: 10}}>
                        <Text style={{ fontSize: 18, fontWeight: '600', color: 'gray' }}>Password</Text>
                        <TextInput
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry = {true}
                            style={{ 
                                fontSize:email ? 18 : 18,
                                borderBottomColor: 'gray', 
                                borderBottomWidth: 1, 
                                marginVertical: 10, 
                                width: 300 }}
                            placeholderTextColor={'black'}
                            placeholder='Enter your Password' />
                    </View>
                <Pressable 
                    style={{
                        width:200, 
                        backgroundColor:'#4A55A2',
                        padding:15, marginTop:50, 
                        marginLeft:'auto', 
                        marginRight:'auto',
                        borderRadius:6
                    }}
                    //Handlepress allows user to go from login page to tabs
                    onPress={handlePress}>
                            
                    <Text style={{color:'white', fontSize:16, fontWeight:'bold',textAlign:'center'}}>Login</Text>
                    
                </Pressable>

                <Link href={'/register'} asChild>
                
                <Pressable style={{marginTop:15}}>
                    <Text style={{textAlign:'center', color:'gray', fontSize:16}}>Don't have an account? Sign up here!</Text>
                </Pressable>
                </Link>

                </View>
            </KeyboardAvoidingView>
        </View>
    );
}

export default LoginPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    test: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
    }
});
