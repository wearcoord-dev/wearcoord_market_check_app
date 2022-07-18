import { useDisclosure } from '@chakra-ui/react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useMessage } from '../../hooks/useMessage';
import { TopsEcSect } from '../component/TopsEcSect';
import { useAllCaps } from '../../../../hooks/selectwear/useAllCaps.jsx';
import { useAllTops } from '../../../../hooks/selectwear/useAllTops.jsx';
import { useAllPants } from '../../../../hooks/selectwear/useAllPants.jsx';
import { useAllShoes } from '../../../../hooks/selectwear/useAllShoes.jsx';
import { SearchBox } from '../../molecules/SearchBox';
import { CapsEcSect } from '../component/CapsEcSect';
import { PantsEcSect } from '../component/PantsEcSect';
import { ShoesEcSect } from '../component/ShoesEcSect';

type Props = {
    itemId: string;
    brand: string;
    ignoreSearch: string;
    defaultGender: string;
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
    const { itemId, brand, ignoreSearch, defaultGender, defaultWear } = props;
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

    let defaultCaps;
    let defaultTops;
    let defaultPants;
    let defaultShoes;

    if (ignoreSearch == 'tops') {
        defaultTops = defaultWear;
    } else if (ignoreSearch == 'caps') {
        defaultCaps = defaultWear;
    } else if (ignoreSearch == 'pants') {
        defaultPants = defaultWear;
    } else if (ignoreSearch == 'shoes') {
        defaultShoes = defaultWear;
    }

    // 初回読み込み時のuseEffect管理
    const isFirstOpenCaps = useRef(false);
    const isFirstOpenTops = useRef(false);
    const isFirstOpenPants = useRef(false);
    const isFirstOpenShoes = useRef(false);

    // 最初にページを開いた場合topsを自動的に表示
    const [firstOpen, setFirstOpen] = useState('');

    useEffect(() => {
        const getData = async () => {
            // 検索しない場合はreturn
            if (ignoreSearch === 'tops') {
                return;
            }
        };
        getData();

        onClose();
        onOpenTops();
        onClosePants();
        onCloseShoes();

        // 最初に開いた場合はアイテムを事前に表示しておく
        let firstSetBrand: string;

        if (defaultGender === 'male') {
            setFirstOpen('508759');
        } else if (defaultGender === 'female') {
            setFirstOpen('508803');
        }

        // ブランドがセットされている場合はそれだけに限定する
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

    // // ここからcaps

    // // 検索処理
    const { getCaps, userCaps, loading, error } = useAllCaps();

    // // 着ているウェアを取得
    const [activeIndexCaps, setActiveIndexCaps] = useState(0);

    // // 検索条件の保存管理
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

    // 中心のウェアを取得

    const getActiveIndexCaps = (swiper) => {
        setActiveIndexCaps(swiper.activeIndex);
    };

    // 条件に合ったウェアを探す

    const onClickFetchCaps = (props) => {
        const data = {
            brand: props.brand,
            color: props.color,
            category: props.category,
            wear: 'caps',
            page: 1,
        };

        // カテゴリーがnullなら着ているウェアに切り替え
        if (props.category) {
            // カテゴリーがremoveなら配列を空にして表示させない
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

    // 選択したカテゴリー以外を閉じる
    const onClickCaps = useCallback(() => {
        onOpen();
        onCloseTops();
        onClosePants();
        onCloseShoes();

        // 最初に開いた場合はアイテムを事前に表示しておく
        let defaultCapsCategory: string;
        let firstSetBrand: string;

        if (isFirstOpenCaps.current === false) {
            if (defaultGender === 'male') {
                defaultCapsCategory = '506269';
            } else if (defaultGender === 'female') {
                defaultCapsCategory = '565818';
            }

            // ブランドがセットされている場合はそれだけに限定する
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
            // 初回の処理が終了
            isFirstOpenCaps.current = true;
        }
    }, [defaultGender]);

    // ここからtops

    // 検索処理
    const { getTops, userTops, loadingTops, errorTops } = useAllTops();

    // 着ているウェアを取得
    const [activeIndexTops, setActiveIndexTops] = useState(0);

    // // 検索条件の保存管理
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

    // 中心のウェアを取得

    const getActiveIndexTops = (swiper) => {
        setActiveIndexTops(swiper.activeIndex);
    };

    const onClickTops = () => {
        // 検索しない場合はreturn
        if (ignoreSearch === 'tops') {
            showMessage({
                title: 'トップスアイテムが固定されています',
                status: 'warning',
            });
            return;
        }

        onClose();
        onOpenTops();
        onClosePants();
        onCloseShoes();

        // 最初に開いた場合はアイテムを事前に表示しておく
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
        // 初回の処理が終了
        isFirstOpenTops.current = true;
    };

    // 条件に合ったウェアを探す

    const onClickFetchTops = (props) => {
        // 検索しない場合はreturn
        if (ignoreSearch === 'tops') {
            showMessage({
                title: 'トップスアイテムが固定されています',
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

    // ここからpants

    const onClickPants = () => {
        // 検索しない場合はreturn
        if (ignoreSearch === 'pants') {
            showMessage({
                title: 'パンツアイテムが固定されています',
                status: 'warning',
            });
            return;
        }

        onClose();
        onCloseTops();
        onOpenPants();
        onCloseShoes();

        // 最初に開いた場合はアイテムを事前に表示しておく
        let defaultPantsCategory: string;
        let firstSetBrand: string;

        if (isFirstOpenPants.current === false) {
            if (defaultGender === 'male') {
                defaultPantsCategory = '508772';
            } else if (defaultGender === 'female') {
                defaultPantsCategory = '508820';
            }

            // ブランドがセットされている場合はそれだけに限定する
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
            // 初回の処理が終了
            isFirstOpenPants.current = true;
        }
    };

    // 検索処理
    const { getPants, userPants, loadingPants, errorPants } = useAllPants();

    // 着ているウェアを取得
    const [activeIndexPants, setActiveIndexPants] = useState(0);

    // // 検索条件の保存管理
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

    // 中心のウェアを取得

    const getActiveIndexPants = (swiper) => {
        setActiveIndexPants(swiper.activeIndex);
    };

    // 条件に合ったウェアを探す

    const onClickFetchPants = (props) => {
        // 検索しない場合はreturn
        if (ignoreSearch === 'pants') {
            showMessage({
                title: 'パンツアイテムが固定されています',
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

    // ここからshoes

    const onClickShoes = useCallback(() => {
        onClose();
        onCloseTops();
        onClosePants();
        onOpenShoes();

        // 最初に開いた場合はアイテムを事前に表示しておく
        let defaultShoesCategory: string;
        let firstSetBrand: string;

        if (isFirstOpenShoes.current === false) {
            if (defaultGender === 'male') {
                defaultShoesCategory = '208025';
            } else if (defaultGender === 'female') {
                defaultShoesCategory = '565819';
            }

            // ブランドがセットされている場合はそれだけに限定する
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
            // 初回の処理が終了
            isFirstOpenShoes.current = true;
        }
    }, [defaultGender]);

    // 検索処理
    const { getShoes, userShoes, loadingShoes, errorShoes } = useAllShoes();

    // 着ているウェアを取得
    const [activeIndexShoes, setActiveIndexShoes] = useState(0);

    // // 検索条件の保存管理
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

    // 中心のウェアを取得

    const getActiveIndexShoes = (swiper) => {
        setActiveIndexShoes(swiper.activeIndex);
    };

    // 条件に合ったウェアを探す

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
                defaultTops={defaultTops}
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
                defaultCaps={defaultCaps}
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
                defaultPants={defaultPants}
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
                defaultShoes={defaultShoes}
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
            {/* <SearchBox
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
            /> */}
        </>
    );
};
