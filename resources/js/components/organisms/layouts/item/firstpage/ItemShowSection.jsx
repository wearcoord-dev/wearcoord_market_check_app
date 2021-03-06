import { Button, CircularProgress, Grid, makeStyles, Modal, Backdrop, Fade } from "@material-ui/core";
import { memo, useEffect, useState } from "react";
import { useAllCaps } from "../../../../../hooks/selectwear/useAllCaps";
import { useAllTops } from "../../../../../hooks/selectwear/useAllTops";
import { useAllPants } from "../../../../../hooks/selectwear/useAllPants";
import { useAllShoes } from "../../../../../hooks/selectwear/useAllShoes";
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import { useGetItemDetail } from "../../../../../hooks/item/useGetItemDetail";
import { useRegisterWearItem } from "../../../../../hooks/item/useRegisterWearItem";


const useStyles = makeStyles((theme) => ({
    h3title: {
        padding: '16px 0',
        textAlign: 'center',
        borderTop: '1px solid #484848',
        borderBottom: '1px solid #484848',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        maxWidth: '30%',
        margin: '4px !important',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, .7)',
        borderRadius: '10px',
        position: 'relative',
        background: "linear-gradient(221.32deg, rgba(229, 234, 238, 0.67) 2.42%, #FFFFFF 53.21%, rgba(238, 238, 238, 0.54) 99.93%)",
        boxShadow: "0px 0px 30px 1px rgba(53, 53, 53, 0.03)",
    },
    wrap: {
        display: 'flex',
        flexWrap: 'wrap',
        boxSizing: 'border-box',
        justifyContent: 'center',
        margin: '20px auto',
        maxWidth: '700px',
    },
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
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
    brandinfo: {
        position: 'absolute',
        bottom: '0',
        width: '100%',
        backgroundColor: 'rgba(128,128,128,0.7)',
        padding: '6px 0',
        borderRadius: '0 0 10px 10px',
        color: 'white',
        textTransform: 'capitalize',
    }
}));

export const ItemShowSection = memo((props) => {
    const { gender, type, userid } = props;
    const classes = useStyles();

    const [openModal, setOpen] = useState(false);
    const { GetItemDetail, itemGetDetail, loadingItemDetail, errorItemDetail } = useGetItemDetail();
    const { RegisterWearItem, itemRegisterWear, loadingRegisterWear, errorRegisterWear } = useRegisterWearItem();


    // ???????????????????????????????????????
    const onClickInfo = (id, type) => {
        const data = {
            'id': id,
            'type': type,
        }
        GetItemDetail(data);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    // ????????????????????????????????????????????????
    const onClickWearItem = (id, type) => {
        const data = {
            'id': id,
            'type': type,
            'user': userid,
        }
        RegisterWearItem(data);
    }

    let category;

    const { getCaps, userCaps, loadingCaps, errorCaps } = useAllCaps();
    const { getTops, userTops, loadingTops, errorTops } = useAllTops();
    const { getPants, userPants, loadingPants, errorPants } = useAllPants();
    const { getShoes, userShoes, loadingShoes, errorShoes } = useAllShoes();

    const [data, setData] = useState([]);
    const [result, setResult] = useState([]);

    // ????????????????????????????????????????????????

    useEffect(() => {
        if (type == 'caps') {
            if (userCaps.length == 0) {
                if (gender == 'male') {
                    category = '506269';
                } else {
                    category = '565818';
                }
                const input = {
                    wear: type,
                    category: category,
                }
                getCaps(input);
                setData(userCaps);

            } else {
                setData(userCaps);
            }
        }

        if (type == 'tops') {
            if (userTops.length == 0) {
                if (gender == 'male') {
                    category = '508759';
                } else {
                    category = '508803';
                }
                const input = {
                    wear: type,
                    category: category,
                }
                getTops(input);
                setData(userTops);

            } else {
                setData(userTops);
            }
        }

        if (type == 'pants') {
            if (userPants.length == 0) {
                if (gender == 'male') {
                    category = '508772';
                } else {
                    category = '508820';
                }
                const input = {
                    wear: type,
                    category: category,
                }
                getPants(input);
                setData(userPants);

            } else {
                setData(userPants);
            }
        }

        if (type == 'shoes') {
            if (userShoes.length == 0) {
                if (gender == 'male') {
                    category = '208025';
                } else {
                    category = '565819';
                }
                const input = {
                    wear: type,
                    category: category,
                }
                getShoes(input);
                setData(userShoes);

            } else {
                setData(userShoes);
            }
        }

    }, [userCaps, userTops, userPants, userShoes])

    // ???????????????????????????????????????

    useEffect(() => {
        const cut = data.slice(0, 6);
        setResult(cut);

    }, [data])


    return (
        <>
            <div>
                <h3 className={classes.h3title}>{type}</h3>
            </div>
            <div className={classes.wrap}>
                {result.length ? (
                    <>
                        {result.map((item) => (
                            <Grid className={classes.paper} key={item.id} container item xs={12} spacing={3} onClick={onClickInfo.bind(this, item.id, type)}>
                                <button>
                                    <img style={{ width: "100%" }} className="wearImg" src={`/img/rakutenlist/${gender}/${item.category}/${item.url}`} alt="" />
                                </button>
                                <div className={classes.brandinfo}>{item.dbbrand}</div>
                            </Grid>
                        ))}

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
                                    {result ? (itemGetDetail ? (
                                        <>
                                            <div dangerouslySetInnerHTML={{ __html: itemGetDetail.moshimoLink }}></div>
                                            <Button style={{
                                                left: "50%", transform: "translateX(-50%)", backgroundColor: "#0080E4", width:
                                                    "200px", padding: "10px 0", color: "#fff", marginTop: "10px"
                                            }} variant="contained" onClick={onClickWearItem.bind(this, itemGetDetail.id, type)}>
                                                <AccessibilityNewIcon style={{ paddingRight: "6px" }} />
                                                ??????????????????
                                            </Button>
                                        </>) : (<p></p>)
                                    ) : <div></div>}
                                </div>
                            </Fade>
                        </Modal>

                    </>
                ) : (
                    <>
                        <div className={classes.root}>
                            <CircularProgress />
                        </div>
                    </>
                )}
            </div>
        </>
    )
})