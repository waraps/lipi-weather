import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { Link } from 'expo-router'

export default function NotFound(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>404 Error</Text>
      <Text style={styles.title}>Page not found</Text>
      <Text style={styles.descriptionText}>Sorry, the page you are looking for could not be found or has been removered.</Text>
      <Link href={'/'}>
      <Pressable>
        <Text style={styles.buttonText}>Go Home</Text>
      </Pressable>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: "#EAEDF7",
    paddingHorizontal: 8,
  },
  errorText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#243C79",
  },
  title: {
    fontSize: 24,
    color: "#243C79",
  },
  descriptionText: {
    fontSize: 18,
    color: "#243C79",
  },
  buttonText: {
    color: "#243C79",
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});
