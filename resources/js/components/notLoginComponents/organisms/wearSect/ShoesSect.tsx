import { FC, memo, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNotLoginUser } from "../../provider/NotLoginUserProvider";
import 'swiper/swiper-bundle.css';
import axios from "axios";

import { useAllCaps } from "../../../../hooks/selectwear/useAllCaps.jsx";
import { useMessage } from "../../hooks/useMessage";

type Props = {
    defaultGender: string;
    onClickShoes: () => void;
    getActiveIndexShoes: any;
    setDataShoes: any;
    setShoesArray: any;
    dataShoes: any;
    shoesArray: any;
    getShoes: any;
    userShoes: any;
    defaultShoes?: string;
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

export const ShoesSect: FC<Props> = memo((props) => {
    const { notLoginUser, setNotLoginUser } = useNotLoginUser();
    const { onClickShoes, defaultGender, setDataShoes, setShoesArray, dataShoes, shoesArray, getActiveIndexShoes, getShoes, userShoes, defaultShoes } = props;
    const { showMessage } = useMessage();


    // 検索結果のカウントを保持
    const [count, setCount] = useState<Number>(0);

    // 初回読み込み時のuseEffect管理
    const isFirstRenderShoes = useRef(true);

    useEffect(() => {
        if (!isFirstRenderShoes.current) {
            if (userShoes[0]) {
                setCount(userShoes[0].count);
            }
            if (userShoes.length == 0) {
                setCount(0);
                // メッセージバーを表示
                showMessage({ title: "条件に合ったものが見つかりませんでした", status: "error" });
            }
        } else {
            // 初回の処理が終了
            isFirstRenderShoes.current = false;
        }
    }, [userShoes]);

    // 検索件数が更新された場合にメッセージバーを表示

    useEffect(() => {
        if (userShoes[0]) {
            if (count > 0) {
                showMessage({ title: `${userShoes[0].count}件見つかりました`, status: "success" });
            }
        }
    }, [count])

    const onChangeEndShoes = () => {

        if (dataShoes) {
            const newPage = dataShoes.page + 1;

            const data = {
                'brand': dataShoes.brand,
                'color': dataShoes.color,
                'category': dataShoes.category,
                'wear': 'shoes',
                'page': newPage,
            }
            setDataShoes(data);

            // カウントが3件以上だと検索(表示が少なすぎた際の自動検索を避ける)
            if (count > 3) {
                getShoes(data);
            }
        }

    }

    useEffect(() => {
        setShoesArray([...shoesArray, ...userShoes]);
    }, [userShoes]);

    // 着用アイテムがあった場合取得

    const [setShoes, setSetShoes] = useState('');
    const [defaultCategory, setDefaultCategory] = useState('');
    const [defaultUrl, setDefaultUrl] = useState('');


    useEffect(() => {
        if (notLoginUser) {
            if (defaultShoes) {

                axios.get("/api/getitemdetail", {
                    params: {
                        id: defaultShoes,
                        type: 'shoes',
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
    }, [notLoginUser, defaultShoes]);

    return (
        shoesArray.length ? (
            <>
                <Swiper id="controller4"
                    slidesPerView={3}
                    centeredSlides={true}
                    onSlideChangeTransitionEnd={getActiveIndexShoes}
                    onReachEnd={onChangeEndShoes}
                >
                    {shoesArray.map((wear) => (
                        <SwiperSlide onClick={onClickShoes} className="wearLi" key={wear.id}  >
                            <img className="wearImg" src={`/img/rakutenlist/${defaultGender}/${wear.category}/${wear.url}`} alt="" style={{ margin: 'auto' }} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>

        ) : (defaultShoes ? (defaultUrl ? (
            <>
                <div onClick={onClickShoes} style={{ textAlign: "center", margin: "auto" }}>
                    <img src={`/img/rakutenlist/${defaultGender}/${defaultCategory}/${defaultUrl}`} alt="" style={{ width: "100%", height: "100px", objectFit: "contain", position: "relative", margin: "auto" }} />
                </div>
            </>
        ) : (null)

        ) : (
            <>
                <div onClick={onClickShoes} style={{ width: "100%", height: "100px", margin: "auto" }}></div>
            </>
        )
        )
    )
});