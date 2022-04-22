import { useDisclosure } from "@chakra-ui/react";
import { FC, memo, useCallback, useEffect, useRef, useState } from "react";
import { SearchBox } from "../../molecules/SearchBox";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import { useAllCaps } from "../../../../hooks/selectwear/useAllCaps.jsx";
import { useAllTops } from "../../../../hooks/selectwear/useAllTops.jsx";
import { useAllPants } from "../../../../hooks/selectwear/useAllPants.jsx";
import { useAllShoes } from "../../../../hooks/selectwear/useAllShoes.jsx";
import { useMessage } from "../../hooks/useMessage";
import { useRegisterWear } from "../../hooks/useRegisterWear";
import { CapsSect } from "../wearSect/CapsSect";
import { TopsSect } from "../wearSect/TopsSect";
import { PantsSect } from "../wearSect/PantsSect";
import { ShoesSect } from "../wearSect/ShoesSect";
import { useHistory } from "react-router-dom";

type Props = {
    defaultGender: string;
    defaultMannequin: string;
    defaultCaps?: string;
    defaultTops?: string;
    defaultPants?: string;
    defaultShoes?: string;
    defaultBrand?: string;
}

export const SelectWear: FC<Props> = memo((props) => {
    const { defaultGender, defaultMannequin, defaultCaps, defaultTops, defaultPants, defaultShoes, defaultBrand } = props;

    const { registerWearLocal } = useRegisterWear();
    const history = useHistory();

    const { isOpen, onOpen, onClose } = useDisclosure();

    const {
        isOpen: isOpenTops,
        onOpen: onOpenTops,
        onClose: onCloseTops
    } = useDisclosure();
    const {
        isOpen: isOpenPants,
        onOpen: onOpenPants,
        onClose: onClosePants
    } = useDisclosure();
    const {
        isOpen: isOpenShoes,
        onOpen: onOpenShoes,
        onClose: onCloseShoes
    } = useDisclosure();


    // 初回読み込み時のuseEffect管理
    const isFirstOpenCaps = useRef(false);
    const isFirstOpenTops = useRef(false);
    const isFirstOpenPants = useRef(false);
    const isFirstOpenShoes = useRef(false);


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
            if (defaultBrand) {
                firstSetBrand = defaultBrand;
            } else {
                firstSetBrand = 'all';
            }

            const data = {
                'brand': firstSetBrand,
                'color': 'all',
                'category': defaultCapsCategory,
                'wear': 'caps',
                'page': 1,
            }
            setDataCaps(data);
            setCapsArray([]);
            setCapsSel(data);
            getCaps(data);
            setShowCaps(0);
            // 初回の処理が終了
            isFirstOpenCaps.current = true;
        }
    }, [defaultGender]);

    const onClickTops = useCallback(() => {
        onClose();
        onOpenTops();
        onClosePants();
        onCloseShoes();

        // 最初に開いた場合はアイテムを事前に表示しておく
        let defaultTopsCategory: string;
        let firstSetBrand: string;

        if (isFirstOpenTops.current === false) {

            if (defaultGender === 'male') {
                defaultTopsCategory = '508759';
            } else if (defaultGender === 'female') {
                defaultTopsCategory = '508803';
            }
            if (defaultBrand) {
                firstSetBrand = defaultBrand;
            } else {
                firstSetBrand = 'all';
            }

            const data = {
                'brand': firstSetBrand,
                'color': 'all',
                'category': defaultTopsCategory,
                'wear': 'tops',
                'page': 1,
            }
            console.log(data)
            setDataTops(data);
            setTopsArray([]);
            setTopsSel(data);
            getTops(data);
            setShowTops(0);
            // 初回の処理が終了
            isFirstOpenTops.current = true;
        }
    }, [defaultGender]);

    const onClickPants = useCallback(() => {
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
            if (defaultBrand) {
                firstSetBrand = defaultBrand;
            } else {
                firstSetBrand = 'all';
            }

            const data = {
                'brand': firstSetBrand,
                'color': 'all',
                'category': defaultPantsCategory,
                'wear': 'pants',
                'page': 1,
            }
            setDataPants(data);
            setPantsArray([]);
            setPantsSel(data);
            getPants(data);
            setShowPants(0);
            // 初回の処理が終了
            isFirstOpenPants.current = true;
        }
    }, [defaultGender]);

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
            if (defaultBrand) {
                firstSetBrand = defaultBrand;
            } else{
                firstSetBrand = 'all';
            }

            const data = {
                'brand': firstSetBrand,
                'color': 'all',
                'category': defaultShoesCategory,
                'wear': 'shoes',
                'page': 1,
            }
            setDataShoes(data);
            setShoesArray([]);
            setShoesSel(data);
            getShoes(data);
            setShowShoes(0);
            // 初回の処理が終了
            isFirstOpenShoes.current = true;
        }
    }, [defaultGender]);

    const onClickAllClose = useCallback(() => {
        onClose();
        onCloseTops();
        onClosePants();
        onCloseShoes();
    }, []);

    // // ここからcaps

    // // 検索処理
    const { getCaps, userCaps, loading, error } = useAllCaps();

    // // 着ているウェアを取得
    const [activeIndexCaps, setActiveIndexCaps] = useState(0);

    // // 検索条件の保存管理
    const [capsSel, setCapsSel] = useState({ brand: "", color: "", category: "", wear: "" });
    const [dataCaps, setDataCaps] = useState({ brand: "", color: "", category: "", wear: "", page: null });
    const [capsArray, setCapsArray] = useState([]);
    const [showCaps, setShowCaps] = useState<Number>(0);

    // 中心のウェアを取得

    const getActiveIndexCaps = (swiper) => {
        setActiveIndexCaps(swiper.activeIndex);
    }

    // 条件に合ったウェアを探す

    const onClickFetchCaps = (props) => {

        const data = {
            'brand': props.brand,
            'color': props.color,
            'category': props.category,
            'wear': 'caps',
            'page': 1,
        }

        // カテゴリーがnullなら着ているウェアに切り替え
        if (props.category) {

            // カテゴリーがremoveなら配列を空にして表示させない
            if (props.category == 'remove') {
                setDataCaps({ brand: "", color: "", category: "", wear: "", page: null });
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
    }

    const capsComponent = (

        <CapsSect
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
    )

    // ここまでcaps

    // ここからtops

    // 検索処理
    const { getTops, userTops, loadingTops, errorTops } = useAllTops();

    // 着ているウェアを取得
    const [activeIndexTops, setActiveIndexTops] = useState(0);

    // // 検索条件の保存管理
    const [topsSel, setTopsSel] = useState({ brand: "", color: "", category: "", wear: "" });
    const [dataTops, setDataTops] = useState({ brand: "", color: "", category: "", wear: "", page: null });
    const [topsArray, setTopsArray] = useState([]);
    const [showTops, setShowTops] = useState<Number>(0);

    // 中心のウェアを取得

    const getActiveIndexTops = (swiper) => {
        setActiveIndexTops(swiper.activeIndex);
    }

    // 条件に合ったウェアを探す

    const onClickFetchTops = (props) => {

        const data = {
            'brand': props.brand,
            'color': props.color,
            'category': props.category,
            'wear': 'tops',
            'page': 1,
        }

        if (props.category) {
            setDataTops(data);
            setTopsArray([]);
            getTops(data);
        } else {
            setTopsArray([]);
        }
    }

    const topsComponent = (
        <>
            <TopsSect
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
    )

    // ここまでtops

    // ここからpants

    // 検索処理
    const { getPants, userPants, loadingPants, errorPants } = useAllPants();

    // 着ているウェアを取得
    const [activeIndexPants, setActiveIndexPants] = useState(0);

    // // 検索条件の保存管理
    const [pantsSel, setPantsSel] = useState({ brand: "", color: "", category: "", wear: "" });
    const [dataPants, setDataPants] = useState({ brand: "", color: "", category: "", wear: "", page: null });
    const [pantsArray, setPantsArray] = useState([]);
    const [showPants, setShowPants] = useState<Number>(0);

    // 中心のウェアを取得

    const getActiveIndexPants = (swiper) => {
        setActiveIndexPants(swiper.activeIndex);
    }

    // 条件に合ったウェアを探す

    const onClickFetchPants = (props) => {

        const data = {
            'brand': props.brand,
            'color': props.color,
            'category': props.category,
            'wear': 'pants',
            'page': 1,
        }

        if (props.category) {
            setDataPants(data);
            setPantsArray([]);
            getPants(data);
        } else {
            setPantsArray([]);
        }
    }

    const pantsComponent = (
        <>
            <PantsSect
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
    )

    // ここまでpants

    // ここからshoes

    // 検索処理
    const { getShoes, userShoes, loadingShoes, errorShoes } = useAllShoes();

    // 着ているウェアを取得
    const [activeIndexShoes, setActiveIndexShoes] = useState(0);

    // // 検索条件の保存管理
    const [shoesSel, setShoesSel] = useState({ brand: "", color: "", category: "", wear: "" });
    const [dataShoes, setDataShoes] = useState({ brand: "", color: "", category: "", wear: "", page: null });
    const [shoesArray, setShoesArray] = useState([]);
    const [showShoes, setShowShoes] = useState<Number>(0);

    // 中心のウェアを取得

    const getActiveIndexShoes = (swiper) => {
        setActiveIndexShoes(swiper.activeIndex);
    }

    // 条件に合ったウェアを探す

    const onClickFetchShoes = (props) => {

        const data = {
            'brand': props.brand,
            'color': props.color,
            'category': props.category,
            'wear': 'shoes',
            'page': 1,
        }

        if (props.category) {
            setDataShoes(data);
            setShoesArray([]);
            getShoes(data);
        } else {
            setShoesArray([]);
        }
    }

    const shoesComponent = (
        <>
            <ShoesSect
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
    )

    // ここまでshoes


    // 作成したコーデを保存

    const onClickRegisterWear = () => {

        let capsInfo = null;

        // 非表示フラグが立っている場合は中身をnullにする
        if (showCaps == 1) {
            capsInfo = "remove";
        } else {
            capsInfo = capsArray[activeIndexCaps] ?? defaultCaps;
        }

        const obj = {
            gender: defaultGender,
            mannequin: defaultMannequin,
            caps: capsInfo,
            tops: topsArray[activeIndexTops] ?? defaultTops,
            pants: pantsArray[activeIndexPants] ?? defaultPants,
            shoes: shoesArray[activeIndexShoes] ?? defaultShoes,
        }
        registerWearLocal(obj);
        history.push({
            pathname: '/sample',
            // state: { from: gender }
        });
    }

    // 最初にページを開いた場合topsを自動的に表示
    const [firstOpen, setFirstOpen] = useState('');

    useEffect(() => {
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
        if (defaultBrand) {
            firstSetBrand = defaultBrand;
        } else {
            firstSetBrand = 'all';
        }

        const data = {
            'brand': firstSetBrand,
            'color': 'all',
            'category': firstOpen,
            'wear': 'tops',
            'page': 1,
        }

        setDataTops(data);
        setTopsArray([]);
        setTopsSel(data);
        // getTops(data);
        setShowTops(0);
        isFirstOpenTops.current = true;

    }, [firstOpen, defaultGender]);

    return (
        <>
            <div data-html2canvas-ignore="true" style={{ width: "40px", position: "absolute", left: "50%", transform: "translateX(-50%)", top: "24px" }}><img style={{ width: "100%", borderRadius: "50%" }} alt="" /></div>

            <div style={{ display: "flex", position: "relative" }}>{capsComponent}</div>

            <div style={{ display: "flex", height: "115px", marginTop: "16px" }}>{topsComponent}</div>


            <div style={{ display: "flex", height: "140px" }}>{pantsComponent}</div>

            <div style={{ display: "flex", overflowX: "scroll", marginTop: "-10px" }}>{shoesComponent}</div>

            <SearchBox
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
                defaultBrand={defaultBrand}
                onClickRegisterWear={onClickRegisterWear}
            />
        </>
    )
});