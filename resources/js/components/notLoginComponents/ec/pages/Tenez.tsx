import { Flex, Spinner } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuerySku } from '../hooks/useGetSkuData';
import { CoordView } from '../layout/CoordView';

export const Tenez: React.FC = () => {
    const search = useLocation().search;
    const getQueryData = new URLSearchParams(search);

    const itemId = getQueryData.get('sku');
    const brand = 'tenez';

    // skuデータ取得のhooks
    const { status, data } = useQuerySku(['sku', itemId, brand]);
    // console.log(data);

      if (status === 'loading') return (
        <Flex justifyContent={'center'} height={'100vh'} alignItems={'center'}>
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
            />
        </Flex>
      );
      if (status === 'error') return <div>{'Error...'}</div>;

    return (
        <>
            {data && data.item && (
                <CoordView
                    itemId={itemId}
                    brand={brand}
                    defaultWear={data.item.wearId}
                    defaultGender={data.item.gender}
                    ignoreSearch={data.item.type}
                    defaultCaps={data.capsId}
                    defaultTops={data.topsId}
                    defaultPants={data.pantsId}
                    defaultShoes={data.shoesId}
                />
            )}
        </>
    );
};
