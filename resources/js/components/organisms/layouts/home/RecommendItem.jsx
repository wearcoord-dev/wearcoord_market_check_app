import { memo, useContext, useEffect, useState } from "react";
import { useGetUserCoord } from "../../../../hooks/home/useGetUserCoord";
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from "../../../providers/UserProvider";
import { useHistory } from "react-router-dom";
import wearImg1 from "../../../../../../public/img/rakutenlist/male/506269/black_alpen_10360085.png"
import wearImg2 from "../../../../../../public/img/rakutenlist/male/208025/yellow_jism_12877028.png"
import { useGetRecommendItem } from "../../../../hooks/home/useGetRecommendItem";
import CircularProgress from '@material-ui/core/CircularProgress';
import { Backdrop, Button, Fade, Modal } from "@material-ui/core";
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import { useRegisterWearItem } from "../../../../hooks/item/useRegisterWearItem";
import { useGetItemDetail } from "../../../../hooks/item/useGetItemDetail";


const useStyles = makeStyles({
    h2title: {
        // borderBottom: "1px solid #484848",
        paddingBottom: "2px",
        display: "inline-block",
        fontWeight: "bold",
        fontSize: "16px",
    },
    h2parrent: {
        width: "90%",
        margin: "auto",
        padding: "30px 0",
    },
    li: {
        width: "30%",
        backgroundColor: "#fff",
        padding: "16px",
        boxSizing: "border-box",
        borderRadius: "20px",
        background: "linear-gradient(221.32deg, rgba(229, 234, 238, 0.67) 2.42%, #FFFFFF 53.21%, rgba(238, 238, 238, 0.54) 99.93%)",
        maxWidth: "180px",
        boxShadow: "0px 0px 30px 1px rgba(53, 53, 53, 0.03)",
        margin: "10px 0",
        maxWidth: "150px",
    },
    img: {
        width: "100%",
    },
    ul:{
        width: "90%",
        margin: "auto",
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        maxWidth: "500px",
    },
    text: {
        color: "#AEC0DC",
        fontSize: "12px",
        fontWeight: "bold",
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        padding: "10px",
        boxSizing: "border-box",
    },
    loading: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
    }
});

export const RecommendItem = memo(() => {
    const classes = useStyles();
    const context = useContext(UserContext);
    const userData = context.contextName;
    const history = useHistory();
    const { GetRecommendItem,  recommendItem, loadingRecommendItem, errorRecommendItem } = useGetRecommendItem();
    const [openModal, setOpen] = useState(false);
    const { RegisterWearItem, itemRegisterWear, loadingRegisterWear, errorRegisterWear } = useRegisterWearItem();
    const { GetItemDetail, itemGetDetail, loadingItemDetail, errorItemDetail } = useGetItemDetail();


    useEffect(() => {
        if (userData !== undefined) {
            GetRecommendItem(userData);
        }
    }, [userData]);

    const onClickWearItem = (id) => {
        const data = {
            'id': id,
            'type': 'tops',
            'user': context.contextName.id,
        }
        RegisterWearItem(data);
    }

        // モーダルで展開する情報取得
        const onClickInfo = (id) => {
            const data = {
                'id': id,
                'type': 'tops',
            }
            GetItemDetail(data);
            setOpen(true);
        }

        const handleClose = () => {
            setOpen(false);
        };


    console.log(recommendItem);

    return (
        <>
        <div>
            <div className={classes.h2parrent}>
                <h2 className={classes.h2title}>オススメアイテム</h2>
            </div>
            <div>
                {recommendItem ? (errorRecommendItem ? (<p>データの取得に失敗しました</p>) : loadingRecommendItem ? (<p>Loading...</p>) : (
                    <>
                        <ul className={classes.ul}>
                            {recommendItem.map((item) => (
                                <li className={classes.li} key={item.id}
                                onClick={onClickInfo.bind(this, item.id)}
                                >
                                    <img className={classes.img} src={`/img/rakutenlist/${userData.gender}/${item.category}/${item.url}`} alt="" />
                                </li>
                            ))}
                        </ul>
                    </>
                )) : loadingRecommendItem ? <div className={classes.loading}><CircularProgress /></div> : <p>アイテムがありません</p>}
            </div>
        </div>

        <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openModal}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openModal}>
                    <div className={classes.item}>
                        {recommendItem ? (itemGetDetail ? (
                            <>
                                <div dangerouslySetInnerHTML={{ __html: itemGetDetail.moshimoLink }}></div>
                                <Button style={{ left: "50%", transform: "translateX(-50%)", backgroundColor: "#0080E4", width:
                            "200px", padding: "10px 0", color: "#fff", marginTop: "10px" }}  variant="contained" onClick={onClickWearItem.bind(this, itemGetDetail.id)}>
                                    <AccessibilityNewIcon style={{ paddingRight: "6px" }} />
                                    ウェアを着る
                                </Button>
                            </>) : (<p></p>)
                        ) : <div></div>}
                    </div>
                </Fade>
            </Modal>
        </>
    )
})