import { memo } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useAllCaps } from "../../../../hooks/selectwear/useAllCaps";
import { useAllPants } from "../../../../hooks/selectwear/useAllPants";
import { useAllShoes } from "../../../../hooks/selectwear/useAllShoes";
import { useAllTops } from "../../../../hooks/selectwear/useAllTops";

export const SelectWear = memo(() => {
    const { getCaps, userCaps, loading, error } = useAllCaps();
    const { getTops, userTops, loadingTops, errorTops } = useAllTops();
    const { getPants, userPants, loadingPants, errorPants } = useAllPants();
    const { getShoes, userShoes, loadingShoes, errorShoes } = useAllShoes();

    const onClickFetchCaps = (props) => {getCaps(props);}
    const onClickFetchTops = () => getTops();
    const onClickFetchPants = () => getPants();
    const onClickFetchShoes = () => getShoes();

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
                                    <img className="wearImg" src={wear.url} alt="" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </>
                )) : (
                    <div style={{ textAlign: "center", margin: "auto" }}>
                        <img style={{ width: "28%", height: "50px", objectFit: "cover", objectPosition: "bottom" }} src='/img/rakutenlist/asics/male/506269/red/chitosesports-b_10018514.png' alt="" />
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
                                        <img className="wearImg" src={wear.url} alt="" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </>
                    )) : (
                        <div>
                            <img style={{ width: "100%", height: "130px", objectFit: "contain", position: "absolute", top: "66px", objectPosition: "124px", zIndex: "100", left: "0" }} src='img/rakutenlist/asics/male/508759/blue/chitosesports_10043147navy.png' alt="" />
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
                                        <img className="wearImg" src={wear.url} alt="" />
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
                                        <img className="wearImg" src={wear.url} alt="" />
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
            <div style={{ position: "absolute",
    bottom: "100px" }}>
                <button onClick={onClickFetchCaps} color="red" brand="nike">
                    <input type="hidden" category="tshirt" />
                    Caps</button>
                <br />
                <button onClick={onClickFetchTops}>Tops</button>
                <br />
                <button onClick={onClickFetchPants}>Pants</button>
                <br />
                <button onClick={onClickFetchShoes}>Shoes</button>
            </div>
        </>
    )
})