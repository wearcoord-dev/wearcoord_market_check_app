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

    return (
        <>
            <div data-html2canvas-ignore="true" style={{ width: "40px", position: "absolute", left: "50%", transform: "translateX(-50%)", top: "24px" }}><img style={{ width: "100%", borderRadius: "50%" }} src={userCheck.faceImg} alt="" /></div>

            <div style={{ display: "flex", position: "relative" }}>
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
            </div>

            <div style={{ display: "flex" }}>
                {userWearInfo ? (errorWear ? (
                    <p style={{ color: "red" }}>データの取得に失敗しました</p>
                ) : loadingWear ? (
                    <p>Loading...</p>
                ) : (

                    // topsdataがnullなら代替
                    <>
                        {userWearInfo[1] ? <div style={{ textAlign: "center", margin: "auto", height: "115px", marginTop: "16px" }}>
                            <img style={{ width: "125px", height: "125px", objectFit: "contain", zIndex: "100", position: "relative" }} src={`/img/rakutenlist/${context.contextName.gender}/${userWearInfo[1].topsData.category}/${userWearInfo[1].topsData.url}`} alt="" />
                        </div> : <div style={{ width: "100%", height: "130px", margin: "auto" }}></div>}
                    </>
                )) : <></>}
            </div>

            <div style={{ display: "flex" }}>
                {userWearInfo ? (errorWear ? (
                    <p style={{ color: "red" }}>データの取得に失敗しました</p>
                ) : loadingWear ? (
                    <p>Loading...</p>
                ) : (

                    // pantsdataがnullなら代替
                    <>
                        {userWearInfo[2] ? <div style={{ textAlign: "center", margin: "auto", height: "140px" }}>
                            <img style={{ width: "100%", height: "170px", objectFit: "contain", position: "relative" }} src={`/img/rakutenlist/${context.contextName.gender}/${userWearInfo[2].pantsData.category}/${userWearInfo[2].pantsData.url}`} alt="" />
                        </div> : <div style={{ width: "100%", height: "170px", margin: "auto" }}></div>}
                    </>
                )) : <></>}
            </div>

            <div style={{ display: "flex", overflowX: "scroll" }}>
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
            </div>

            <Button style={{ position: "fixed", bottom: "100px" }} aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
                インナーを探す
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
                    onClickFetchInner={onClickFetchInner}

                />

            </Popper>
        </>
    )
})