import { Button, Popover, Popper } from "@material-ui/core";
import { memo, useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useAllCaps } from "../../../../hooks/selectwear/useAllCaps";
import { useAllPants } from "../../../../hooks/selectwear/useAllPants";
import { useAllShoes } from "../../../../hooks/selectwear/useAllShoes";
import { useAllTops } from "../../../../hooks/selectwear/useAllTops";
import { useGetUserWear } from "../../../../hooks/selectwear/useGetUserWear";
import { useRegisterInner } from "../../../../hooks/selectwear/useRegisterInner";
import { useRegisterWear } from "../../../../hooks/selectwear/useRegisterWear";
import { InnerSearch } from "../../../molecules/searchbox/InnerSearch";
import { WearSearch } from "../../../molecules/searchbox/WearSearch";
import { UserContext } from "../../../providers/UserProvider";

export const SelectInner = memo(() => {
    const { getCaps, userCaps, loading, error } = useAllCaps();
    const { getTops, userTops, loadingTops, errorTops } = useAllTops();
    const { getPants, userPants, loadingPants, errorPants } = useAllPants();
    const { getShoes, userShoes, loadingShoes, errorShoes } = useAllShoes();
    // const { RegisterWear } = useRegisterWear();
    const { RegisterInner } = useRegisterInner();
    const { GetWear, userWearInfo, loadingWear, errorWear } = useGetUserWear();

    const context = useContext(UserContext);

    // 着ているウェアを取得
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeIndexTops, setActiveIndexTops] = useState(0);
    const [activeIndexPants, setActiveIndexPants] = useState(0);
    const [activeIndexShoes, setActiveIndexShoes] = useState(0);

    const onClickFetchCaps = (props) => getCaps(props);
    const onClickFetchTops = (props) => getTops(props);
    const onClickFetchPants = (props) => getPants(props);
    const onClickFetchShoes = (props) => getShoes(props);

    const onClickFetchInner = (props) => (
        RegisterInner(props)
    );


    // const onClickRegisterWear = () => {
    //     const obj = {
    //         "caps": userCaps[activeIndex],
    //         "tops": userTops[activeIndexTops],
    //         "pants": userPants[activeIndexPants],
    //         "shoes": userShoes[activeIndexShoes],
    //         "userid": context.contextName,
    //     }
    //     RegisterWear(obj);
    // }
    const userCheck = context.contextName;
    // console.log(context);


    useEffect(() => {
        if(userCheck !== undefined){
        console.log('useEffectが実行されました')
        GetWear(context)
    }
    }, [userCheck]);

    // if(userWearInfo){
    //     console.log(userWearInfo[1].capsData.url);
    // }

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    // console.log(activeIndex);
    // console.log(activeIndexTops);

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

    // console.log(userCaps[activeIndex]);
    // console.log(userTops[activeIndexTops]);
    // console.log(userPants[activeIndexPants]);
    // console.log(userShoes[activeIndexShoes]);
    // console.log(context.contextName);

    return (
        <>
            <div style={{ display: "flex", overflowX: "scroll" }}>
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
                        <>
                            <div style={{ textAlign: "center", margin: "auto" }}>
                                <img style={{ width: "15%", height: "50px", objectFit: "cover", objectPosition: "bottom" }} src={`/img/rakutenlist/${context.contextName.gender}/${userWearInfo[0].capsData.category}/${userWearInfo[0].capsData.url}`} alt="" />
                            </div>
                        </>
                    )) : <></>}
                </>}

                {/* {userWearInfo ? (errorWear ? (
                    <p style={{ color: "red" }}>データの取得に失敗しました</p>
                ) : loadingWear ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        <div style={{ textAlign: "center", margin: "auto" }}>
                        <img style={{ width: "15%", height: "50px", objectFit: "cover", objectPosition: "bottom" }} src={`/img/rakutenlist/${context.contextName.gender}/${userWearInfo[0].capsData.category}/${userWearInfo[0].capsData.url}`}  alt="" />
                    </div>
                    </>
                )) : <></>} */}
            </div>

            <div style={{ display: "flex", overflowX: "scroll" }}>
                {userTops.length ?
                    (error ? (
                        <p style={{ color: "red" }}>データの取得に失敗しました</p>
                    ) : loadingTops ? (
                        <p>Loading...</p>
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
                                <>
                                    <div style={{ textAlign: "center", margin: "auto" }}>
                                        <img style={{ width: "100%", height: "130px", objectFit: "contain", position: "absolute", top: "120px", objectPosition: "124px", zIndex: "100", left: "0" }} src={`/img/rakutenlist/${context.contextName.gender}/${userWearInfo[1].topsData.category}/${userWearInfo[1].topsData.url}`} alt="" />
                                    </div>
                                    <p></p>
                                </>
                            )) : <></>}
                        </>
                    )}
            </div>

            <div style={{ display: "flex", overflowX: "scroll" }}>
                {userPants.length ?
                    (error ? (
                        <p style={{ color: "red" }}>データの取得に失敗しました</p>
                    ) : loadingPants ? (
                        <p>Loading...</p>
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
                                <>
                                    <div style={{ textAlign: "center", margin: "auto" }}>
                                        <img style={{ width: "100%", height: "180px", objectFit: "contain", position: "absolute", top: "240px", objectPosition: "100px", left: "0" }} src={`/img/rakutenlist/${context.contextName.gender}/${userWearInfo[2].pantsData.category}/${userWearInfo[2].pantsData.url}`} alt="" />
                                    </div>
                                    <p></p>
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
                                <>
                                    <div style={{ textAlign: "center", margin: "auto" }}>
                                        <img style={{ width: "100%", height: "100px", objectFit: "contain", position: "absolute", top: "360px", objectPosition: "140px", left: "0" }} src={`/img/rakutenlist/${context.contextName.gender}/${userWearInfo[3].shoesData.category}/${userWearInfo[3].shoesData.url}`} alt="" />
                                    </div>
                                    <p></p>
                                </>
                            )) : <></>}
                        </>
                    )}
            </div>

            <br />

            {/* <div>{
                loadingWear ? ( <p>loading wear</p>) :  (<>
                    {userWearInfo.map((wear) => (<p>aaa</p>))}</>)
}</div> */}

            <Button style={{ position: "absolute", bottom: "100px" }} aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
                インナーを探す
      </Button>

            {/* <Button
                style={{ position: "absolute", bottom: "100px", right: "0" }} color="primary"
                variant="contained"
                onClick={onClickRegisterWear}
            >
                このインナーを着る
            </Button> */}

            <Popper
                id={id}
                open={open}
                anchorEl={anchorEl}
                // onClose={handleClose}
                placement={'top'}
                className="popper"
                style={{ width: "100%" }}
            >
                {/* <WearSearch
                    onClickFetchCaps={onClickFetchCaps}
                    onClickFetchTops={onClickFetchTops}
                    onClickFetchPants={onClickFetchPants}
                    onClickFetchShoes={onClickFetchShoes}
                    handleClick={handleClick}
                /> */}

                <InnerSearch
                handleClick={handleClick}
                onClickFetchInner={onClickFetchInner}

                />

            </Popper>
        </>
    )
})