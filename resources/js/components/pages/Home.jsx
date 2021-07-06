import { makeStyles, Modal } from "@material-ui/core";
import { memo, useContext, useState } from "react";
import { HomeTopSection } from "../organisms/layouts/home/HomeTopSection";
import { UsersCoordList } from "../organisms/layouts/home/UsersCoordList";
import { WcRecommendList } from "../organisms/layouts/home/WcRecommendList";
import { UserContext } from "../providers/UserProvider";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import img1 from '../../../../public/img/others/intro/one.jpg'
import img2 from '../../../../public/img/others/intro/two.jpg'
import img3 from '../../../../public/img/others/intro/three.jpg'
import img4 from '../../../../public/img/others/intro/four.jpg'
import img5 from '../../../../public/img/others/intro/five.jpg'
import { useRegisterFirstStep } from "../../hooks/user/useRegisterFirstStep";

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
            <Swiper
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            >
                <SwiperSlide className={classes.swiperbox}><img className={classes.img} src={img1} alt="" /></SwiperSlide>
                <SwiperSlide className={classes.swiperbox}><img className={classes.img} src={img2} alt="" /></SwiperSlide>
                <SwiperSlide className={classes.swiperbox}><img className={classes.img} src={img3} alt="" /></SwiperSlide>
                <SwiperSlide className={classes.swiperbox}><img className={classes.img} src={img4} alt="" /></SwiperSlide>
                <SwiperSlide className={classes.swiperbox}><img className={classes.img} src={img5} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );

    return (
        <>
            <div style={{ marginBottom: "70px" }}>
                <HomeTopSection />
                <UsersCoordList />
                <WcRecommendList />
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