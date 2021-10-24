import { makeStyles } from "@material-ui/core";
import { memo } from "react";
import { SelectWear } from "../../../../organisms/layouts/selectWear/SelectWear";

const useStyles = makeStyles({
    root: {
        margin: "10px 0",
    },
});

export const CreateBDCoord = memo(() => {
    const classes = useStyles();

    return (
        <>
            <SelectWear />
        </>
    )
})