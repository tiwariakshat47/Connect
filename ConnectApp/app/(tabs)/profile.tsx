import {View, Pressable, Text} from 'react-native'
import React, { useEffect } from 'react'
import { router } from 'expo-router'
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfilePage = () => {

  const handleLogOut = () => {
    AsyncStorage.setItem("authToken", '');
    router.replace('')
  };

  return (
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
      onPress={handleLogOut}>
              
      <Text style={{color:'white', fontSize:16, fontWeight:'bold',textAlign:'center'}}>Log Out</Text>
      
  </Pressable>
  )
}

export default ProfilePage
