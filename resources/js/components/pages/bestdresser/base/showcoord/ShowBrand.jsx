import { CircularProgress, makeStyles } from "@material-ui/core";
import axios from "axios";
import { memo, useEffect, useState } from "react";

const useStyles = makeStyles({
    text: {
        textTransform: "capitalize"
    },
    root: {
        display: "flex",
        justifyContent: "center"
    }
});

export const ShowBrand = memo((props) => {
    const classes = useStyles();
    const { type, id } = props;
    const [wearInfo, setWearInfo] = useState();

    useEffect(() => {
        getWearInfo();
    }, []);

    const getWearInfo = async () => {
        const response = await axios.get('/api/getitemdetail', {
            params: {
                type: type,
                id: id
            }
        });
        setWearInfo(response.data);
    }

    return (
        <>
            {wearInfo ? (
                <>
                <figcaption className={classes.text}>{type} : {wearInfo.brand}</figcaption>
                </>
            ) : <>
                <div className={classes.root}>
                    <CircularProgress size={20} />
                </div>
            </>}
        </>
    )
})