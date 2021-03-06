import { Button, makeStyles, Popover, Popper, Snackbar } from "@material-ui/core";
import { memo, useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import SearchIcon from '@material-ui/icons/Search';
import { Alert } from "@material-ui/lab";
import { useAllCaps } from "../../../../../hooks/selectwear/useAllCaps";
import { useAllTops } from "../../../../../hooks/selectwear/useAllTops";
import { useAllPants } from "../../../../../hooks/selectwear/useAllPants";
import { useAllShoes } from "../../../../../hooks/selectwear/useAllShoes";
import { UserContext } from "../../../../providers/UserProvider";
import { WearSearch } from "../../../../molecules/searchbox/WearSearch";
import { InnerSearch } from "../../../../molecules/searchbox/InnerSearch";
import { SocksSearch } from "../../../../molecules/searchbox/SocksSearch";
import { useGetBDUserWear } from "../../../../../hooks/bestdresser/useGetBDUserWear";
import { useRegisterBDWear } from "../../../../../hooks/bestdresser/useRegisterBDWear";
import { useRegisterBDInner } from "../../../../../hooks/bestdresser/useRegisterBDInner";

const useStyles = makeStyles(() => ({
    bottomBtnRight: {
        position: "absolute",
        right: "0",
        bottom: "100px",
        display: "flex",
        width: "40%",
        height: "40px",
        minWidth: "150px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#216496",
        color: "#f0f0f0",
        lineHeight: "1.5",
        borderRadius: "10px 0px 0px 10px",
        maxWidth: "250px",
        "& span": {
            fontWeight: "bold",
            paddingLeft: "10px",
            fontSize: "12px"
        }
    },
    bottomBtnLeft: {
        position: "absolute",
        left: "0",
        display: "flex",
        width: "40%",
        height: "40px",
        bottom: "100px",
        minWidth: "150px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#216496",
        color: "#f0f0f0",
        lineHeight: "1.5",
        borderRadius: "0px 10px 10px 0px",
        margin: "16px 0 0 0",
        maxWidth: "250px",
        "& span": {
            fontWeight: "bold",
            paddingLeft: "10px",
            fontSize: "12px"
        }
    },
    btnWrapper: {
        position: "fixed",
        bottom: "0",
        width: "100%",
        left: "0",
    }
}));

export const SelectBDCoord = memo((props) => {
    const { from } = props;
    const classes = useStyles();
    const { getCaps, userCaps, loading, error } = useAllCaps();
    const { getTops, userTops, loadingTops, errorTops } = useAllTops();
    const { getPants, userPants, loadingPants, errorPants } = useAllPants();
    const { getShoes, userShoes, loadingShoes, errorShoes } = useAllShoes();
    const { RegisterWear } = useRegisterBDWear();
    const { GetBDUserWear, userBDWear, loadingBDUserWear, errorBDUserWear } = useGetBDUserWear();
    const context = useContext(UserContext);
    const { RegisterBDInner } = useRegisterBDInner();


    // ??????????????????????????????
    const [activeIndexCaps, setActiveIndexCaps] = useState(0);
    const [activeIndexTops, setActiveIndexTops] = useState(0);
    const [activeIndexPants, setActiveIndexPants] = useState(0);
    const [activeIndexShoes, setActiveIndexShoes] = useState(0);

    // ???????????????????????????
    const [capsSel, setCapsSel] = useState({ brand: "", color: "", category: "", wear: "" });
    const [topsSel, setTopsSel] = useState({ brand: "", color: "", category: "", wear: "" });
    const [pantsSel, setPantsSel] = useState({ brand: "", color: "", category: "", wear: "" });
    const [shoesSel, setShoesSel] = useState({ brand: "", color: "", category: "", wear: "" });

    // ????????????????????????????????????
    const [count, setCount] = useState();

    const isFirstRenderCaps = useRef(false);
    const isFirstRenderTops = useRef(false);
    const isFirstRenderPants = useRef(false);
    const isFirstRenderShoes = useRef(false);

    // ??????effect??????????????????????????????????????????effect
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
                // ???????????????????????????
                setOpenSnack(true);
            }
            if (userCaps.length == 0) {
                setCount(0);
                // ???????????????????????????
                setOpenSnack(true);
            }
        } else {
            // ????????????????????????
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
            // ????????????????????????
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
            // ????????????????????????
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
            // ????????????????????????
            isFirstRenderShoes.current = false;
        }
    }, [userShoes]);

    // caps????????????????????????????????????
    const [showCaps, setShowCaps] = useState(0);

    const onClickFetchCaps = (props) => {

        const data = {
            'brand': props.brand,
            'color': props.color,
            'category': props.category,
            'wear': 'caps',
            'page': 1,
        }

        // ??????????????????null??????????????????????????????????????????
        if (props.category) {

            // ??????????????????remove?????????????????????????????????????????????
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

        // ??????????????????????????????????????????????????????null?????????
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
            "userid": context.contextName.id,
        }

        RegisterWear(obj);
    }
    const userCheck = context.contextName;

    useEffect(() => {
        if (userCheck !== undefined) {
            GetBDUserWear(context)
        }
    }, [userCheck]);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    // ????????????????????????

    const [anchorElSocks, setAnchorElSocks] = useState(null);

    const handleClickSocks = (event) => {
        setAnchorElSocks(anchorElSocks ? null : event.currentTarget);
    };

    const openSocks = Boolean(anchorElSocks);
    const idSocks = openSocks ? 'simple-popover' : undefined;

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

    // ???????????????????????????

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

        // ???????????????3?????????????????????(??????????????????????????????????????????????????????)
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
                {userBDWear ? (errorBDUserWear ? (
                    <p style={{ color: "red" }}>???????????????????????????????????????</p>
                ) : loadingBDUserWear ? (
                    <p>Loading...</p>

                    // ??????????????????????????????????????????
                ) : (showCaps == 0 ? (

                    // caps???null?????????????????????????????????
                    <>
                        {userBDWear[0] ? <div style={{ textAlign: "center", margin: "auto", height: "50px" }}>
                            <img style={{ width: "60px" }} src={`/img/rakutenlist/${context.contextName.gender}/${userBDWear[0].capsData.category}/${userBDWear[0].capsData.url}`} alt="" />
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

        // ???????????????3?????????????????????(??????????????????????????????????????????????????????)
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
                {userBDWear ? (errorBDUserWear ? (
                    <p style={{ color: "red" }}>???????????????????????????????????????</p>
                ) : loadingBDUserWear ? (
                    <p>Loading...</p>
                ) : (

                    // topsdata???null????????????
                    <>
                        {userBDWear[1] ? <div style={{ textAlign: "center", margin: "auto" }}>
                            <img style={{ width: "125px", height: "125px", objectFit: "contain", zIndex: "100", position: "relative" }} src={`/img/rakutenlist/${context.contextName.gender}/${userBDWear[1].topsData.category}/${userBDWear[1].topsData.url}`} alt="" />
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

        // ???????????????3?????????????????????(??????????????????????????????????????????????????????)
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
                {userBDWear ? (errorBDUserWear ? (
                    <p style={{ color: "red" }}>???????????????????????????????????????</p>
                ) : loadingBDUserWear ? (
                    <p>Loading...</p>
                ) : (

                    // pantsdata???null????????????
                    <>
                        {userBDWear[2] ? <div style={{ textAlign: "center", margin: "auto" }}>
                            <img style={{ width: "100%", height: "170px", objectFit: "contain", position: "relative" }} src={`/img/rakutenlist/${context.contextName.gender}/${userBDWear[2].pantsData.category}/${userBDWear[2].pantsData.url}`} alt="" />
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
        // ???????????????3?????????????????????(??????????????????????????????????????????????????????)
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
                {userBDWear ? (errorBDUserWear ? (
                    <p style={{ color: "red" }}>???????????????????????????????????????</p>
                ) : loadingBDUserWear ? (
                    <p>Loading...</p>
                ) : (

                    // shoesdata???null????????????
                    <>
                        {userBDWear[3] ? <div style={{ textAlign: "center", margin: "auto" }}>
                            <img style={{ width: "100%", height: "100px", objectFit: "contain" }} src={`/img/rakutenlist/${context.contextName.gender}/${userBDWear[3].shoesData.category}/${userBDWear[3].shoesData.url}`} alt="" />
                        </div> : <div style={{ width: "100%", height: "100px", margin: "auto" }}></div>}
                    </>
                )) : <></>}
            </>
        )
    )

    // ??????????????????
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

    const onClickBDInner = (props) => (
        RegisterBDInner(props)
    );

    return (
        <>
            <div data-html2canvas-ignore="true" style={{ width: "40px", position: "absolute", left: "50%", transform: "translateX(-50%)", top: "24px" }}><img style={{ width: "100%", borderRadius: "50%" }} src={userCheck.faceImg} alt="" /></div>

            <div style={{ display: "flex", position: "relative" }}>{capsComponent}</div>

            <div style={{ display: "flex", height: "115px", marginTop: "16px" }}>{topsComponent}</div>


            <div style={{ display: "flex", height: "140px" }}>{pantsComponent}</div>

            <div style={{ display: "flex", overflowX: "scroll", marginTop: "-10px" }}>{shoesComponent}</div>

            <div style={{ paddingBottom: "180px" }}></div>

            {from == "wear" && (
                <>
                    <div className={classes.btnWrapper}>
                        <Button className={classes.bottomBtnLeft} aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
                            <SearchIcon style={{ paddingRight: "6px" }} />
                            ????????????
                        </Button>

                        <Button
                            className={classes.bottomBtnRight} color="primary"
                            variant="contained"
                            onClick={onClickRegisterWear}
                        >
                            <CheckCircleOutlineIcon style={{ paddingRight: "6px" }} />
                            ??????????????????
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
                    </div>
                </>
            )}

            {from == "inner" && (
                <>
                    <div className={classes.btnWrapper}>
                        <Button className={classes.bottomBtnLeft} aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
                            ?????????????????????
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

                            <InnerSearch
                                handleClick={handleClick}
                                onClickFetchInner={onClickBDInner}
                            />
                        </Popper>

                        <Button className={classes.bottomBtnRight} aria-describedby={idSocks} variant="contained" color="primary" onClick={handleClickSocks}>
                            ?????????????????????
                        </Button>

                        <Popper
                            id={idSocks}
                            open={openSocks}
                            anchorEl={anchorElSocks}
                            // onClose={handleClose}
                            placement={'top'}
                            className="popperSocks"
                            style={{ width: "100%" }}
                        >

                            <SocksSearch
                                handleClick={handleClickSocks}
                                onClickFetchSocks={onClickBDInner}
                            />
                        </Popper>
                    </div>
                </>
            )}

            <Snackbar open={openSnack} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" style={{ fontSize: "14px" }}>
                    {count}???????????????????????????
                </Alert>
            </Snackbar>

            {/* <Snackbar open={openSnackWarning} autoHideDuration={2000} onClose={handleCloseWarning}>
                <Alert onClose={handleCloseWarning} severity="warning" style={{ fontSize: "14px" }}>
                    ??????????????????????????????????????????
                </Alert>
            </Snackbar> */}
        </>
    )
})