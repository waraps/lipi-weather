import React from 'react'
import { Platform } from 'react-native'
import { Stack } from 'expo-router'

const StackLayout = (): React.JSX.Element => {
  return (
    <Stack>
        <Stack.Screen name='index' options={{ headerTitle: 'Home', headerShown: false }} />
        <Stack.Screen name='city/index' options={{ headerTitle: 'Weather Details', headerShown: false }} />
        <Stack.Screen name='[missing]' options={{ headerTitle: 'Not Found Page', headerShown: Platform.OS !== 'web' }} />
    </Stack>
  )
}

export default StackLayout