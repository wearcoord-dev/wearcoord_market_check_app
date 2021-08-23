import { makeStyles, Modal } from "@material-ui/core";
import { memo, useContext, useState } from "react";
import { HomeTopSection } from "../organisms/layouts/home/HomeTopSection";
import { UsersCoordList } from "../organisms/layouts/home/UsersCoordList";
import { WcRecommendList } from "../organisms/layouts/home/WcRecommendList";
import { UserContext } from "../providers/UserProvider";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import { useRegisterFirstStep } from "../../hooks/user/useRegisterFirstStep";
import { PageOne } from "../organisms/layouts/introguide/PageOne";
import { PageTwo } from "../organisms/layouts/introguide/PageTwo";
import { PageThree } from "../organisms/layouts/introguide/PageThree";
import { PageFour } from "../organisms/layouts/introguide/Pagefour";
import { PageFive } from "../organisms/layouts/introguide/PageFive";
import { PageSix } from "../organisms/layouts/introguide/PageSix";
import { PageEnd } from "../organisms/layouts/introguide/PageEnd";
import CancelIcon from '@material-ui/icons/Cancel';
import { NewsList } from "../organisms/layouts/home/NewsList";
import { RecommendItem } from "../organisms/layouts/home/RecommendItem";
import { Footer } from "../organisms/layouts/home/Footer";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: '100%',
    },
    swiperbox: {
        width: '100% !important',
        textAlign: 'center',
    },
    img: {
        width: '250px',
    },
    icon: {
        fontSize: '60px',
        position: 'absolute',
        top: '50px',
        fontSize: '60px',
        right: '0',
    }
}));

export const Home = memo(() => {
    const context = useContext(UserContext);
    const userCheck = context.contextName;

    console.log(userCheck);

    // getModalStyle is not a pure function, we roll the style only on the first render
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const { RegisterFirstStep } = useRegisterFirstStep();

    const handleClose = () => {
        setOpen(false);
        console.log('close');
        const id = userCheck.id;
        RegisterFirstStep(id);
    };

    const body = (
        <div className={classes.paper}>
                {/* <CancelIcon color="primary" className={classes.icon} onClick={handleClose} /> */}
            <Swiper
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            >
                <SwiperSlide className={classes.swiperbox}>
                    <PageOne />
                </SwiperSlide>
                <SwiperSlide className={classes.swiperbox}>
                    <PageTwo />
                </SwiperSlide>
                <SwiperSlide className={classes.swiperbox}>
                    <PageThree />
                </SwiperSlide>
                <SwiperSlide className={classes.swiperbox}>
                    <PageFour />
                </SwiperSlide>
                <SwiperSlide className={classes.swiperbox}>
                    <PageFive />
                </SwiperSlide>
                <SwiperSlide className={classes.swiperbox}>
                    <PageSix />
                </SwiperSlide>
                <SwiperSlide className={classes.swiperbox}>
                    <PageEnd
                        handleClose={handleClose}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );

    return (
        <>
            <div style={{ marginBottom: "70px" }}>
                <HomeTopSection />
                <NewsList />
                <RecommendItem />
                <UsersCoordList />
                <WcRecommendList />
                <Footer />
            </div>

            {userCheck ? (userCheck.firstcheck == null ? (
                <>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        className={classes.modal}
                    >
                        {body}
                    </Modal>
                </>
            ) : <></>) : <></>}
        </>
    )
})