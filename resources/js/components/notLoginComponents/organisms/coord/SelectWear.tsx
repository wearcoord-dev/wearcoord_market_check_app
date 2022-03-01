import { useDisclosure } from "@chakra-ui/react";
import { FC, memo, useCallback, useEffect, useRef, useState } from "react";
import { SearchBox } from "../../molecules/SearchBox";
import { useNotLoginUser } from "../../provider/NotLoginUserProvider";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import { useAllCaps } from "../../../../hooks/selectwear/useAllCaps.jsx";
import { useAllTops } from "../../../../hooks/selectwear/useAllTops.jsx";
import { useMessage } from "../../hooks/useMessage";
import { WearType, WearTypePage } from "../../types/WearType";
import { useRegisterWear } from "../../hooks/useRegisterWear";
import { CapsSect } from "../wearSect/CapsSect";
import { TopsSect } from "../wearSect/TopsSect";

type Props = {
    defaultGender: string;
    defaultMannequin: string;
    defaultCaps?: string;
}

type SendProps = {
    gender: string;
    mannequin: string;
    caps: string;
}

export const SelectWear: FC<Props> = memo((props) => {
    const { defaultGender, defaultMannequin, defaultCaps } = props;

    const { notLoginUser } = useNotLoginUser();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { showMessage } = useMessage();
    const { registerWearLocal } = useRegisterWear();

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

    // console.log(notLoginUser);

    // 初回読み込み時のuseEffect管理
    const isFirstOpenCaps = useRef(false);
    const isFirstOpenTops = useRef(false);

    // 選択したカテゴリー以外を閉じる
    const onClickCaps = useCallback(() => {
        onOpen();
        onCloseTops();
        onClosePants();
        onCloseShoes();

        // 最初に開いた場合はアイテムを事前に表示しておく
        let defaultCapsCategory: string;

        if (isFirstOpenCaps.current === false) {

            if (defaultGender === 'male') {
                defaultCapsCategory = '506269';
            } else if (defaultGender === 'female') {
                defaultCapsCategory = '565818';
            }

            const data = {
                'brand': 'all',
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

        if (isFirstOpenTops.current === false) {

            if (defaultGender === 'male') {
                defaultTopsCategory = '508759';
            } else if (defaultGender === 'female') {
                defaultTopsCategory = '508803';
            }

            const data = {
                'brand': 'all',
                'color': 'all',
                'category': defaultTopsCategory,
                'wear': 'tops',
                'page': 1,
            }
            setDataTops(data);
            setTopsArray([]);
            setTopsSel(data);
            getTops(data);
            setShowTops(0);
            // 初回の処理が終了
            isFirstOpenCaps.current = true;
        }
    }, []);

    const onClickPants = useCallback(() => {
        onClose();
        onCloseTops();
        onOpenPants();
        onCloseShoes();
    }, []);

    const onClickShoes = useCallback(() => {
        onClose();
        onCloseTops();
        onClosePants();
        onOpenShoes();
    }, []);

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
                // defaultTops={defaultTops}
            />
        </>
    )

    const pantsComponent = (
        <>
            <div onClick={onClickPants} style={{ width: "100%", height: "170px", margin: "auto" }}></div>
        </>
    )

    const shoesComponent = (
        <>
            <div onClick={onClickShoes} style={{ width: "100%", height: "100px", margin: "auto" }}></div>
        </>
    )

    // 作成したコーデを保存

    const onClickRegisterWear = () => {

        let capsInfo = null;

        // 非表示フラグが立っている場合は中身をnullにする
        if (showCaps == 1) {
            capsInfo = null;
        } else {
            capsInfo = capsArray[activeIndexCaps];
        }

        const obj = {
            gender: defaultGender,
            mannequin: defaultMannequin,
            caps: capsInfo,
            // "tops": topsArray[activeIndexTops],
            // "pants": pantsArray[activeIndexPants],
            // "shoes": shoesArray[activeIndexShoes],
        }
        registerWearLocal(obj);
    }

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
                defaultGender={defaultGender}
                onClickRegisterWear={onClickRegisterWear}
            />
        </>
    )
});