import { FC, memo, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNotLoginUser } from '../../provider/NotLoginUserProvider';
import 'swiper/swiper-bundle.css';
import axios from 'axios';

import { useAllCaps } from '../../../../hooks/selectwear/useAllCaps.jsx';
import { useMessage } from '../../hooks/useMessage';

type Props = {
    defaultGender: string;
    onClickPants: () => void;
    getActiveIndexPants: any;
    setDataPants: any;
    setPantsArray: any;
    dataPants: any;
    pantsArray: any;
    getPants: any;
    userPants: any;
    defaultPants?: string;
};

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

export const PantsEcSect: FC<Props> = memo((props) => {
    const {
        onClickPants,
        defaultGender,
        setDataPants,
        setPantsArray,
        dataPants,
        pantsArray,
        getActiveIndexPants,
        getPants,
        userPants,
        defaultPants,
    } = props;
    const { showMessage } = useMessage();

    // 検索結果のカウントを保持
    const [count, setCount] = useState<Number>(0);

    // 初回読み込み時のuseEffect管理
    const isFirstRenderPants = useRef(true);

    useEffect(() => {
        if (!isFirstRenderPants.current) {
            if (userPants[0]) {
                setCount(userPants[0].count);
            }
            if (userPants.length == 0) {
                setCount(0);
                // メッセージバーを表示
                showMessage({
                    title: '条件に合ったものが見つかりませんでした',
                    status: 'error',
                });
            }
        } else {
            // 初回の処理が終了
            isFirstRenderPants.current = false;
        }
    }, [userPants]);

    // 検索件数が更新された場合にメッセージバーを表示

    useEffect(() => {
        if (userPants[0]) {
            if (count > 0) {
                showMessage({
                    title: `${userPants[0].count}件見つかりました`,
                    status: 'success',
                });
            }
        }
    }, [count]);

    const onChangeEndPants = () => {
        if (dataPants) {
            const newPage = dataPants.page + 1;

            const data = {
                brand: dataPants.brand,
                color: dataPants.color,
                category: dataPants.category,
                wear: 'pants',
                page: newPage,
            };
            setDataPants(data);

            // カウントが3件以上だと検索(表示が少なすぎた際の自動検索を避ける)
            if (count > 3) {
                getPants(data);
            }
        }
    };

    useEffect(() => {
        setPantsArray([...pantsArray, ...userPants]);
    }, [userPants]);

    // 着用アイテムがあった場合取得

    const [setPants, setSetPants] = useState('');
    const [defaultCategory, setDefaultCategory] = useState('');
    const [defaultUrl, setDefaultUrl] = useState('');

    // console.log(defaultUrl, defaultCategory)
    // console.log(defaultCategory)

    useEffect(() => {
        if (defaultPants) {
            axios
                .get('/api/getitemdetail', {
                    params: {
                        id: defaultPants,
                        type: 'pants',
                    },
                })
                .then((res) => {
                    setDefaultCategory(res.data.category);
                    colorList.map((color) => {
                        if (res.data[color] !== null)
                            setDefaultUrl(res.data[color]);
                    });
                })
                .catch(() => {})
                .finally(() => {});
        }
    }, [defaultPants]);

    return pantsArray.length ? (
        <>
            <Swiper
                id="controller3"
                slidesPerView={3}
                centeredSlides={true}
                onSlideChangeTransitionEnd={getActiveIndexPants}
                onReachEnd={onChangeEndPants}
            >
                {pantsArray.map((wear) => (
                    <SwiperSlide
                        onClick={onClickPants}
                        className="wearLi"
                        key={wear.id}
                    >
                        <img
                            className="wearImg"
                            src={`/img/rakutenlist/${defaultGender}/${wear.category}/${wear.url}`}
                            alt=""
                            style={{ margin: 'auto' }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    ) : defaultPants ? (
        defaultUrl ? (
            <>
                <div
                    onClick={onClickPants}
                    style={{ width: '100%', height: '170px', margin: 'auto' }}
                >
                    <img
                        src={`/img/rakutenlist/${defaultGender}/${defaultCategory}/${defaultUrl}`}
                        alt=""
                        style={{
                            width: '100%',
                            height: '170px',
                            objectFit: 'contain',
                            position: 'relative',
                            margin: 'auto',
                        }}
                    />
                </div>
            </>
        ) : null
    ) : (
        <>
            <div
                onClick={onClickPants}
                style={{ width: '100%', height: '170px', margin: 'auto' }}
            ></div>
        </>
    );
});
