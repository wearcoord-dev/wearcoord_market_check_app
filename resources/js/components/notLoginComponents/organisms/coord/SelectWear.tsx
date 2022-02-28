import { useDisclosure } from "@chakra-ui/react";
import { FC, memo, useCallback, useEffect, useRef, useState } from "react";
import { SearchBox } from "../../molecules/SearchBox";
import { useNotLoginUser } from "../../provider/NotLoginUserProvider";

import { useAllCaps } from "../../../../hooks/selectwear/useAllCaps.jsx";
import { useMessage } from "../../hooks/useMessage";
import { WearType } from "../../types/WearType";

export const SelectWear: FC = memo(() => {
    const { notLoginUser } = useNotLoginUser();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { showMessage } = useMessage();

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

    // 選択したカテゴリー以外を閉じる
    const onClickCaps = useCallback(() => {
        onOpen();
        onCloseTops();
        onClosePants();
        onCloseShoes();
    }, []);

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

    // 検索処理
    const { getCaps, userCaps, loading, error } = useAllCaps();

    // 着ているウェアを取得
    const [activeIndexCaps, setActiveIndexCaps] = useState<Number>(0);

    // 検索条件の保存管理
    const [capsSel, setCapsSel] = useState<Array<WearType>>();
    const [dataCaps, setDataCaps] = useState<Object>({});
    const [capsArray, setCapsArray] = useState([]);
    const [showCaps, setShowCaps] = useState<Number>(0);


    // 検索結果のカウントを保持
    const [count, setCount] = useState<Number>(0);

    // 初回読み込み時のuseEffect管理
    const isFirstRenderCaps = useRef(true);


    useEffect(() => {
        if (!isFirstRenderCaps.current) {
            if (userCaps[0]) {
                setCount(userCaps[0].count);
                // スナックバーを表示
                showMessage({ title: `${count}件見つかりました`, status: "success" });
            }
            if (userCaps.length == 0) {
                setCount(0);
                // スナックバーを表示
                showMessage({ title: "条件に合ったものが見つかりませんでした", status: "error" });
            }
        } else {
            // 初回の処理が終了
            isFirstRenderCaps.current = false;
        }
    }, [userCaps]);

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
                setDataCaps([]);
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
        <>
            <div onClick={onClickCaps} style={{ width: "15%", height: "50px", margin: "auto" }}></div>
        </>
    )

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
            />
        </>
    )
});