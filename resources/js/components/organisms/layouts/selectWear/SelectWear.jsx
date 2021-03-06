import { Button, Popover, Popper, Snackbar } from "@material-ui/core";
import { memo, useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useAllCaps } from "../../../../hooks/selectwear/useAllCaps";
import { useAllPants } from "../../../../hooks/selectwear/useAllPants";
import { useAllShoes } from "../../../../hooks/selectwear/useAllShoes";
import { useAllTops } from "../../../../hooks/selectwear/useAllTops";
import { useGetUserWear } from "../../../../hooks/selectwear/useGetUserWear";
import { useRegisterWear } from "../../../../hooks/selectwear/useRegisterWear";
import { WearSearch } from "../../../molecules/searchbox/WearSearch";
import { UserContext } from "../../../providers/UserProvider";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import SearchIcon from '@material-ui/icons/Search';
import { Alert } from "@material-ui/lab";


export const SelectWear = memo(() => {
    const { getCaps, userCaps, loading, error } = useAllCaps();
    const { getTops, userTops, loadingTops, errorTops } = useAllTops();
    const { getPants, userPants, loadingPants, errorPants } = useAllPants();
    const { getShoes, userShoes, loadingShoes, errorShoes } = useAllShoes();
    const { RegisterWear } = useRegisterWear();
    const { GetWear, userWearInfo, loadingWear, errorWear } = useGetUserWear();

    const context = useContext(UserContext);

    // 着ているウェアを取得
    const [activeIndexCaps, setActiveIndexCaps] = useState(0);
    const [activeIndexTops, setActiveIndexTops] = useState(0);
    const [activeIndexPants, setActiveIndexPants] = useState(0);
    const [activeIndexShoes, setActiveIndexShoes] = useState(0);

    // 検索条件の保存管理
    const [capsSel, setCapsSel] = useState({ brand: "", color: "", category: "", wear: "" });
    const [topsSel, setTopsSel] = useState({ brand: "", color: "", category: "", wear: "" });
    const [pantsSel, setPantsSel] = useState({ brand: "", color: "", category: "", wear: "" });
    const [shoesSel, setShoesSel] = useState({ brand: "", color: "", category: "", wear: "" });

    // 検索結果のカウントを保持
    const [count, setCount] = useState();

    const isFirstRenderCaps = useRef(false);
    const isFirstRenderTops = useRef(false);
    const isFirstRenderPants = useRef(false);
    const isFirstRenderShoes = useRef(false);

    // このeffectは初回レンダー時のみ呼ばれるeffect
    useEffect(() => {
        isFirstRenderCaps.current = true;
        isFirstRenderTops.current = true;
        isFirstRenderPants.current = true;
        isFirstRenderShoes.current = true;
    }, [])

    useEffect(() => {
        if (!isFirstRenderCaps.current) {
            if (userCaps[0]) {
                setCount(userCaps[0].count);
                // スナックバーを表示
                setOpenSnack(true);
            }
            if (userCaps.length == 0) {
                setCount(0);
                // スナックバーを表示
                setOpenSnack(true);
            }
        } else {
            // 初回の処理が終了
            isFirstRenderCaps.current = false;
        }
    }, [userCaps]);


    useEffect(() => {
        if (!isFirstRenderTops.current) {
            if (userTops[0]) {
                setCount(userTops[0].count);
                setOpenSnack(true);
            }
            if (userTops.length == 0) {
                setCount(0);
                setOpenSnack(true);
            }
        } else {
            // 初回の処理が終了
            isFirstRenderTops.current = false;
        }
    }, [userTops]);

    useEffect(() => {
        if (!isFirstRenderPants.current) {
            if (userPants[0]) {
                setCount(userPants[0].count);
                setOpenSnack(true);
            }
            if (userPants.length == 0) {
                setCount(0);
                setOpenSnack(true);
            }
        } else {
            // 初回の処理が終了
            isFirstRenderPants.current = false;
        }
    }, [userPants]);

    useEffect(() => {
        if (!isFirstRenderShoes.current) {
            if (userShoes[0]) {
                setCount(userShoes[0].count);
                setOpenSnack(true);
            }
            if (userShoes.length == 0) {
                setCount(0);
                setOpenSnack(true);
            }
        } else {
            // 初回の処理が終了
            isFirstRenderShoes.current = false;
        }
    }, [userShoes]);

    const [showCaps, setShowCaps] = useState(0);

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
            setOpenSnackWarning(true);
            setCapsArray([]);
            setShowCaps(0);
        }
    }

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
    };
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

    const onClickRegisterWear = () => {

        let capsInfo = null;

        // 非表示フラグが立っている場合は中身をnullにする
        if (showCaps == 1) {
            capsInfo = null;
        } else {
            capsInfo = capsArray[activeIndexCaps];
        }

        const obj = {
            "caps": capsInfo,
            "tops": topsArray[activeIndexTops],
            "pants": pantsArray[activeIndexPants],
            "shoes": shoesArray[activeIndexShoes],
            "userid": context.contextName,
        }

        RegisterWear(obj);
    }
    const userCheck = context.contextName;

    useEffect(() => {
        if (userCheck !== undefined) {
            GetWear(context)
        }
    }, [userCheck]);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const getActiveIndexCaps = (swiper) => {
        setActiveIndexCaps(swiper.activeIndex);
    }

    const getActiveIndexTops = (swiper) => {
        setActiveIndexTops(swiper.activeIndex);
    }

    const getActiveIndexPants = (swiper) => {
        setActiveIndexPants(swiper.activeIndex);
    }

    const getActiveIndexShoes = (swiper) => {
        setActiveIndexShoes(swiper.activeIndex);
    }

    // 無限スクロール実装

    // caps

    const [dataCaps, setDataCaps] = useState({});
    const [capsArray, setCapsArray] = useState([]);

    const onChangeEndCaps = () => {

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
                        <SwiperSlide className="wearLi" key={wear.id}  >
                            <img className="wearImg" src={`/img/rakutenlist/${context.contextName.gender}/${wear.category}/${wear.url}`} alt="" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>

        ) : (
            <>
                {userWearInfo ? (errorWear ? (
                    <p style={{ color: "red" }}>データの取得に失敗しました</p>
                ) : loadingWear ? (
                    <p>Loading...</p>
                    // 非表示でない場合は表示させる
                ) : (showCaps == 0 ? (

                    // capsがnullでない場合は表示させる
                    <>
                        {userWearInfo[0] ? <div style={{ textAlign: "center", margin: "auto", height: "50px" }}>
                            <img style={{ width: "60px" }} src={`/img/rakutenlist/${context.contextName.gender}/${userWearInfo[0].capsData.category}/${userWearInfo[0].capsData.url}`} alt="" />
                        </div> : <div style={{ width: "15%", height: "50px", margin: "auto" }}></div>}
                    </>
                ) : (
                    <>
                        <div style={{ width: "15%", height: "50px", margin: "auto" }}></div>
                    </>
                )
                )) : <></>}
            </>
        )
    )

    // tops

    const [dataTops, setDataTops] = useState({});
    const [topsArray, setTopsArray] = useState([]);

    const onChangeEndTops = () => {

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

    useEffect(() => {
        setTopsArray([...topsArray, ...userTops]);
    }, [userTops]);

    const topsComponent = (

        topsArray.length ? (
            <>
                <Swiper id="controller2"
                    slidesPerView={3}
                    centeredSlides={true}
                    onSlideChangeTransitionEnd={getActiveIndexTops}
                    onReachEnd={onChangeEndTops}
                >
                    {topsArray.map((wear) => (
                        <SwiperSlide className="wearLi" key={wear.id}  >
                            <img className="wearImg" src={`/img/rakutenlist/${context.contextName.gender}/${wear.category}/${wear.url}`} alt="" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>

        ) : (
            <>
                {userWearInfo ? (errorWear ? (
                    <p style={{ color: "red" }}>データの取得に失敗しました</p>
                ) : loadingWear ? (
                    <p>Loading...</p>
                ) : (

                    // topsdataがnullなら代替
                    <>
                        {userWearInfo[1] ? <div style={{ textAlign: "center", margin: "auto" }}>
                            <img style={{ width: "125px", height: "125px", objectFit: "contain", zIndex: "100", position: "relative" }} src={`/img/rakutenlist/${context.contextName.gender}/${userWearInfo[1].topsData.category}/${userWearInfo[1].topsData.url}`} alt="" />
                        </div> : <div style={{ width: "100%", height: "130px", margin: "auto" }}></div>}
                    </>
                )) : <></>}
            </>
        )
    )

    // pants

    const [dataPants, setDataPants] = useState({});
    const [pantsArray, setPantsArray] = useState([]);

    const onChangeEndPants = () => {

        const newPage = dataPants.page + 1;

        const data = {
            'brand': dataPants.brand,
            'color': dataPants.color,
            'category': dataPants.category,
            'wear': 'pants',
            'page': newPage,
        }
        setDataPants(data);

        // カウントが3件以上だと検索(表示が少なすぎた際の自動検索を避ける)
        if (count > 3) {
            getPants(data);
        }
    }

    useEffect(() => {
        setPantsArray([...pantsArray, ...userPants]);
    }, [userPants]);

    const pantsComponent = (

        pantsArray.length ? (
            <>
                <Swiper id="controller3"
                    slidesPerView={3}
                    centeredSlides={true}
                    onSlideChangeTransitionEnd={getActiveIndexPants}
                    onReachEnd={onChangeEndPants}
                >
                    {pantsArray.map((wear) => (
                        <SwiperSlide className="wearLi" key={wear.id}  >
                            <img className="wearImg" src={`/img/rakutenlist/${context.contextName.gender}/${wear.category}/${wear.url}`} alt="" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>

        ) : (
            <>
                {userWearInfo ? (errorWear ? (
                    <p style={{ color: "red" }}>データの取得に失敗しました</p>
                ) : loadingWear ? (
                    <p>Loading...</p>
                ) : (

                    // pantsdataがnullなら代替
                    <>
                        {userWearInfo[2] ? <div style={{ textAlign: "center", margin: "auto" }}>
                            <img style={{ width: "100%", height: "170px", objectFit: "contain", position: "relative" }} src={`/img/rakutenlist/${context.contextName.gender}/${userWearInfo[2].pantsData.category}/${userWearInfo[2].pantsData.url}`} alt="" />
                        </div> : <div style={{ width: "100%", height: "170px", margin: "auto" }}></div>}
                    </>
                )) : <></>}
            </>
        )
    )

    // shoes

    const [dataShoes, setDataShoes] = useState({});
    const [shoesArray, setShoesArray] = useState([]);

    const onChangeEndShoes = () => {

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

    useEffect(() => {
        setShoesArray([...shoesArray, ...userShoes]);
    }, [userShoes]);

    const shoesComponent = (

        shoesArray.length ? (
            <>
                <Swiper id="controller4"
                    slidesPerView={3}
                    centeredSlides={true}
                    onSlideChangeTransitionEnd={getActiveIndexShoes}
                    onReachEnd={onChangeEndShoes}
                >
                    {shoesArray.map((wear) => (
                        <SwiperSlide className="wearLi" key={wear.id}  >
                            <img className="wearImg" src={`/img/rakutenlist/${context.contextName.gender}/${wear.category}/${wear.url}`} alt="" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>

        ) : (
            <>
                {userWearInfo ? (errorWear ? (
                    <p style={{ color: "red" }}>データの取得に失敗しました</p>
                ) : loadingWear ? (
                    <p>Loading...</p>
                ) : (

                    // shoesdataがnullなら代替
                    <>
                        {userWearInfo[3] ? <div style={{ textAlign: "center", margin: "auto" }}>
                            <img style={{ width: "100%", height: "100px", objectFit: "contain" }} src={`/img/rakutenlist/${context.contextName.gender}/${userWearInfo[3].shoesData.category}/${userWearInfo[3].shoesData.url}`} alt="" />
                        </div> : <div style={{ width: "100%", height: "100px", margin: "auto" }}></div>}
                    </>
                )) : <></>}
            </>
        )
    )

    // スナックバー
    const [openSnack, setOpenSnack] = useState(false);
    const [openSnackWarning, setOpenSnackWarning] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnack(false);
    };

    const handleCloseWarning = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackWarning(false);
    };

    return (
        <>
            <div data-html2canvas-ignore="true" style={{ width: "40px", position: "absolute", left: "50%", transform: "translateX(-50%)", top: "24px" }}><img style={{ width: "100%", borderRadius: "50%" }} src={userCheck.faceImg} alt="" /></div>

            <div style={{ display: "flex", position: "relative" }}>{capsComponent}</div>

            <div style={{ display: "flex", height: "115px", marginTop: "16px" }}>{topsComponent}</div>


            <div style={{ display: "flex", height: "140px" }}>{pantsComponent}</div>

            <div style={{ display: "flex", overflowX: "scroll", marginTop: "-10px" }}>{shoesComponent}</div>

            <div style={{ paddingBottom: "180px" }}></div>

            <br />

            <Button style={{ position: "fixed", bottom: "100px", left: "0", backgroundColor: "#ddd", width: "130px", borderRadius: "0 10px 10px 0", fontSize: "12px", color: "#484848", boxShadow: "none", height: "60px" }} aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
                <SearchIcon style={{ paddingRight: "6px" }} />
                着替える
            </Button>

            <Button
                style={{ position: "fixed", bottom: "100px", right: "0", backgroundColor: "#ddd", width: "130px", borderRadius: "10px 0 0 10px", fontSize: "12px", color: "#484848", boxShadow: "none", height: "60px" }} color="primary"
                variant="contained"
                onClick={onClickRegisterWear}
            >
                <CheckCircleOutlineIcon style={{ paddingRight: "6px" }} />
                ウェアを確定
            </Button>

            <Popper
                id={id}
                open={open}
                anchorEl={anchorEl}
                // onClose={handleClose}
                placement={'top'}
                className="popper"
                style={{ width: "100%" }}
            >
                <WearSearch
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

                    handleClick={handleClick}
                    onClickRegisterWear={onClickRegisterWear}
                />

            </Popper>

            <Snackbar open={openSnack} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" style={{ fontSize: "14px" }}>
                    {count}件ヒットしました！
                </Alert>
            </Snackbar>

            {/* <Snackbar open={openSnackWarning} autoHideDuration={2000} onClose={handleCloseWarning}>
                <Alert onClose={handleCloseWarning} severity="warning" style={{ fontSize: "14px" }}>
                    カテゴリーを選んでください！
                </Alert>
            </Snackbar> */}
        </>
    )
})