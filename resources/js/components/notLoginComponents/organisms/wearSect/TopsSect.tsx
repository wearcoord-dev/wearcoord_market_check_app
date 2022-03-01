import { FC, memo, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNotLoginUser } from "../../provider/NotLoginUserProvider";
import 'swiper/swiper-bundle.css';
import axios from "axios";

import { useAllCaps } from "../../../../hooks/selectwear/useAllCaps.jsx";
import { useMessage } from "../../hooks/useMessage";

type Props = {
    defaultGender: string;
    onClickTops: () => void;
    getActiveIndexTops: any;
    setDataTops: any;
    setTopsArray: any;
    dataTops: any;
    topsArray: any;
    getTops: any;
    userTops: any;
    defaultTops?: string;
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

export const TopsSect: FC<Props> = memo((props) => {
    const { notLoginUser, setNotLoginUser } = useNotLoginUser();
    const { onClickTops, defaultGender, setDataTops, setTopsArray, dataTops, topsArray, getActiveIndexTops, getTops, userTops, defaultTops } = props;
    const { showMessage } = useMessage();


    // 検索結果のカウントを保持
    const [count, setCount] = useState<Number>(0);

    // 初回読み込み時のuseEffect管理
    const isFirstRenderTops = useRef(true);

    useEffect(() => {
        if (!isFirstRenderTops.current) {
            if (userTops[0]) {
                setCount(userTops[0].count);
            }
            if (userTops.length == 0) {
                setCount(0);
                // メッセージバーを表示
                showMessage({ title: "条件に合ったものが見つかりませんでした", status: "error" });
            }
        } else {
            // 初回の処理が終了
            isFirstRenderTops.current = false;
        }
    }, [userTops]);

    // 検索件数が更新された場合にメッセージバーを表示

    useEffect(() => {
        if (userTops[0]) {
            if (count > 0) {
                showMessage({ title: `${userTops[0].count}件見つかりました`, status: "success" });
            }
        }
    }, [count])

    const onChangeEndTops = () => {

        if (dataTops) {
            const newPage = dataTops.page + 1;

            const data = {
                'brand': dataTops.brand,
                'color': dataTops.color,
                'category': dataTops.category,
                'wear': 'tops',
                'page': newPage,
            }
            setDataTops(data);

            // カウントが3件以上だと検索(表示が少なすぎた際の自動検索を避ける)
            if (count > 3) {
                getTops(data);
            }
        }

    }

    useEffect(() => {
        setTopsArray([...topsArray, ...userTops]);
    }, [userTops]);

    // 着用アイテムがあった場合取得

    const [setTops, setSetTops] = useState('');
    const [defaultCategory, setDefaultCategory] = useState('');
    const [defaultUrl, setDefaultUrl] = useState('');

    // console.log(defaultUrl, defaultCategory)
    // console.log(defaultCategory)

    useEffect(() => {
        if (notLoginUser) {
            if (defaultTops) {

                axios.get("/api/getitemdetail", {
                    params: {
                        id: defaultTops,
                        type: 'tops',
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
    }, [notLoginUser, defaultTops]);

    return (
        topsArray.length ? (
            <>
                <Swiper id="controller2"
                    slidesPerView={3}
                    centeredSlides={true}
                    onSlideChangeTransitionEnd={getActiveIndexTops}
                    onReachEnd={onChangeEndTops}
                >
                    {topsArray.map((wear) => (
                        <SwiperSlide onClick={onClickTops} className="wearLi" key={wear.id}  >
                            <img className="wearImg" src={`/img/rakutenlist/${defaultGender}/${wear.category}/${wear.url}`} alt="" style={{ margin: 'auto' }} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>

        ) : (defaultTops ? (defaultUrl ? (
            <>
                    <div onClick={onClickTops} style={{ width: "100%", height: "130px", margin: "auto" }}>
                        <img src={`/img/rakutenlist/${defaultGender}/${defaultCategory}/${defaultUrl}`} alt="" style={{ width: "125px", height: "125px", objectFit: "contain", zIndex: 100, position: "relative", margin: "auto" }} />
                </div>
            </>
        ) : (null)

        ) : (
            <>
                <div onClick={onClickTops} style={{ width: "100%", height: "130px", margin: "auto" }}></div>
            </>
        )
        )
    )
});