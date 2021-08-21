import { Backdrop, Button, Fade, Grid, makeStyles, Modal, Popper, Snackbar } from "@material-ui/core";
import { memo, useContext, useEffect, useRef, useState } from "react";
import SearchIcon from '@material-ui/icons/Search';
import { ItemWearSearch } from "../organisms/layouts/item/ItemWearSearch";
import { useAllCaps } from "../../hooks/selectwear/useAllCaps";
import { UserContext } from "../providers/UserProvider";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAllTops } from "../../hooks/selectwear/useAllTops";
import { useAllPants } from "../../hooks/selectwear/useAllPants";
import { useAllShoes } from "../../hooks/selectwear/useAllShoes";
import { useGetItemDetail } from "../../hooks/item/useGetItemDetail";
import { useRegisterWearItem } from "../../hooks/item/useRegisterWearItem";
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import { ItemFirstPage } from "../organisms/layouts/item/firstpage/ItemFirstPage";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingBottom: '150px',
        maxWidth: '700px',
        margin: 'auto',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        maxWidth: '30%',
        margin: '4px !important',
        justifyContent: 'center',
        background: "linear-gradient(221.32deg, rgba(229, 234, 238, 0.67) 2.42%, #FFFFFF 53.21%, rgba(238, 238, 238, 0.54) 99.93%)",
        boxShadow: "0px 0px 30px 1px rgba(53, 53, 53, 0.03)",
        borderRadius: '10px',
        position: 'relative',
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

export const Item = memo(() => {
    const { getCaps, userCaps, loading, error } = useAllCaps();
    const { getTops, userTops, loadingTops, errorTops } = useAllTops();
    const { getPants, userPants, loadingPants, errorPants } = useAllPants();
    const { getShoes, userShoes, loadingShoes, errorShoes } = useAllShoes();
    const context = useContext(UserContext);
    const classes = useStyles();
    const [openModal, setOpen] = useState(false);

    // 検索条件の保存管理

    const [capsSel, setCapsSel] = useState({ brand: "", color: "", category: "", wear: "" });
    const [topsSel, setTopsSel] = useState({ brand: "", color: "", category: "", wear: "" });
    const [pantsSel, setPantsSel] = useState({ brand: "", color: "", category: "", wear: "" });
    const [shoesSel, setShoesSel] = useState({ brand: "", color: "", category: "", wear: "" });

    // スナックバー用検索結果のカウントを保持
    const [count, setCount] = useState();
    const isFirstRenderCaps = useRef(false);
    const isFirstRenderTops = useRef(false);
    const isFirstRenderPants = useRef(false);
    const isFirstRenderShoes = useRef(false);

    // このeffectは初回レンダー時のみ呼ばれるeffect
    useEffect(() => {
        isFirstRenderCaps.current = true;
        isFirstRenderTops.current = true;
        isFirstRenderPants.current = true;
        isFirstRenderShoes.current = true;
    }, [])

    // スナックバー
    const [openSnack, setOpenSnack] = useState(false);

    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnack(false);
    };

    useEffect(() => {
        if (!isFirstRenderCaps.current) {

            // キャップスの数取得
            if (userCaps[0]) {
                setCount(userCaps[0].count);
                // スナックバーを表示
                setOpenSnack(true);
            }
            if (userCaps.length == 0) {
                setCount(0);
                // スナックバーを表示
                setOpenSnack(true);
            }
        } else {
            // 初回の処理が終了
            isFirstRenderCaps.current = false;
        }
    }, [userCaps]);

    useEffect(() => {
        if (!isFirstRenderTops.current) {

            // トップスの数取得
            if (userTops[0]) {
                setCount(userTops[0].count);
                // スナックバーを表示
                setOpenSnack(true);
            }
            if (userTops.length == 0) {
                setCount(0);
                // スナックバーを表示
                setOpenSnack(true);
            }
        } else {
            // 初回の処理が終了
            isFirstRenderTops.current = false;
        }
    }, [userTops]);

    useEffect(() => {
        if (!isFirstRenderPants.current) {

            // パンツの数取得
            if (userPants[0]) {
                setCount(userPants[0].count);
                // スナックバーを表示
                setOpenSnack(true);
            }
            if (userPants.length == 0) {
                setCount(0);
                // スナックバーを表示
                setOpenSnack(true);
            }
        } else {
            // 初回の処理が終了
            isFirstRenderPants.current = false;
        }
    }, [userPants]);

    useEffect(() => {
        if (!isFirstRenderShoes.current) {

            // シューズの数取得
            if (userShoes[0]) {
                setCount(userShoes[0].count);
                // スナックバーを表示
                setOpenSnack(true);
            }
            if (userShoes.length == 0) {
                setCount(0);
                // スナックバーを表示
                setOpenSnack(true);
            }
        } else {
            // 初回の処理が終了
            isFirstRenderShoes.current = false;
        }
    }, [userShoes]);


    const onClickFetchCaps = (props) => {

        const data = {
            'brand': props.brand,
            'color': props.color,
            'category': props.category,
            'wear': 'caps',
            'page': 1,
        }
        setDataList(data);
        setDataArray([]);
        getCaps(data);
    }

    const onClickFetchTops = (props) => {

        const data = {
            'brand': props.brand,
            'color': props.color,
            'category': props.category,
            'wear': 'tops',
            'page': 1,
        }
        setDataList(data);
        setDataArray([]);
        getTops(data);
    }

    const onClickFetchPants = (props) => {

        const data = {
            'brand': props.brand,
            'color': props.color,
            'category': props.category,
            'wear': 'pants',
            'page': 1,
        }
        setDataList(data);
        setDataArray([]);
        getPants(data);
    }
    const onClickFetchShoes = (props) => {

        const data = {
            'brand': props.brand,
            'color': props.color,
            'category': props.category,
            'wear': 'shoes',
            'page': 1,
        }
        setDataList(data);
        setDataArray([]);
        getShoes(data);
    }

    // 無限スクロール用

    // 検索条件保存
    const [dataList, setDataList] = useState({});
    // 追加したアイテムの保存
    const [dataArray, setDataArray] = useState([]);

    useEffect(() => {
        setDataArray([...dataArray, ...userCaps]);
    }, [userCaps]);

    useEffect(() => {
        setDataArray([...dataArray, ...userTops]);
    }, [userTops]);

    useEffect(() => {
        setDataArray([...dataArray, ...userPants]);
    }, [userPants]);

    useEffect(() => {
        setDataArray([...dataArray, ...userShoes]);
    }, [userShoes]);

    const loadMore = () => {

        const newPage = dataList.page + 1;

        const data = {
            'brand': dataList.brand,
            'color': dataList.color,
            'category': dataList.category,
            'wear': dataList.wear,
            'page': newPage,
        }
        setDataList(data);

        if (dataList.wear == 'caps') {
            getCaps(data);
        }

        if (dataList.wear == 'tops') {
            getTops(data);
        }

        if (dataList.wear == 'pants') {
            getPants(data);
        }

        if (dataList.wear == 'shoes') {
            getShoes(data);
        }
    }

    // console.log(dataArray);

    // モーダル表示

    const { GetItemDetail, itemGetDetail, loadingItemDetail, errorItemDetail } = useGetItemDetail();
    const { RegisterWearItem, itemRegisterWear, loadingRegisterWear, errorRegisterWear } = useRegisterWearItem();

    // モーダルで表示したウェアを着せる
    const onClickWearItem = (id, type) => {
        const data = {
            'id': id,
            'type': type,
            'user': context.contextName.id,
        }
        RegisterWearItem(data);
    }


    // 検索フォーム

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    // モーダルで展開する情報取得
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

    //各スクロール要素
    const items = (

        <>
            {dataArray.length ? (
                <>
                    <InfiniteScroll
                        dataLength={dataArray.length}
                        next={loadMore}
                        hasMore={true}
                        style={{ overflow: 'visible' }}
                    >
                        <div className={classes.root}>
                            <Grid style={{ justifyContent: 'center', width: '100%', margin: '0' }} container spacing={1}>

                                {dataArray.map((item) => (
                                    <Grid className={classes.paper} key={item.id} container item xs={12} spacing={3} onClick={onClickInfo.bind(this, item.id, dataList.wear)}>
                                        <button>
                                            <img style={{ width: "100%" }} className="wearImg" src={`/img/rakutenlist/${context.contextName.gender}/${item.category}/${item.url}`} alt="" />
                                        </button>
                                        <div className={classes.brandinfo}>{item.dbbrand}</div>
                                    </Grid>
                                ))}
                            </Grid>
                        </div>
                    </InfiniteScroll>
                </>

            ) : (
                <>
                    {/* <p style={{ margin: '10px' }}>検索結果がここに反映されます</p> */}
                    <ItemFirstPage />
                </>
            )
            }
        </>
    )


    return (
        <>
            {/* <InfiniteScroll
                dataLength={dataArray.length}
                next={loadMore}
                hasMore={true}
                style={{ overflow: 'visible' }}
            >
                <div className={classes.root}>
                    <Grid style={{ justifyContent: 'center', width: '100%', margin: '0' }} container spacing={1}>
                        {items}
                    </Grid>
                </div>
            </InfiniteScroll> */}

            {items}

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
                        {dataArray ? (itemGetDetail ? (
                            <>
                                <div dangerouslySetInnerHTML={{ __html: itemGetDetail.moshimoLink }}></div>
                                <Button style={{
                                    left: "50%", transform: "translateX(-50%)", backgroundColor: "#0080E4", width:
                                        "200px", padding: "10px 0", color: "#fff", marginTop: "10px"
                                }} aria-describedby={id} variant="contained" onClick={onClickWearItem.bind(this, itemGetDetail.id, dataList.wear)}>
                                    <AccessibilityNewIcon style={{ paddingRight: "6px" }} />
                                    ウェアを着る
                                </Button>
                            </>) : (<p></p>)
                        ) : <div></div>}
                    </div>
                </Fade>
            </Modal>


            <Button style={{ position: "fixed", bottom: "100px", left: "50%", transform: "translateX(-50%)", width: "80%", padding: "10px", maxWidth: "250px", backgroundColor: "#0080E4" }} aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
                <SearchIcon style={{ paddingRight: "6px" }} />
                ウェアを探す
            </Button>

            <Popper
                id={id}
                open={open}
                anchorEl={anchorEl}
                // onClose={handleClose}
                placement={'top'}
                className="popper2"
                style={{ width: "100%" }}
            >
                <ItemWearSearch
                    onClickFetchCaps={onClickFetchCaps}
                    setCapsSel={setCapsSel}
                    capsSel={capsSel}

                    onClickFetchTops={onClickFetchTops}
                    setTopsSel={setTopsSel}
                    topsSel={topsSel}

                    onClickFetchPants={onClickFetchPants}
                    setPantsSel={setPantsSel}
                    pantsSel={pantsSel}

                    onClickFetchShoes={onClickFetchShoes}
                    setShoesSel={setShoesSel}
                    shoesSel={shoesSel}

                    handleClick={handleClick}
                />
            </Popper>

            <Snackbar open={openSnack} autoHideDuration={3000} onClose={handleCloseSnack}>
                <Alert onClose={handleCloseSnack} severity="success">
                    {count}件ヒットしました！
                </Alert>
            </Snackbar>
        </>
    )
})