import { Button, Popover, Popper } from "@material-ui/core";
import { memo, useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useAllCaps } from "../../../../../hooks/selectwear/useAllCaps";
import { useAllPants } from "../../../../../hooks/selectwear/useAllPants";
import { useAllShoes } from "../../../../../hooks/selectwear/useAllShoes";
import { useAllTops } from "../../../../../hooks/selectwear/useAllTops";
import { useGetUserWear } from "../../../../../hooks/selectwear/useGetUserWear";
import { useRegisterWear } from "../../../../../hooks/selectwear/useRegisterWear";
import { WearSearch } from "../../../../molecules/searchbox/WearSearch";
import { UserContext } from "../../../../providers/UserProvider";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import SearchIcon from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';
import { TenezWearSearch } from "./components/TenezWearSearch";
import { useGetBrandTops } from "../../../../../hooks/home/brand/useGetBrandTops";
import { useGetBrandPants } from "../../../../../hooks/home/brand/useGetBrandPants";


export const TenezSelect = memo(() => {
    const { getCaps, userCaps, loading, error } = useAllCaps();
    const { getBrandTops, userTops, loadingBrandTops, errorBrandTops } = useGetBrandTops();
    const { getBrandPants, userPants, loadingBrandPants, errorBrandPants } = useGetBrandPants();
    const { getShoes, userShoes, loadingShoes, errorShoes } = useAllShoes();
    const { RegisterWear } = useRegisterWear();
    const { GetWear, userWearInfo, loadingWear, errorWear } = useGetUserWear();

    const context = useContext(UserContext);

    // 着ているウェアを取得
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeIndexTops, setActiveIndexTops] = useState(0);
    const [activeIndexPants, setActiveIndexPants] = useState(0);
    const [activeIndexShoes, setActiveIndexShoes] = useState(0);

    const onClickFetchTops = (props) => {
        const data = {
            "type": "tops",
            "gender": props,
            "brand": "tenez",
        }
        getBrandTops(data);
    };

    const onClickFetchPants = (props) => {
        const data = {
            "type": "pants",
            "gender": props,
            "brand": "tenez",
        }
        getBrandPants(data);
    };

    const onClickRegisterWear = () => {
        const obj = {
            "caps": userCaps[activeIndex],
            "tops": userTops[activeIndexTops],
            "pants": userPants[activeIndexPants],
            "shoes": userShoes[activeIndexShoes],
            "userid": context.contextName,
        }
        RegisterWear(obj);
    }
    const userCheck = context.contextName;


    useEffect(() => {
        if (userCheck !== undefined) {
            GetWear(context);
        }
    }, [userCheck]);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const getActiveIndex = (swiper) => {
        setActiveIndex(swiper.activeIndex);
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


    return (
        <>
            <div data-html2canvas-ignore="true" style={{ width: "40px", position: "absolute", left: "50%", transform: "translateX(-50%)", top: "24px" }}><img style={{ width: "100%", borderRadius: "50%" }} src={userCheck.faceImg} alt="" /></div>

            <div style={{ display: "flex", position: "relative" }}>
                {userCaps.length ? (error ? (
                    <p style={{ color: "red" }}>データの取得に失敗しました</p>
                ) : loading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        <Swiper id="controller"
                            slidesPerView={3}
                            centeredSlides={true}
                            onSlideChangeTransitionEnd={getActiveIndex}
                        >
                            {userCaps.map((wear) => (
                                <SwiperSlide className="wearLi" key={wear.id}  >
                                    <img className="wearImg" src={`/img/rakutenlist/${context.contextName.gender}/${wear.category}/${wear.url}`} alt="" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </>
                )) : <>
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
                </>}
            </div>

            <div style={{ display: "flex", height: "115px", marginTop: "16px" }}>
                {userTops.length ?
                    (errorBrandTops ? (
                        <p style={{ color: "red" }}>データの取得に失敗しました</p>
                    ) : loadingBrandTops ? (
                        <CircularProgress />
                    ) : (
                        <>
                            <Swiper id="controller2"
                                slidesPerView={3}
                                centeredSlides={true}
                                onSlideChangeTransitionEnd={getActiveIndexTops}
                            >
                                {userTops.map((wear) => (
                                    <SwiperSlide className="wearLi" key={wear.id}  >
                                        <img className="wearImg" src={`/img/rakutenlist/${context.contextName.gender}/${wear.category}/${wear.url}`} alt="" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </>
                    )) : (
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
                    )}
            </div>

            <div style={{ display: "flex", height: "140px" }}>
                {userPants.length ?
                    (error ? (
                        <p style={{ color: "red" }}>データの取得に失敗しました</p>
                    ) : loadingBrandPants ? (
                        <CircularProgress />
                    ) : (
                        <>
                            <Swiper id="controller3"
                                slidesPerView={3}
                                centeredSlides={true}
                                onSlideChangeTransitionEnd={getActiveIndexPants}
                            >
                                {userPants.map((wear) => (
                                    <SwiperSlide className="wearLi" key={wear.id}  >
                                        <img className="wearImg" src={`/img/rakutenlist/${context.contextName.gender}/${wear.category}/${wear.url}`} alt="" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </>
                    )) : (
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
                    )}
            </div>

            <div style={{ display: "flex", overflowX: "scroll" }}>
                {userShoes.length ?
                    (error ? (
                        <p style={{ color: "red" }}>データの取得に失敗しました</p>
                    ) : loadingShoes ? (
                        <p>Loading...</p>
                    ) : (
                        <>
                            <Swiper id="controller4"
                                slidesPerView={3}
                                centeredSlides={true}
                                onSlideChangeTransitionEnd={getActiveIndexShoes}
                            >
                                {userShoes.map((wear) => (
                                    <SwiperSlide className="wearLi" key={wear.id}  >
                                        <img className="wearImg" src={`/img/rakutenlist/${context.contextName.gender}/${wear.category}/${wear.url}`} alt="" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </>
                    )) : (
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
                    )}
            </div>

            <br />

            {userCheck.gender === 'male' ? (
                <>
                    <Button style={{ position: "fixed", bottom: "100px", left: "0", backgroundColor: "#ddd", width: "130px", borderRadius: "0 10px 10px 0", fontSize: "12px", color: "#484848", boxShadow: "none", height: "60px" }} aria-describedby={id} variant="contained" onClick={handleClick}>
                        <SearchIcon style={{ paddingRight: "6px" }} />
                        着替える
                    </Button>

                    <Button
                        style={{ position: "fixed", bottom: "100px", right: "0", backgroundColor: "#ddd", width: "130px", borderRadius: "10px 0 0 10px", fontSize: "12px", color: "#484848", boxShadow: "none", height: "60px" }}
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
                        <TenezWearSearch
                            // onClickFetchCaps={onClickFetchCaps}
                            onClickFetchTops={onClickFetchTops}
                            onClickFetchPants={onClickFetchPants}
                            // onClickFetchShoes={onClickFetchShoes}
                            handleClick={handleClick}
                        />

                    </Popper>
                </>
            ) : (
                <>
                        <div style={{ textAlign: "center"}}>
                            <p style={{ color: "#216496", fontWeight: "bold", lineHeight: "1.4" }}>女性用10EZウェアはただいま準備中です。</p>
                            <p style={{ color: "#216496", fontWeight: "bold", lineHeight: "1.4" }}>Coming Soon...</p>
                    </div>
                </>
            )}

        </>
    )
})