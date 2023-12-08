import React, { useCallback } from 'react';
import { StyleSheet, FlatList, ListRenderItemInfo } from 'react-native';

// components
import { Row } from './row';

// interfaces
import { IPlaceRes } from '../../interfaces';

interface ICityList {
  data?: IPlaceRes[];
}

export const CityList = ({ data }: ICityList): React.JSX.Element | null => {
    const renderItem = useCallback(
        ({ item }: ListRenderItemInfo<IPlaceRes>): JSX.Element => (
            <Row item={item} />
        ),
        []
    );

    if (!data) {
        return null;
    }

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item: IPlaceRes, index: number) =>
                String(item?.lat) + String(item?.lon) + index
            }
            onEndReachedThreshold={0.01}
            contentContainerStyle={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        marginHorizontal: 8,
    },
});
