import { Button, Grid, makeStyles, Popper } from "@material-ui/core";
import { memo, useContext, useEffect, useState } from "react";
import SearchIcon from '@material-ui/icons/Search';
import { ItemWearSearch } from "../organisms/layouts/item/ItemWearSearch";
import { useAllCaps } from "../../hooks/selectwear/useAllCaps";
import { UserContext } from "../providers/UserProvider";
import InfiniteScroll from 'react-infinite-scroll-component';

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
}));

export const Item = memo(() => {
    const { getCaps, userCaps, loading, error } = useAllCaps();
    const context = useContext(UserContext);
    const classes = useStyles();


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

    // 無限スクロール用

    // 検索条件保存
    const [dataList, setDataList] = useState({});
    // 追加したアイテムの保存
    const [dataArray, setDataArray] = useState([]);

    useEffect(() => {
        setDataArray([...dataArray, ...userCaps]);
    }, [userCaps]);

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
            // setDataArray([...dataArray, ...userCaps]);
        }
    }

    console.log(dataArray);



    // 検索フォーム

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    //各スクロール要素
    const items = (
        dataArray.length ? (
            <>
                {dataArray.map((item) => (
                    <Grid className={classes.paper} key={item.id} container item xs={12} spacing={3}>
                        <img style={{ width: "100%" }} className="wearImg" src={`/img/rakutenlist/${context.contextName.gender}/${item.category}/${item.url}`} alt="" />
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
                    // onClickFetchTops={onClickFetchTops}
                    // onClickFetchPants={onClickFetchPants}
                    // onClickFetchShoes={onClickFetchShoes}
                    handleClick={handleClick}
                />
            </Popper>
        </>
    )
})