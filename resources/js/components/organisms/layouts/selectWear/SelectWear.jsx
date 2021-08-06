import { Button, Popover, Popper } from "@material-ui/core";
import { memo, useContext, useEffect, useState } from "react";
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


    const onClickFetchCaps = (props) => {

        const data = {
            'brand': props.brand,
            'color': props.color,
            'category': props.category,
            'wear': 'caps',
            'page': 1,
        }
        setDataCaps(data);
        setCapsArray([]);
        getCaps(data);
    }
    const onClickFetchTops = (props) => {

        const data = {
            'brand': props.brand,
            'color': props.color,
            'category': props.category,
            'wear': 'tops',
            'page': 1,
        }
        setDataTops(data);
        setTopsArray([]);
        getTops(data);
    };
    const onClickFetchPants = (props) => {

        console.log(props.category);

        const data = {
            'brand': props.brand,
            'color': props.color,
            'category': props.category,
            'wear': 'pants',
            'page': 1,
        }
        setDataPants(data);
        setPantsArray([]);
        getPants(data);
    }
    const onClickFetchShoes = (props) => {

        console.log(props.category);

        const data = {
            'brand': props.brand,
            'color': props.color,
            'category': props.category,
            'wear': 'shoes',
            'page': 1,
        }
        setDataShoes(data);
        setShoesArray([]);
        getShoes(data);
    }

    const onClickRegisterWear = () => {
        const obj = {
            "caps": capsArray[activeIndexCaps],
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
            // console.log('useEffectが実行されました')
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
        getCaps(data);
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
                ) : (
                    // capsdataがnullなら代替
                    <>
                        {userWearInfo[0] ? <div style={{ textAlign: "center", margin: "auto", height: "50px" }}>
                            <img style={{ width: "60px" }} src={`/img/rakutenlist/${context.contextName.gender}/${userWearInfo[0].capsData.category}/${userWearInfo[0].capsData.url}`} alt="" />
                        </div> : <div style={{ width: "15%", height: "50px", margin: "auto" }}></div>}
                    </>
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
        getTops(data);
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
        getPants(data);
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
        getShoes(data);
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

    return (
        <>
            <div data-html2canvas-ignore="true" style={{ width: "40px", position: "absolute", left: "50%", transform: "translateX(-50%)", top: "24px" }}><img style={{ width: "100%", borderRadius: "50%" }} src={userCheck.faceImg} alt="" /></div>

            <div style={{ display: "flex", position: "relative" }}>{capsComponent}</div>

            <div style={{ display: "flex", height: "115px", marginTop: "16px" }}>{topsComponent}</div>


            <div style={{ display: "flex", height: "140px" }}>{pantsComponent}</div>

            <div style={{ display: "flex", overflowX: "scroll" }}>{shoesComponent}</div>

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
                />

            </Popper>
        </>
    )
})