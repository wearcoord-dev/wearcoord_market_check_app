import { useDisclosure } from "@chakra-ui/react";
import { FC, memo, useCallback, useEffect, useRef, useState } from "react";
import { SearchBox } from "../../molecules/SearchBox";
import { useNotLoginUser } from "../../provider/NotLoginUserProvider";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import { useAllCaps } from "../../../../hooks/selectwear/useAllCaps.jsx";
import { useMessage } from "../../hooks/useMessage";
import { WearType, WearTypePage } from "../../types/WearType";
import { useRegisterWear } from "../../hooks/useRegisterWear";

type Props = {
    defaultGender: string;
    defaultMannequin: string;
}

type SendProps = {
    gender: string;
    mannequin: string;
    caps: string;
}

export const SelectWear: FC<Props> = memo((props) => {
    const { defaultGender, defaultMannequin } = props;

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

    // ここからcaps

    // 検索処理
    const { getCaps, userCaps, loading, error } = useAllCaps();

    // 着ているウェアを取得
    const [activeIndexCaps, setActiveIndexCaps] = useState(0);

    // 検索条件の保存管理
    const [capsSel, setCapsSel] = useState({ brand: "", color: "", category: "", wear: "" });
    const [dataCaps, setDataCaps] = useState({ brand: "", color: "", category: "", wear: "", page: null });
    const [capsArray, setCapsArray] = useState([]);
    const [showCaps, setShowCaps] = useState<Number>(0);

    // 検索結果のカウントを保持
    const [count, setCount] = useState<Number>(0);

    // 初回読み込み時のuseEffect管理
    const isFirstRenderCaps = useRef(true);

    const getActiveIndexCaps = (swiper) => {
        setActiveIndexCaps(swiper.activeIndex);
    }

    useEffect(() => {
        if (!isFirstRenderCaps.current) {
            if (userCaps[0]) {
                setCount(userCaps[0].count);
            }
            if (userCaps.length == 0) {
                setCount(0);
                // メッセージバーを表示
                showMessage({ title: "条件に合ったものが見つかりませんでした", status: "error" });
            }
        } else {
            // 初回の処理が終了
            isFirstRenderCaps.current = false;
        }
    }, [userCaps]);

    // 検索件数が更新された場合にメッセージバーを表示

    useEffect(() => {
        if (userCaps[0]) {
            if (count > 0) {
                showMessage({ title: `${userCaps[0].count}件見つかりました`, status: "success" });
            }
        }
    }, [count])

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

    const onChangeEndCaps = () => {

        if (dataCaps) {
            const newPage = dataCaps.page + 1;

            const data = {
                'brand': dataCaps.brand,
                'color': dataCaps.color,
                'category': dataCaps.category,
                'wear': 'caps',
                'page': newPage,
            }
            setDataCaps(data);

            // カウントが3件以上だと検索(表示が少なすぎた際の自動検索を避ける)
            if (count > 3) {
                getCaps(data);
            }
        }

    }

    useEffect(() => {
        setCapsArray([...capsArray, ...userCaps]);
    }, [userCaps]);

    const capsComponent = (

        capsArray.length ? (
            <>
                <Swiper id="controller"
                    slidesPerView={3}
                    centeredSlides={true}
                    onSlideChangeTransitionEnd={getActiveIndexCaps}
                    onReachEnd={onChangeEndCaps}
                >
                    {capsArray.map((wear) => (
                        <SwiperSlide onClick={onClickCaps} className="wearLi" key={wear.id}  >
                            <img className="wearImg" src={`/img/rakutenlist/${defaultGender}/${wear.category}/${wear.url}`} alt="" style={{ margin: 'auto' }} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>

        ) : (
            <>
                <div onClick={onClickCaps} style={{ width: "15%", height: "50px", margin: "auto" }}></div>
            </>
        )
    )

    // ここまでcaps

    const topsComponent = (
        <>
            <div onClick={onClickTops} style={{ width: "100%", height: "130px", margin: "auto" }}></div>
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

        let capsInfo: object = null;

        // 非表示フラグが立っている場合は中身をnullにする
        if (showCaps == 1) {
            capsInfo = null;
        } else {
            capsInfo = capsArray[activeIndexCaps];
        }

        const obj = {
            gender: defaultGender,
            mannequin: defaultMannequin,
            // @ts-ignore:next-line
            caps: capsInfo.id,
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
                defaultGender={defaultGender}
                capsSel={capsSel}
                onClickRegisterWear={onClickRegisterWear}
            />
        </>
    )
});