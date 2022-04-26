import { Box, Image, SimpleGrid } from '@chakra-ui/react';
import { FC, memo, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useSWR from 'swr';

type Data = { name: string };

type Props = {
    gender: string;
    type: string;
};

const colorList = [
    'black',
    'white',
    'blue',
    'red',
    'green',
    'yellow',
    'navy',
    'pink',
    'orange',
    'purple',
    'gray',
];

export const ItemCard: FC<Props> = memo((props) => {
    const history = useHistory();
    const { gender, type } = props;

    async function fetcher(url: string): Promise<boolean | null> {
        const response = await fetch(url);
        return response.json();
    }
    const { data } = useSWR<any>(
        `/api/getAllRegisterItems?gender=${gender}&type=${type}`,
        fetcher,
    );

    console.log(data);

    const onClickItem = useCallback((props) => history.push(`/sample/${gender}?${type}=${props}`), []);

    return (
        <>
            {data ? (
                <SimpleGrid columns={[2, 3, 4]} spacing="40px">
                    {data.map((item) => (
                        <Box
                            key={item.id}
                            p={5}
                            shadow="md"
                            borderWidth="1px"
                            maxWidth="300px"
                            onClick={onClickItem.bind(this, item.id)}
                        >
                            {item.black ? (
                                <Image
                                    src={`/img/rakutenlist/${gender}/${item.category}/${item.black}`}
                                    alt=""
                                />
                            ) : null}
                            {item.white ? (
                                <Image
                                    src={`/img/rakutenlist/${gender}/${item.category}/${item.white}`}
                                    alt=""
                                />
                            ) : null}
                            {item.blue ? (
                                <Image
                                    src={`/img/rakutenlist/${gender}/${item.category}/${item.blue}`}
                                    alt=""
                                />
                            ) : null}
                            {item.red ? (
                                <Image
                                    src={`/img/rakutenlist/${gender}/${item.category}/${item.red}`}
                                    alt=""
                                />
                            ) : null}
                            {item.green ? (
                                <Image
                                    src={`/img/rakutenlist/${gender}/${item.category}/${item.green}`}
                                    alt=""
                                />
                            ) : null}
                            {item.yellow ? (
                                <Image
                                    src={`/img/rakutenlist/${gender}/${item.category}/${item.yellow}`}
                                    alt=""
                                />
                            ) : null}
                            {item.navy ? (
                                <Image
                                    src={`/img/rakutenlist/${gender}/${item.category}/${item.navy}`}
                                    alt=""
                                />
                            ) : null}
                            {item.pink ? (
                                <Image
                                    src={`/img/rakutenlist/${gender}/${item.category}/${item.pink}`}
                                    alt=""
                                />
                            ) : null}
                            {item.orange ? (
                                <Image
                                    src={`/img/rakutenlist/${gender}/${item.category}/${item.orange}`}
                                    alt=""
                                />
                            ) : null}
                            {item.purple ? (
                                <Image
                                    src={`/img/rakutenlist/${gender}/${item.category}/${item.purple}`}
                                    alt=""
                                />
                            ) : null}
                            {item.gray ? (
                                <Image
                                    src={`/img/rakutenlist/${gender}/${item.category}/${item.gray}`}
                                    alt=""
                                />
                            ) : null}
                        </Box>
                    ))}
                </SimpleGrid>
            ) : null}
        </>
    );
});
