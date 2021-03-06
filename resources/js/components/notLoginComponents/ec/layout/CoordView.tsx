import { useDisclosure } from '@chakra-ui/react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useMessage } from '../../hooks/useMessage';
import { TopsEcSect } from '../component/TopsEcSect';
import { useAllCaps } from '../../../../hooks/selectwear/useAllCaps.jsx';
import { useAllTops } from '../../../../hooks/selectwear/useAllTops.jsx';
import { useAllPants } from '../../../../hooks/selectwear/useAllPants.jsx';
import { useAllShoes } from '../../../../hooks/selectwear/useAllShoes.jsx';
import { CapsEcSect } from '../component/CapsEcSect';
import { PantsEcSect } from '../component/PantsEcSect';
import { ShoesEcSect } from '../component/ShoesEcSect';
import { SearchEcBox } from '../component/SearchEcBox';

type Props = {
    itemId: string;
    brand: string;
    ignoreSearch: string;
    defaultGender: string;
    defaultCaps: string;
    defaultTops: string;
    defaultPants: string;
    defaultShoes: string;
    defaultWear: string;
};

const style = {
    mannequinImg: {
        height: '400px',
        objectFit: 'cover',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        maxWidth: '400px',
        margin: 'auto',
        position: 'relative',
    },
} as const;

export const CoordView: React.FC<Props> = (props) => {
    const {
        itemId,
        brand,
        ignoreSearch,
        defaultGender,
        defaultWear,
        defaultCaps,
        defaultTops,
        defaultPants,
        defaultShoes,
    } = props;
    const { showMessage } = useMessage();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        isOpen: isOpenTops,
        onOpen: onOpenTops,
        onClose: onCloseTops,
    } = useDisclosure();
    const {
        isOpen: isOpenPants,
        onOpen: onOpenPants,
        onClose: onClosePants,
    } = useDisclosure();
    const {
        isOpen: isOpenShoes,
        onOpen: onOpenShoes,
        onClose: onCloseShoes,
    } = useDisclosure();

    const onClickAllClose = useCallback(() => {
        onClose();
        onCloseTops();
        onClosePants();
        onCloseShoes();
    }, []);

    // ??????????????????????????????

    let initialCaps;
    let initialTops;
    let initialPants;
    let initialShoes;

    if (ignoreSearch == 'tops') {
        initialTops = defaultWear;
        initialCaps = defaultCaps;
        initialPants = defaultPants;
        initialShoes = defaultShoes;
    } else if (ignoreSearch == 'caps') {
        initialCaps = defaultWear;
        initialTops = defaultTops;
        initialPants = defaultPants;
        initialShoes = defaultShoes;
    } else if (ignoreSearch == 'pants') {
        initialPants = defaultWear;
        initialCaps = defaultCaps;
        initialTops = defaultTops;
        initialShoes = defaultShoes;
    } else if (ignoreSearch == 'shoes') {
        initialShoes = defaultWear;
        initialCaps = defaultCaps;
        initialTops = defaultTops;
        initialPants = defaultPants;
    }

    // ????????????????????????useEffect??????
    const isFirstOpenCaps = useRef(false);
    const isFirstOpenTops = useRef(false);
    const isFirstOpenPants = useRef(false);
    const isFirstOpenShoes = useRef(false);

    // ????????????????????????????????????tops?????????????????????
    const [firstOpen, setFirstOpen] = useState('');

    useEffect(() => {
        const getData = async () => {
            // ????????????????????????return
            if (ignoreSearch === 'tops') {
                return;
            }
        };
        getData();

        onClose();
        onOpenTops();
        onClosePants();
        onCloseShoes();

        // ?????????????????????????????????????????????????????????????????????
        let firstSetBrand: string;

        if (defaultGender === 'male') {
            setFirstOpen('508759');
        } else if (defaultGender === 'female') {
            setFirstOpen('508803');
        }

        // ???????????????????????????????????????????????????????????????????????????
        if (brand) {
            firstSetBrand = brand;
        } else {
            firstSetBrand = 'all';
        }

        const data = {
            brand: firstSetBrand,
            color: 'all',
            category: firstOpen,
            wear: 'tops',
            page: 1,
        };

        setDataTops(data);
        setTopsArray([]);
        setTopsSel(data);
        // getTops(data);
        setShowTops(0);
        isFirstOpenTops.current = true;
    }, [firstOpen, defaultGender]);

    // // ????????????caps

    // // ????????????
    const { getCaps, userCaps, loading, error } = useAllCaps();

    // // ??????????????????????????????
    const [activeIndexCaps, setActiveIndexCaps] = useState(0);

    // // ???????????????????????????
    const [capsSel, setCapsSel] = useState({
        brand: '',
        color: '',
        category: '',
        wear: '',
    });
    const [dataCaps, setDataCaps] = useState({
        brand: '',
        color: '',
        category: '',
        wear: '',
        page: null,
    });
    const [capsArray, setCapsArray] = useState([]);
    const [showCaps, setShowCaps] = useState<Number>(0);

    // ???????????????????????????

    const getActiveIndexCaps = (swiper) => {
        setActiveIndexCaps(swiper.activeIndex);
    };

    // ????????????????????????????????????

    const onClickFetchCaps = (props) => {
        const data = {
            brand: props.brand,
            color: props.color,
            category: props.category,
            wear: 'caps',
            page: 1,
        };

        // ??????????????????null??????????????????????????????????????????
        if (props.category) {
            // ??????????????????remove?????????????????????????????????????????????
            if (props.category == 'remove') {
                setDataCaps({
                    brand: '',
                    color: '',
                    category: '',
                    wear: '',
                    page: null,
                });
                setCapsArray([]);
                setShowCaps(1);
            } else {
                setDataCaps(data);
                setCapsArray([]);
                getCaps(data);
                setShowCaps(0);
            }
        } else {
            setCapsArray([]);
            setShowCaps(0);
        }
    };

    // ?????????????????????????????????????????????
    const onClickCaps = useCallback(() => {
        onOpen();
        onCloseTops();
        onClosePants();
        onCloseShoes();

        // ?????????????????????????????????????????????????????????????????????
        let defaultCapsCategory: string;
        let firstSetBrand: string;

        if (isFirstOpenCaps.current === false) {
            if (defaultGender === 'male') {
                defaultCapsCategory = '506269';
            } else if (defaultGender === 'female') {
                defaultCapsCategory = '565818';
            }

            // ???????????????????????????????????????????????????????????????????????????
            if (brand) {
                firstSetBrand = brand;
            } else {
                firstSetBrand = 'all';
            }

            const data = {
                brand: firstSetBrand,
                color: 'all',
                category: defaultCapsCategory,
                wear: 'caps',
                page: 1,
            };
            setDataCaps(data);
            setCapsArray([]);
            setCapsSel(data);
            getCaps(data);
            setShowCaps(0);
            // ????????????????????????
            isFirstOpenCaps.current = true;
        }
    }, [defaultGender]);

    // ????????????tops

    // ????????????
    const { getTops, userTops, loadingTops, errorTops } = useAllTops();

    // ??????????????????????????????
    const [activeIndexTops, setActiveIndexTops] = useState(0);

    // // ???????????????????????????
    const [topsSel, setTopsSel] = useState({
        brand: '',
        color: '',
        category: '',
        wear: '',
    });
    const [dataTops, setDataTops] = useState({
        brand: '',
        color: '',
        category: '',
        wear: '',
        page: null,
    });
    const [topsArray, setTopsArray] = useState([]);
    const [showTops, setShowTops] = useState<Number>(0);

    // ???????????????????????????

    const getActiveIndexTops = (swiper) => {
        setActiveIndexTops(swiper.activeIndex);
    };

    const onClickTops = () => {
        // ????????????????????????return
        if (ignoreSearch === 'tops') {
            showMessage({
                title: '???????????????????????????????????????????????????',
                status: 'warning',
            });
            return;
        }

        onClose();
        onOpenTops();
        onClosePants();
        onCloseShoes();

        // ?????????????????????????????????????????????????????????????????????
        let defaultTopsCategory: string;
        let firstSetBrand: string;

        if (defaultGender === 'male') {
            defaultTopsCategory = '508759';
        } else if (defaultGender === 'female') {
            defaultTopsCategory = '508803';
        }
        if (brand) {
            firstSetBrand = brand;
        } else {
            firstSetBrand = 'all';
        }

        const data = {
            brand: firstSetBrand,
            color: 'all',
            category: defaultTopsCategory,
            wear: 'tops',
            page: 1,
        };
        console.log(data);
        setDataTops(data);
        setTopsArray([]);
        setTopsSel(data);
        getTops(data);
        setShowTops(0);
        // ????????????????????????
        isFirstOpenTops.current = true;
    };

    // ????????????????????????????????????

    const onClickFetchTops = (props) => {
        // ????????????????????????return
        if (ignoreSearch === 'tops') {
            showMessage({
                title: '???????????????????????????????????????????????????',
                status: 'warning',
            });
            return;
        }

        const data = {
            brand: props.brand,
            color: props.color,
            category: props.category,
            wear: 'tops',
            page: 1,
        };

        if (props.category) {
            setDataTops(data);
            setTopsArray([]);
            getTops(data);
        } else {
            setTopsArray([]);
        }
    };

    // ????????????pants

    const onClickPants = () => {
        // ????????????????????????return
        if (ignoreSearch === 'pants') {
            showMessage({
                title: '????????????????????????????????????????????????',
                status: 'warning',
            });
            return;
        }

        onClose();
        onCloseTops();
        onOpenPants();
        onCloseShoes();

        // ?????????????????????????????????????????????????????????????????????
        let defaultPantsCategory: string;
        let firstSetBrand: string;

        if (isFirstOpenPants.current === false) {
            if (defaultGender === 'male') {
                defaultPantsCategory = '508772';
            } else if (defaultGender === 'female') {
                defaultPantsCategory = '508820';
            }

            // ???????????????????????????????????????????????????????????????????????????
            if (brand) {
                firstSetBrand = brand;
            } else {
                firstSetBrand = 'all';
            }

            const data = {
                brand: firstSetBrand,
                color: 'all',
                category: defaultPantsCategory,
                wear: 'pants',
                page: 1,
            };
            setDataPants(data);
            setPantsArray([]);
            setPantsSel(data);
            getPants(data);
            setShowPants(0);
            // ????????????????????????
            isFirstOpenPants.current = true;
        }
    };

    // ????????????
    const { getPants, userPants, loadingPants, errorPants } = useAllPants();

    // ??????????????????????????????
    const [activeIndexPants, setActiveIndexPants] = useState(0);

    // // ???????????????????????????
    const [pantsSel, setPantsSel] = useState({
        brand: '',
        color: '',
        category: '',
        wear: '',
    });
    const [dataPants, setDataPants] = useState({
        brand: '',
        color: '',
        category: '',
        wear: '',
        page: null,
    });
    const [pantsArray, setPantsArray] = useState([]);
    const [showPants, setShowPants] = useState<Number>(0);

    // ???????????????????????????

    const getActiveIndexPants = (swiper) => {
        setActiveIndexPants(swiper.activeIndex);
    };

    // ????????????????????????????????????

    const onClickFetchPants = (props) => {
        // ????????????????????????return
        if (ignoreSearch === 'pants') {
            showMessage({
                title: '????????????????????????????????????????????????',
                status: 'warning',
            });
            return;
        }

        const data = {
            brand: props.brand,
            color: props.color,
            category: props.category,
            wear: 'pants',
            page: 1,
        };

        if (props.category) {
            setDataPants(data);
            setPantsArray([]);
            getPants(data);
        } else {
            setPantsArray([]);
        }
    };

    // ????????????shoes

    const onClickShoes = useCallback(() => {
        onClose();
        onCloseTops();
        onClosePants();
        onOpenShoes();

        // ?????????????????????????????????????????????????????????????????????
        let defaultShoesCategory: string;
        let firstSetBrand: string;

        if (isFirstOpenShoes.current === false) {
            if (defaultGender === 'male') {
                defaultShoesCategory = '208025';
            } else if (defaultGender === 'female') {
                defaultShoesCategory = '565819';
            }

            // ???????????????????????????????????????????????????????????????????????????
            if (brand) {
                firstSetBrand = brand;
            } else {
                firstSetBrand = 'all';
            }

            const data = {
                brand: firstSetBrand,
                color: 'all',
                category: defaultShoesCategory,
                wear: 'shoes',
                page: 1,
            };
            setDataShoes(data);
            setShoesArray([]);
            setShoesSel(data);
            getShoes(data);
            setShowShoes(0);
            // ????????????????????????
            isFirstOpenShoes.current = true;
        }
    }, [defaultGender]);

    // ????????????
    const { getShoes, userShoes, loadingShoes, errorShoes } = useAllShoes();

    // ??????????????????????????????
    const [activeIndexShoes, setActiveIndexShoes] = useState(0);

    // // ???????????????????????????
    const [shoesSel, setShoesSel] = useState({
        brand: '',
        color: '',
        category: '',
        wear: '',
    });
    const [dataShoes, setDataShoes] = useState({
        brand: '',
        color: '',
        category: '',
        wear: '',
        page: null,
    });
    const [shoesArray, setShoesArray] = useState([]);
    const [showShoes, setShowShoes] = useState<Number>(0);

    // ???????????????????????????

    const getActiveIndexShoes = (swiper) => {
        setActiveIndexShoes(swiper.activeIndex);
    };

    // ????????????????????????????????????

    const onClickFetchShoes = (props) => {
        const data = {
            brand: props.brand,
            color: props.color,
            category: props.category,
            wear: 'shoes',
            page: 1,
        };

        if (props.category) {
            setDataShoes(data);
            setShoesArray([]);
            getShoes(data);
        } else {
            setShoesArray([]);
        }
    };

    const topsComponent = (
        <>
            <TopsEcSect
                onClickTops={onClickTops}
                defaultGender={defaultGender}
                setDataTops={setDataTops}
                setTopsArray={setTopsArray}
                dataTops={dataTops}
                topsArray={topsArray}
                getActiveIndexTops={getActiveIndexTops}
                userTops={userTops}
                getTops={getTops}
                defaultTops={initialTops}
            />
        </>
    );

    const capsComponent = (
        <>
            <CapsEcSect
                onClickCaps={onClickCaps}
                defaultGender={defaultGender}
                setDataCaps={setDataCaps}
                setCapsArray={setCapsArray}
                dataCaps={dataCaps}
                capsArray={capsArray}
                getActiveIndexCaps={getActiveIndexCaps}
                userCaps={userCaps}
                getCaps={getCaps}
                defaultCaps={initialCaps}
                showCaps={showCaps}
            />
        </>
    );

    const pantsComponent = (
        <>
            <PantsEcSect
                onClickPants={onClickPants}
                defaultGender={defaultGender}
                setDataPants={setDataPants}
                setPantsArray={setPantsArray}
                dataPants={dataPants}
                pantsArray={pantsArray}
                getActiveIndexPants={getActiveIndexPants}
                userPants={userPants}
                getPants={getPants}
                defaultPants={initialPants}
            />
        </>
    );

    const shoesComponent = (
        <>
            <ShoesEcSect
                onClickShoes={onClickShoes}
                defaultGender={defaultGender}
                setDataShoes={setDataShoes}
                setShoesArray={setShoesArray}
                dataShoes={dataShoes}
                shoesArray={shoesArray}
                getActiveIndexShoes={getActiveIndexShoes}
                userShoes={userShoes}
                getShoes={getShoes}
                defaultShoes={initialShoes}
            />
        </>
    );

    let defaultMannequin;

    if (defaultGender == 'male') {
        defaultMannequin = 'mens_170_model.png';
    } else {
        defaultMannequin = 'woman_manekin1.png';
    }

    return (
        <>
            <div
                style={{
                    ...style.mannequinImg,
                    backgroundImage: `url(../../../../../../img/mannequin/${defaultMannequin})`,
                }}
            >
                <div style={{ display: 'flex', position: 'relative' }}>
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
            <SearchEcBox
                onClose={onClose}
                isOpen={isOpen}
                onCloseTops={onCloseTops}
                isOpenTops={isOpenTops}
                onClosePants={onClosePants}
                isOpenPants={isOpenPants}
                onCloseShoes={onCloseShoes}
                isOpenShoes={isOpenShoes}
                onClickAllClose={onClickAllClose}
                onClickFetchCaps={onClickFetchCaps}
                setCapsSel={setCapsSel}
                capsSel={capsSel}
                onClickFetchTops={onClickFetchTops}
                setTopsSel={setTopsSel}
                topsSel={topsSel}
                onClickFetchPants={onClickFetchPants}
                setPantsSel={setPantsSel}
                pantsSel={pantsSel}
                onClickFetchShoes={onClickFetchShoes}
                setShoesSel={setShoesSel}
                shoesSel={shoesSel}
                defaultGender={defaultGender}
                defaultBrand={brand}
            />
        </>
    );
};
