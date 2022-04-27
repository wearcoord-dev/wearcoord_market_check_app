import { ChevronDownIcon } from '@chakra-ui/icons';
import {
    Box,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    SimpleGrid,
    Button,
    StylesProvider,
} from '@chakra-ui/react';
import { FC, memo, useCallback, useEffect, useState } from 'react';
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

const brandList = [
    // {
    //     value: 'all',
    //     text: '全て',
    // },
    {
        value: 'hydrogen',
        text: 'Hydrogen',
    },
    {
        value: 'nike',
        text: 'NIKE',
    },
    {
        value: 'adidas',
        text: 'Adidas',
    },
];

const style = {
    container: {
        position: 'absolute',
        bottom: '0',
        height: '80%',
        overflow: 'auto',
    },
    button: {
        position: 'absolute',
        bottom: '10px',
        right: '10px',
        zIndex: 100,
        backgroundColor: '#216496',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '14px',
        padding: '18px',
    },
    item: {
        textTransform: 'capitalize',
        fontSize: '14px',
    },
} as const;

export const ItemCard: FC<Props> = memo((props) => {
    const history = useHistory();
    const { gender, type } = props;
    const [selectBrand, setSelectBrand] = useState<string>(
        localStorage.getItem('brand')
            ? localStorage.getItem('brand')
            : 'hydrogen',
    );
    const [getData, setGetData] = useState<any>(null);

    // 初回のAPI取得とブランド更新時のAPI取得

    async function fetcher(url: string): Promise<boolean | null> {
        const response = await fetch(url);
        return response.json();
    }
    const { data } = useSWR<any>(
        `/api/getAllRegisterItems?gender=${gender}&type=${type}&brand=${selectBrand}`,
        fetcher,
    );
    useEffect(() => {
        setGetData(data);
    }, [data]);

    // コーデ遷移

    const onClickItem = useCallback(
        (props) => history.push(`/sample/${gender}?${type}=${props}`),
        [],
    );

    // ブランド絞り込み

    const onClickBrand = (props) => {
        setSelectBrand(props.text);
    };

    return (
        <>
            <Menu>
                <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    style={style.button}
                >
                    ブランド：{selectBrand}
                </MenuButton>
                <MenuList>
                    {localStorage.getItem('brand') ? (
                        <>
                            <MenuItem key={selectBrand} style={style.item}>
                                {selectBrand}
                            </MenuItem>
                        </>
                    ) : (
                        <>
                            {brandList.map((brand) => (
                                <MenuItem
                                    key={brand.value}
                                    style={style.item}
                                    onClick={onClickBrand.bind(this, brand)}
                                >
                                    {brand.text}
                                </MenuItem>
                            ))}
                        </>
                    )}
                </MenuList>
            </Menu>

            {getData ? (
                <SimpleGrid
                    columns={[2, 3, 4]}
                    spacing="40px"
                    style={style.container}
                >
                    {getData.map((item) => (
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
