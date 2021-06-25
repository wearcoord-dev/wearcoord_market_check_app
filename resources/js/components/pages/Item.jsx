import { Backdrop, Button, Fade, Grid, makeStyles, Modal, Popper } from "@material-ui/core";
import { memo, useContext, useEffect, useState } from "react";
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

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingBottom: '150px',
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
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
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

    console.log(dataArray);

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
        dataArray.length ? (
            <>
                {dataArray.map((item) => (
                    <Grid className={classes.paper} key={item.id} container item xs={12} spacing={3}>
                        <button onClick={onClickInfo.bind(this, item.id, dataList.wear)}>
                            <img style={{ width: "100%" }} className="wearImg" src={`/img/rakutenlist/${context.contextName.gender}/${item.category}/${item.url}`} alt="" />
                        </button>
                    </Grid>
                ))}
            </>

        ) : (
            <>
                <p style={{ margin: '10px' }}>検索結果がここに反映されます</p>
            </>
        )
    );


    return (
        <>
            <InfiniteScroll
                dataLength={dataArray.length}
                next={loadMore}
                hasMore={true}
                style={{ overflow: 'visible' }}
            >
                <div className={classes.root}>
                    <Grid style={{ justifyContent: 'center' }} container spacing={1}>
                        {items}
                    </Grid>
                </div>
            </InfiniteScroll>

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
                                <Button style={{ left: "50%", transform: "translateX(-50%)" }} aria-describedby={id} variant="contained" color="primary" onClick={onClickWearItem.bind(this, itemGetDetail.id, dataList.wear)}>
                                    <AccessibilityNewIcon style={{ paddingRight: "6px" }} />
                                    ウェアを着る
                                </Button>
                            </>) : (<p></p>)
                        ) : <div></div>}
                    </div>
                </Fade>
            </Modal>


            <Button style={{ position: "fixed", bottom: "100px", left: "50%", transform: "translateX(-50%)" }} aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
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
                    onClickFetchTops={onClickFetchTops}
                    onClickFetchPants={onClickFetchPants}
                    onClickFetchShoes={onClickFetchShoes}
                    handleClick={handleClick}
                />
            </Popper>
        </>
    )
})