import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// components
import { CityList, InputSearch, ScreenHeader } from '../components';

// hooks
import { useFetchPlaces } from '../hooks';

export default function HomeScreen(): React.JSX.Element {
    const [address, setAddress] = useState<string>('');

    const { data, resetState } = useFetchPlaces(address);

    // this helps to reset the state when the user clears the input
    useEffect(() => {
        if (data && address.length <= 0) {
            resetState();
        }
    }, [address]);

    return (
        <View style={styles.container}>
            <ScreenHeader title={Platform.OS !== 'web' ? undefined : 'Searcher'} subtitle={'Get weather updates'} />
            <InputSearch value={address} onChangeText={setAddress} />
            <CityList data={data} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAEDF7',
        paddingHorizontal: 8,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
        marginBottom: 4,
    },
    headerTitle: {
        fontSize: 18,
        color: '#2D3748',
        fontWeight: 'bold',
    },
    headerSubtitle: {
        fontSize: 14,
        color: '#718096',
        marginTop: -5,
    },
});
