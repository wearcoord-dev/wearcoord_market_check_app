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
    const { RegisterInner } = useRegisterInner();
    const { GetWear, userWearInfo, loadingWear, errorWear } = useGetUserWear();

    const context = useContext(UserContext);


    const onClickFetchInner = (props) => (
        RegisterInner(props)
    );

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
                {userWearInfo ? (errorWear ? (
                    <p style={{ color: "red" }}>???????????????????????????????????????</p>
                ) : loadingWear ? (
                    <p>Loading...</p>
                ) : (

                    // capsdata???null????????????
                    <>
                        {userWearInfo[0] ? <div style={{ textAlign: "center", margin: "auto", height: "50px" }}>
                            <img style={{ width: "60px" }} src={`/img/rakutenlist/${context.contextName.gender}/${userWearInfo[0].capsData.category}/${userWearInfo[0].capsData.url}`} alt="" />
                        </div> : <div style={{ width: "15%", height: "50px", margin: "auto" }}></div>}
                    </>
                )) : <></>}
            </div>

            <div style={{ display: "flex" }}>
                {userWearInfo ? (errorWear ? (
                    <p style={{ color: "red" }}>???????????????????????????????????????</p>
                ) : loadingWear ? (
                    <p>Loading...</p>
                ) : (

                    // topsdata???null????????????
                    <>
                        {userWearInfo[1] ? <div style={{ textAlign: "center", margin: "auto", height: "115px", marginTop: "16px" }}>
                            <img style={{ width: "125px", height: "125px", objectFit: "contain", zIndex: "100", position: "relative" }} src={`/img/rakutenlist/${context.contextName.gender}/${userWearInfo[1].topsData.category}/${userWearInfo[1].topsData.url}`} alt="" />
                        </div> : <div style={{ width: "100%", height: "130px", margin: "auto" }}></div>}
                    </>
                )) : <></>}
            </div>

            <div style={{ display: "flex" }}>
                {userWearInfo ? (errorWear ? (
                    <p style={{ color: "red" }}>???????????????????????????????????????</p>
                ) : loadingWear ? (
                    <p>Loading...</p>
                ) : (

                    // pantsdata???null????????????
                    <>
                        {userWearInfo[2] ? <div style={{ textAlign: "center", margin: "auto", height: "140px" }}>
                            <img style={{ width: "100%", height: "170px", objectFit: "contain", position: "relative" }} src={`/img/rakutenlist/${context.contextName.gender}/${userWearInfo[2].pantsData.category}/${userWearInfo[2].pantsData.url}`} alt="" />
                        </div> : <div style={{ width: "100%", height: "170px", margin: "auto" }}></div>}
                    </>
                )) : <></>}
            </div>

            <div style={{ display: "flex", overflowX: "scroll" }}>
                {userWearInfo ? (errorWear ? (
                    <p style={{ color: "red" }}>???????????????????????????????????????</p>
                ) : loadingWear ? (
                    <p>Loading...</p>
                ) : (

                    // shoesdata???null????????????
                    <>
                        {userWearInfo[3] ? <div style={{ textAlign: "center", margin: "auto" }}>
                            <img style={{ width: "100%", height: "100px", objectFit: "contain" }} src={`/img/rakutenlist/${context.contextName.gender}/${userWearInfo[3].shoesData.category}/${userWearInfo[3].shoesData.url}`} alt="" />
                        </div> : <div style={{ width: "100%", height: "100px", margin: "auto" }}></div>}
                    </>
                )) : <></>}
            </div>

            <Button style={{ position: "fixed", bottom: "100px", left: "0", backgroundColor: "#ddd", width: "130px", borderRadius: "0 10px 10px 0", fontSize: "12px", color: "#484848", boxShadow: "none", height: "60px" }} aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
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
                    onClickFetchInner={onClickFetchInner}

                />

            </Popper>
        </>
    )
})