import { memo } from "react";
import banner1 from "/img/banner/ralosso2021.jpg";
import banner2 from "/img/banner/bestdresser_top.jpg";
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);


const useStyles = makeStyles({
    root: {
    },
    wrapper: {
        width: "100%",
        margin: "auto",
        padding: "20px 0",
        display: "block",
        maxWidth: "500px",
    },
    img: {
        width: "100%",
        // borderRadius: "20px",
    },
    h2title: {
        // borderBottom: "1px solid #484848",
        paddingBottom: "2px",
        display: "inline-block",
        fontWeight: "bold",
        fontSize: "16px",
    },
    h2parrent: {
        width: "90%",
        margin: "10px auto 0",
    },
    swiperWrap: {
        display: "flex",
        alignItems: "center",
        padding: "0 0 50px 0",
    }
});


export const HomeTopSection = memo(() => {
    const classes = useStyles();
    const history = useHistory();


    const onClickLarossoCoord = () => {
        history.push({
            pathname: '/main/larosso2021',
        });
    }

    return (
        <>
            {/* <div className={classes.h2parrent}>
                <h2 className={classes.h2title}>wearcoord News</h2>
            </div> */}

            <div className={classes.swiperWrap}>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    autoplay={{ delay: '5000' }}
                    loop={true}
                >
                    <SwiperSlide>
                        <a className={classes.wrapper} href="main/bestdresser/login"
                        >
                            <img className={classes.img} src={banner2} alt="" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={classes.wrapper}
                            onClick={onClickLarossoCoord}
                        >
                            <img className={classes.img} src={banner1} alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
})