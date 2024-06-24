import {View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const ProfilePage = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignSelf:'center'}}>
        <Link href="/"> Log Out</Link>
    </View>
  )
}

export default ProfilePage
