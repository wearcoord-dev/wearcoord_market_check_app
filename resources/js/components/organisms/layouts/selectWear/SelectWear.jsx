import { Button, Popover, Popper } from "@material-ui/core";
import { memo, useContext, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useAllCaps } from "../../../../hooks/selectwear/useAllCaps";
import { useAllPants } from "../../../../hooks/selectwear/useAllPants";
import { useAllShoes } from "../../../../hooks/selectwear/useAllShoes";
import { useAllTops } from "../../../../hooks/selectwear/useAllTops";
import { WearSearch } from "../../../molecules/searchbox/WearSearch";
import { UserContext } from "../../../providers/UserProvider";

export const SelectWear = memo(() => {
    const { getCaps, userCaps, loading, error } = useAllCaps();
    const { getTops, userTops, loadingTops, errorTops } = useAllTops();
    const { getPants, userPants, loadingPants, errorPants } = useAllPants();
    const { getShoes, userShoes, loadingShoes, errorShoes } = useAllShoes();

    const context = useContext(UserContext);
    // console.log(context);
    // console.log('表示してるぞ！！');

    const onClickFetchCaps = (props) => {
        getCaps(props);
    }
    const onClickFetchTops = (props) => getTops(props);
    const onClickFetchPants = (props) => getPants(props);
    const onClickFetchShoes = (props) => getShoes(props);


    const [anchorEl, setAnchorEl] = useState(null);

    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
      };

    // console.log(anchorEl);

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

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
                        >
                            {userCaps.map((wear) => (
                                <SwiperSlide className="wearLi" key={wear.id}  >
                                    <img className="wearImg" src={`/img/rakutenlist/${context.contextName.gender}/${wear.category}/${wear.url}`} alt="" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </>
                )) : (
                    <div style={{ textAlign: "center", margin: "auto" }}>
                        <img style={{ width: "15%", height: "50px", objectFit: "cover", objectPosition: "bottom" }} src='/img/rakutenlist/asics/male/506269/red/chitosesports-b_10018514.png' alt="" />
                    </div>
                )}
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
                            >
                                {userTops.map((wear) => (
                                    <SwiperSlide className="wearLi" key={wear.id}  >
                                        <img className="wearImg" src={`/img/rakutenlist/${context.contextName.gender}/${wear.category}/${wear.url}`} alt="" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </>
                    )) : (
                        <div>
                            <img style={{ width: "100%", height: "130px", objectFit: "contain", position: "absolute", top: "110px", objectPosition: "124px", zIndex: "100", left: "0" }} src='/img/rakutenlist/asics/male/508759/blue/sportsman_11351608.png' alt="" />
                        </div>
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
                            >
                                {userPants.map((wear) => (
                                    <SwiperSlide className="wearLi" key={wear.id}  >
                                        <img className="wearImg" src={`/img/rakutenlist/${context.contextName.gender}/${wear.category}/${wear.url}`} alt="" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </>
                    )) : (
                        <div>
                            <img style={{ width: "100%", height: "180px", objectFit: "contain", position: "absolute", top: "190px", objectPosition: "100px", left: "0" }} src='/img/rakutenlist/asics/male/508772/white/sportsman_11351615.png' alt="" />
                        </div>
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
                            >
                                {userShoes.map((wear) => (
                                    <SwiperSlide className="wearLi" key={wear.id}  >
                                        <img className="wearImg" src={`/img/rakutenlist/${context.contextName.gender}/${wear.category}/${wear.url}`} alt="" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </>
                    )) : (
                        <div>
                            <img style={{ width: "100%", height: "100px", objectFit: "contain", position: "absolute", top: "320px", objectPosition: "140px", left: "0" }} src='/img/rakutenlist/adidas/male/208025/yellow/mathy-mathy_10198030.png' alt="" />
                        </div>
                    )}
            </div>

            <br />

            <Button style={{ position: "absolute", bottom: "100px" }} aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
                Open Popover
      </Button>

            <Popper
                id={id}
                open={open}
                anchorEl={anchorEl}
                // onClose={handleClose}
                placement={'top'}
                className="popper"
                // anchorOrigin={{
                //     vertical: 'bottom',
                //     horizontal: 'center',
                // }}
                // transformOrigin={{
                //     vertical: 'bottom',
                //     horizontal: 'center',
                // }}
                style={{ width: "100%" }}
            >
                <WearSearch
                    onClickFetchCaps={onClickFetchCaps}
                    onClickFetchTops={onClickFetchTops}
                    onClickFetchPants={onClickFetchPants}
                    onClickFetchShoes={onClickFetchShoes}
                />

            </Popper>
        </>
    )
})