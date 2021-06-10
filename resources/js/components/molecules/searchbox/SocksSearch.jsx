import { Container, Paper } from "@material-ui/core"
import { memo } from "react"
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { SearchItemSocks } from "./SearchItemSocks";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        // position: "absolute",
        // bottom: "200px",
        // width: "90%"
    },
    closeBtn: {
        width: "40px",
        height: "40px",
        backgroundColor: "#216496",
        borderRadius: "50%",
        position: "absolute",
        top: "-30px",
        right: "10px",
        fontSize: "10px",
    }
});

export const SocksSearch = memo((props) => {
    const { onClickFetchSocks, handleClick } = props;
    const classes = useStyles();

    return (
        <>
            <Container>
                <Paper className={classes.root}>
                    <button className={classes.closeBtn} type="button" onClick={handleClick} ><CloseIcon style={{ color: "white"}} /></button>
                   <SearchItemSocks
                   onClickFetchSocks={onClickFetchSocks}
                    />
                </Paper>
            </Container>
        </>
    )
})