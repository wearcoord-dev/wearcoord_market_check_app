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
import { Waypoint } from 'react-waypoint';

const COLORS = ["red", "blue", "green", "yellow", "pink"];


export const SelectWear = memo(() => {
    const { getCaps, userCaps, loading, error } = useAllCaps();
    const { getTops, userTops, loadingTops, errorTops } = useAllTops();
    const { getPants, userPants, loadingPants, errorPants } = useAllPants();
    const { getShoes, userShoes, loadingShoes, errorShoes } = useAllShoes();
    const { RegisterWear } = useRegisterWear();
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
    // console.log(context);


    useEffect(() => {
        if (userCheck !== undefined) {
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

    const [colorArray, setColorArray] = useState();

    const onClickColor = () => {
        setColorArray(COLORS);
    }

    const handleWaypointEnter = () => {
        // getTops()
        // setColorArray(colorArray.concat(userTops));
        setColorArray(colorArray.concat(COLORS));
    }

    const colorComponent = (
        // colorArray ?
        //     (error ? (
        //         <p style={{ color: "red" }}>データの取得に失敗しました</p>
        //     ) : loadingTops ? (
        //         <p>Loading...</p>
        //     ) : (
        //         <>
        //             <Swiper id="controller2"
        //                 slidesPerView={3}
        //                 centeredSlides={true}
        //                 onSlideChangeTransitionEnd={getActiveIndexTops}
        //             >
        //                 {colorArray.map((wear, key) => (
        //                     <SwiperSlide className="wearLi" key={wear.id}  >
        //                         <img className="wearImg" src={`/img/rakutenlist/${context.contextName.gender}/${wear.category}/${wear.url}`} alt="" />
        //                     </SwiperSlide>
        //                 )).concat(<Waypoint key={-1} horizontal onEnter={handleWaypointEnter} />)}
        //             </Swiper>
        //         </>
        //     )) : (
        //         <>
        //             {userWearInfo ? (errorWear ? (
        //                 <p style={{ color: "red" }}>データの取得に失敗しました</p>
        //             ) : loadingWear ? (
        //                 <p>Loading...</p>
        //             ) : (

        //                 // topsdataがnullなら代替
        //                 <>
        //                     {userWearInfo[1] ? <div style={{ textAlign: "center", margin: "auto" }}>
        //                         <img style={{ width: "125px", height: "125px", objectFit: "contain", zIndex: "100", position: "relative" }} src={`/img/rakutenlist/${context.contextName.gender}/${userWearInfo[1].topsData.category}/${userWearInfo[1].topsData.url}`} alt="" />
        //                     </div> : <div style={{ width: "100%", height: "130px", margin: "auto" }}></div>}
        //                 </>
        //             )) : <></>}
        //         </>
        //     )
        
colorArray ? (
    colorArray
        .map((item, key) => (
            <div key={key}>
                <div className={item} style={{ width: "200px", height: "200px" }} />
            </div>
        ))
        .concat(<Waypoint key={-1} horizontal onEnter={handleWaypointEnter} />)
) : (
    <>
    <div onClick={onClickColor} >ボタン</div>
    </>
)

    )

console.log(colorArray);

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

        <div style={{ display: "flex", overflowX: "auto" }}>{colorComponent}</div>


        {/* <div style={{ display: "flex", height: "115px", marginTop: "16px", overflowX: "auto" }}>
        {colorComponent}
        </div> */}

        <div style={{ display: "flex", height: "140px" }}>
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

        <Button style={{ position: "fixed", bottom: "100px", left: "0" }} aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
            <SearchIcon style={{ paddingRight: "6px" }} />
            着替える
        </Button>

        <Button
            style={{ position: "fixed", bottom: "100px", right: "0" }} color="primary"
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
                onClickFetchTops={onClickFetchTops}
                onClickFetchPants={onClickFetchPants}
                onClickFetchShoes={onClickFetchShoes}
                handleClick={handleClick}
            />

        </Popper>
    </>
)
})