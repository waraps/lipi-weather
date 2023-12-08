import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export const DetailsNotFound = ({
    onPress,
}: {
  onPress: () => void;
}): React.JSX.Element => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text
                style={{
                    marginTop: 5,
                    fontSize: 14,
                    color: '#243C79',
                    textAlign: 'center',
                }}
            >
                {'Data not found\nSorry, probably we have a problem with our end 🤦‍♂️'}
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 8,
                }}
            >
                <TouchableOpacity onPress={onPress}>
                    <Text
                        style={{
                            fontSize: 16,
                            color: '#243C79',
                            textDecorationLine: 'underline',
                            marginHorizontal: 8,
                        }}
                    >
            Press to refresh
                    </Text>
                </TouchableOpacity>
                <Link href={'/'}>
                    <Text
                        style={{
                            fontSize: 16,
                            color: '#243C79',
                            textDecorationLine: 'underline',
                            marginHorizontal: 8,
                        }}
                    >
            Press to go home
                    </Text>
                </Link>
            </View>
        </View>
    );
};
