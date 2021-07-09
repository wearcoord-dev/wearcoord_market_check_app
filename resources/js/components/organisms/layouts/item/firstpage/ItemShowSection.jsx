import { CircularProgress, Grid, makeStyles } from "@material-ui/core";
import { memo, useEffect, useState } from "react";
import { useAllCaps } from "../../../../../hooks/selectwear/useAllCaps";
import { useAllTops } from "../../../../../hooks/selectwear/useAllTops";
import { useAllPants } from "../../../../../hooks/selectwear/useAllPants";
import { useAllShoes } from "../../../../../hooks/selectwear/useAllShoes";

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
    },
    wrap: {
        display: 'flex',
        flexWrap: 'wrap',
        boxSizing: 'border-box',
        justifyContent: 'center',
        margin: '20px 0',
    },
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    }
}));

export const ItemShowSection = memo((props) => {
    const { gender, type } = props;
    const classes = useStyles();
    let category;

    const { getCaps, userCaps, loadingCaps, errorCaps } = useAllCaps();
    const { getTops, userTops, loadingTops, errorTops } = useAllTops();
    const { getPants, userPants, loadingPants, errorPants } = useAllPants();
    const { getShoes, userShoes, loadingShoes, errorShoes } = useAllShoes();

    const [data, setData] = useState([]);
    const [result, setResult] = useState([]);

    // 各ウェアごとの表示条件を設定する

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

    // 表示するアイテムの数を絞る

    useEffect(() => {
        const cut = data.slice(0, 6);
        setResult(cut);

    }, [data])



    console.log(`最後の${result.length}`);

    return (
        <>
            <div>
                <h3 className={classes.h3title}>{type}</h3>
            </div>
            <div className={classes.wrap}>
                {result.length ? (
                    <>
                        {result.map((item) => (
                            <Grid className={classes.paper} key={item.id} container item xs={12} spacing={3}>
                                <button>
                                    <img style={{ width: "100%" }} className="wearImg" src={`/img/rakutenlist/${gender}/${item.category}/${item.url}`} alt="" />
                                </button>
                            </Grid>
                        ))}
                    </>
                ) : (
                    <>
                        <div className={classes.root}>
                            <CircularProgress />
                        </div>Ï
                    </>
                )}
            </div>
        </>
    )
})