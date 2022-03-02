import { FC, memo, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNotLoginUser } from "../../provider/NotLoginUserProvider";
import 'swiper/swiper-bundle.css';
import axios from "axios";

import { useAllCaps } from "../../../../hooks/selectwear/useAllCaps.jsx";
import { useMessage } from "../../hooks/useMessage";

type Props = {
    defaultGender: string;
    onClickCaps: () => void;
    getActiveIndexCaps: any;
    setDataCaps: any;
    setCapsArray: any;
    dataCaps: any;
    capsArray: any;
    getCaps: any;
    userCaps: any;
    defaultCaps?: string;
}

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

export const CapsSect: FC<Props> = memo((props) => {
    const { notLoginUser, setNotLoginUser } = useNotLoginUser();
    const { onClickCaps, defaultGender, setDataCaps, setCapsArray, dataCaps, capsArray, getActiveIndexCaps, getCaps, userCaps, defaultCaps } = props;
    const { showMessage } = useMessage();


    // 検索結果のカウントを保持
    const [count, setCount] = useState<Number>(0);

    // 初回読み込み時のuseEffect管理
    const isFirstRenderCaps = useRef(true);

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

    // 着用アイテムがあった場合取得

    const [setCaps, setSetCaps] = useState('');
    const [defaultCategory, setDefaultCategory] = useState('');
    const [defaultUrl, setDefaultUrl] = useState('');

    useEffect(() => {
        if (notLoginUser) {
            if (defaultCaps) {

                axios.get("/api/getitemdetail", {
                    params: {
                        id: defaultCaps,
                        type: 'caps',
                    }
                }).then((res) => {
                    setDefaultCategory(res.data.category);
                    colorList.map((color) => {
                        if (res.data[color] !== null)
                            setDefaultUrl(res.data[color]);
                    })
                }).catch(() => {
                }).finally(() => {
                });
            }
        }
    }, [notLoginUser, defaultCaps]);

    return (
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

        ) : (defaultCaps ? (defaultUrl ? (
            <>
                <div onClick={onClickCaps} style={{ width: "15%", height: "50px", margin: "auto" }}>
                    <img className="wearImg" src={`/img/rakutenlist/${defaultGender}/${defaultCategory}/${defaultUrl}`} alt="" style={{ margin: 'auto' }} />
                </div>
            </>
        ) : (
            <div onClick={onClickCaps} style={{ width: "15%", height: "50px", margin: "auto" }}></div>
        )

        ) : (
            <>
                <div onClick={onClickCaps} style={{ width: "15%", height: "50px", margin: "auto" }}></div>
            </>
        )
        )
    )
});