// @ts-nocheck

import {
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Stack,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import axios from 'axios';
import { FC, memo, useCallback, useEffect, useState } from 'react';
import { Icon } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { DeleteModal } from '../../atoms/modal/DeleteModal';
import { useMessage } from '../../hooks/useMessage';
import { useNotLoginUser } from '../../provider/NotLoginUserProvider';
import { NotLoginUser } from '../../types/NotLoginUser';
import { CapsComponent } from '../wearSect/topCoord/CapsComponent';
import { PantsComponent } from '../wearSect/topCoord/PantsComponent';
import { ShoesComponent } from '../wearSect/topCoord/ShoesComponent';
import { TopsComponent } from '../wearSect/topCoord/TopsComponent';
import { FaTshirt } from 'react-icons/fa';
import { BiFace } from 'react-icons/bi';
import { MdOutlineChangeCircle } from 'react-icons/md';
import { GiPerson } from 'react-icons/gi';
import { GiArmoredPants } from 'react-icons/gi';
import { GiSonicShoes } from 'react-icons/gi';
import { AiFillDelete } from 'react-icons/ai';
import { TopDrawerBtn } from '../../atoms/drawer/TopDrawerBtn';
import { BeforeCreateCoord } from './components/BeforeCreateCoord';

const style = {
    bgImg: {},
    mannequinImg: {
        height: '400px',
        objectFit: 'cover',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        maxWidth: '400px',
        margin: 'auto',
        position: 'absolute',
        // backgroundImage: "url(../../../../../../img/mannequin/mens_170_model.png)",
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        cursor: 'pointer',
    },
    wrapper: {
        // display: "flex",
        // justifyContent: "space-evenly",
        // alignItems: "center",
        // height: "100%",
        // flexDirection: "column",
        // position: 'relative',
        // display: 'table',
        // width: '100%',
        // height: '300px',
        // backgroundColor: '#c2e035',
        // marginTop: '20vw',
    },
    bg: {
        display: 'table',
        width: '100%',
        height: '500px',
        backgroundColor: '#e8a337',
        transform: 'skewY(-10deg)',
        marginTop: '10vw',
        position: 'absolute',
        bottom: '-10vh',
        zIndex: '-100',
        background:
            'linear-gradient(320deg, rgba(144,192,229,0.3) 0%, rgba(162,186,203,.3) 35%, rgba(206,225,238,.3) 100%)',
        borderTop: '30px solid transparent',
        borderImage:
            'radial-gradient(circle, rgba(245,245,245,0.2) 0%, rgba(148,187,233,0.2) 100%)',
    },
} as const;

const colorList = [
    'all',
    'black',
    'white',
    'navy',
    'pink',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'gray',
];

export const TopCoord: FC = memo(() => {
    const { notLoginUser, setNotLoginUser } = useNotLoginUser();
    const { showMessage } = useMessage();
    const [defaultGender, setDefaultGender] = useState<string>();
    const [capsId, setCapsId] = useState<string>();
    const [topsId, setTopsId] = useState<string>();
    const [pantsId, setPantsId] = useState<string>();
    const [shoesId, setShoesId] = useState<string>();
    const history = useHistory();

    const [defaultCategoryCaps, setDefaultCategoryCaps] = useState();
    const [defaultUrlCaps, setDefaultUrlCaps] = useState();
    const [defaultCategoryTops, setDefaultCategoryTops] = useState();
    const [defaultUrlTops, setDefaultUrlTops] = useState();
    const [defaultCategoryPants, setDefaultCategoryPants] = useState();
    const [defaultUrlPants, setDefaultUrlPants] = useState();
    const [defaultCategoryShoes, setDefaultCategoryShoes] = useState();
    const [defaultUrlShoes, setDefaultUrlShoes] = useState();

    const [shopifyIdCaps, setShopifyIdCaps] = useState();
    const [shopifyIdTops, setShopifyIdTops] = useState();
    const [shopifyIdPants, setShopifyIdPants] = useState();
    const [shopifyIdShoes, setShopifyIdShoes] = useState();

    const [getCoordData, setGetCoordData] = useState();
    const [getDataCaps, setGetDataCaps] = useState();
    const [getDataTops, setGetDataTops] = useState();
    const [getDataPants, setGetDataPants] = useState();
    const [getDataShoes, setGetDataShoes] = useState();

    // console.log(notLoginUser);
    // console.log(getCoordData)

    useEffect(() => {
        if (notLoginUser) {
            setDefaultGender(notLoginUser.gender);
            setCapsId(notLoginUser.caps);
            setTopsId(notLoginUser.tops);
            setPantsId(notLoginUser.pants);
            setShoesId(notLoginUser.shoes);
        }
    }, [notLoginUser]);

    useEffect(() => {
        if (notLoginUser) {
            if (topsId ?? pantsId ?? shoesId) {
                axios
                    .get('/api/getcoord', {
                        params: {
                            capsId: capsId,
                            topsId: topsId,
                            pantsId: pantsId,
                            shoesId: shoesId,
                        },
                    })
                    .then((res) => {
                        // console.log(res.data)
                        setGetCoordData(res.data);
                    })
                    .catch(() => {})
                    .finally(() => {});
            }
        }
    }, [capsId, topsId, pantsId, shoesId]);

    useEffect(() => {
        if (getCoordData) {
            if (getCoordData.capsItem) {
                setDefaultCategoryCaps(getCoordData.capsItem.category);
                setShopifyIdCaps(getCoordData.capsItem.shopify_id);
                colorList.map((color) => {
                    if (getCoordData.capsItem[color] !== null)
                        setDefaultUrlCaps(getCoordData.capsItem[color]);
                });
                setGetDataCaps(getCoordData.capsItem);
            }
            setDefaultCategoryTops(getCoordData.topsItem.category);
            setShopifyIdTops(getCoordData.topsItem.shopify_id);
            colorList.map((color) => {
                if (getCoordData.topsItem[color] !== null)
                    setDefaultUrlTops(getCoordData.topsItem[color]);
            });
            setDefaultCategoryPants(getCoordData.pantsItem.category);
            setShopifyIdPants(getCoordData.pantsItem.shopify_id);
            colorList.map((color) => {
                if (getCoordData.pantsItem[color] !== null)
                    setDefaultUrlPants(getCoordData.pantsItem[color]);
            });

            if (getCoordData.shoesItem) {
                setDefaultCategoryShoes(getCoordData.shoesItem.category);
                setShopifyIdShoes(getCoordData.shoesItem.shopify_id);
                setGetDataShoes(getCoordData.shoesItem);
                colorList.map((color) => {
                    if (getCoordData.shoesItem[color] !== null)
                        setDefaultUrlShoes(getCoordData.shoesItem[color]);
                });
            }
            setGetDataTops(getCoordData.topsItem);
            setGetDataPants(getCoordData.pantsItem);
        }
    }, [getCoordData]);

    // console.log(getDataPants)

    // const onClickToMannequin = (gender) => {
    //     history.push({
    //         pathname: '/sample/mannequin',
    //         state: { from: gender }
    //     });
    // }

    const onClickCreateCoord = (gender) => {
        if (defaultGender == 'male' || gender == 'male') {
            history.push({
                pathname: '/sample/male',
                // state: { from: gender }
            });
        }
        if (defaultGender == 'female' || gender == 'female') {
            history.push({
                pathname: '/sample/female',
                // state: { from: gender }
            });
        }
    };

    const onClickChangeMannequin = useCallback(
        () => history.push('/sample/mannequin'),
        [],
    );
    const onClickItems = useCallback(() => history.push('/sample/items'), []);

    const onClickResetMannequin = () => {

        localStorage.clear();
        showMessage({ title: 'コーデを削除しました', status: 'success' });
        history.go(0);
    };

    const onClickResetMannequinBrand = () => {
        let stockBrand;
        if (localStorage.getItem('brand')) {
            stockBrand = localStorage.getItem('brand');
        }
        localStorage.clear();
        showMessage({ title: 'コーデを削除しました', status: 'success' });
        if (stockBrand) {
            localStorage.setItem('flg', 'true');
            localStorage.setItem('brand', stockBrand);
        }
        history.go(0);
    };

    const capsComponent = (
        <CapsComponent
            defaultGender={defaultGender}
            itemId={capsId}
            defaultCategory={defaultCategoryCaps}
            defaultUrl={defaultUrlCaps}
        />
    );

    const topsComponent = (
        <TopsComponent
            defaultGender={defaultGender}
            itemId={topsId}
            defaultCategory={defaultCategoryTops}
            defaultUrl={defaultUrlTops}
        />
    );

    const pantsComponent = (
        <PantsComponent
            defaultGender={defaultGender}
            itemId={pantsId}
            defaultCategory={defaultCategoryPants}
            defaultUrl={defaultUrlPants}
        />
    );

    const shoesComponent = (
        <ShoesComponent
            defaultGender={defaultGender}
            itemId={shoesId}
            defaultCategory={defaultCategoryShoes}
            defaultUrl={defaultUrlShoes}
        />
    );

    return (
        <div style={style.wrapper}>
            {notLoginUser ? (
                notLoginUser.mannequin ? (
                    <div>
                        <div
                            onClick={onClickCreateCoord}
                            style={{
                                ...style.mannequinImg,
                                backgroundImage: `url(../../../../../../img/mannequin/${notLoginUser.mannequin})`,
                            }}
                        >
                            <div
                                data-html2canvas-ignore="true"
                                style={{
                                    width: '40px',
                                    position: 'absolute',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    top: '24px',
                                }}
                            >
                                <img
                                    style={{
                                        width: '100%',
                                        borderRadius: '50%',
                                    }}
                                    alt=""
                                />
                            </div>

                            <div
                                style={{
                                    display: 'flex',
                                    position: 'relative',
                                }}
                            >
                                {capsComponent}
                            </div>

                            <div
                                style={{
                                    display: 'flex',
                                    height: '115px',
                                    marginTop: '16px',
                                }}
                            >
                                {topsComponent}
                            </div>

                            <div style={{ display: 'flex', height: '140px' }}>
                                {pantsComponent}
                            </div>

                            <div
                                style={{
                                    display: 'flex',
                                    overflowX: 'scroll',
                                    marginTop: '-10px',
                                }}
                            >
                                {shoesComponent}
                            </div>
                        </div>

                        <Stack
                            direction="column"
                            spacing={4}
                            align="center"
                            justifyContent="center"
                            position={'relative'}
                            display={'flex'}
                            flexDirection={'row'}
                            justifyContent={'space-between'}
                            alignItems={'center'}
                            position={'absolute'}
                            bottom={'3vh'}
                            width={'100%'}
                            // maxWidth={'800px'}
                            // left={{md:'50%'}}
                            // transform={{ md: 'translateX(-50%)'}}
                        >
                            <Flex flexDirection={'column'}>
                                <Button
                                    maxWidth={'200px'}
                                    width={'20vw'}
                                    my={4}
                                    py={8}
                                    minWidth="150px"
                                    onClick={onClickChangeMannequin}
                                    background="#216496"
                                    color="white"
                                    variant="solid"
                                    justifyContent={'space-evenly'}
                                >
                                    <Icon
                                        w={8}
                                        h={8}
                                        color="white"
                                        as={GiPerson}
                                    />
                                    <Text fontSize="lg" fontWeight={'bold'}>
                                        マネキンを変更する
                                    </Text>
                                </Button>
                                <Button
                                    maxWidth={'200px'}
                                    width={'20vw'}
                                    my={4}
                                    py={8}
                                    minWidth="150px"
                                    onClick={onClickCreateCoord}
                                    background="#216496"
                                    color="white"
                                    variant="solid"
                                    justifyContent={'space-evenly'}
                                >
                                    <Icon
                                        w={8}
                                        h={8}
                                        color="white"
                                        as={MdOutlineChangeCircle}
                                    />
                                    <Text fontSize="lg" fontWeight={'bold'}>
                                        コーデをつくる
                                    </Text>
                                </Button>
                            </Flex>
                            <Flex>
                                <DeleteModal
                                    onClickResetMannequin={
                                        onClickResetMannequin
                                    }
                                    onClickResetMannequinBrand={
                                        onClickResetMannequinBrand
                                    }
                                >
                                    <Icon
                                        w={8}
                                        h={8}
                                        color="white"
                                        as={AiFillDelete}
                                    />
                                    <Text fontSize="lg" fontWeight={'bold'}>
                                        コーデをリセット
                                    </Text>
                                </DeleteModal>
                            </Flex>
                        </Stack>

                        <Flex
                            flexDirection={'column'}
                            display={'flex'}
                            position={'absolute'}
                            right={0}
                            top={'100px'}
                            height={'50vh'}
                            justifyContent={'space-evenly'}
                        >
                            <TopDrawerBtn
                                btnIcon={BiFace}
                                wearId={shopifyIdCaps}
                                type={'caps'}
                                allData={getDataCaps}
                            />
                            <TopDrawerBtn
                                btnIcon={FaTshirt}
                                wearId={shopifyIdTops}
                                type={'tops'}
                                allData={getDataTops}
                            />
                            <TopDrawerBtn
                                btnIcon={GiArmoredPants}
                                wearId={shopifyIdPants}
                                type={'pants'}
                                allData={getDataPants}
                            />
                            <TopDrawerBtn
                                btnIcon={GiSonicShoes}
                                wearId={shopifyIdShoes}
                                type={'shoes'}
                                allData={getDataShoes}
                            />
                        </Flex>
                        <div style={style.bg}></div>
                    </div>
                ) : (
                    <Stack
                        h={'100vh'}
                        display={'flex'}
                        flexDirection={'column'}
                        alignItems={'center'}
                        justifyContent={'center'}
                    >
                        <BeforeCreateCoord />
                        <Stack
                            direction="row"
                            spacing={4}
                            align="center"
                            justifyContent="center"
                        >
                            <Button
                                fontSize={'12px'}
                                w={'40%'}
                                px={10}
                                py={7}
                                bg="#216496"
                                color="white"
                                variant="solid"
                                onClick={() => onClickCreateCoord('male')}
                            >
                                男性ウェアを選ぶ
                            </Button>
                            <Button
                                fontSize={'12px'}
                                w={'40%'}
                                px={10}
                                py={7}
                                bg="#216496"
                                color="white"
                                variant="solid"
                                onClick={() => onClickCreateCoord('female')}
                            >
                                女性ウェアを選ぶ
                            </Button>
                        </Stack>
                        <Stack>
                            <Button
                                fontSize={'12px'}
                                w={'100%'}
                                px={10}
                                py={7}
                                my={4}
                                bg="#216496"
                                color="white"
                                variant="solid"
                                onClick={onClickItems}
                            >
                                アイテムから選ぶ
                            </Button>
                        </Stack>
                    </Stack>
                )
            ) : null}
        </div>
    );
});
