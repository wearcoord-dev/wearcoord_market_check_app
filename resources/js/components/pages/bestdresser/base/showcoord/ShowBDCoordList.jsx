import { makeStyles } from "@material-ui/core";
import { memo } from "react";
import coordImg from "../../../../../../../public/img/firstcoord/1.png";
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';

const useStyles = makeStyles({
    root: {

    },
    ul: {
        display: "flex",
        flexWrap: "wrap",
        "& li": {
            width: "40%",
            maxWidth: "150px",
            margin: "20px auto",
            background: "linear-gradient(154.8deg, #E5E5E5 2.25%, rgba(255, 255, 255, 0.74) 43.24%, #E5E5E5 99.58%)",
            boxShadow: "0px 0px 30px 1px rgb(53 53 53 / 3%)",
            borderRadius: "20px",
            "& figure": {
                textAlign: "center",
                position: "relative",
                "& i": {
                    position: "absolute",
                    right: "0",
                    padding: "10px",
                },
                "& img": {
                    height: "200px",
                }
            }
        }
    },
    figcap: {
        backgroundColor: "white",
        borderRadius: "0 0 20px 20px",
        "& figcaption": {
            lineHeight: "2",
            fontWeight: "bold",
        }
    },
    title: {
        fontSize: "14px",
        textAlign: "center",
        color: "#216496",
        fontWeight: "bold",
        padding: "20px 0",
    },
    bottom: {
        height: "100px",
    }
});

export const ShowBDCoordList = memo(() => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <p className={classes.title}>今このコーデをいいね！しています</p>
                <ul className={classes.ul}>
                    <li>
                        <figure>
                            <i><FavoriteRoundedIcon style={{ fontSize: "30px", color: "hotpink" }} /></i>
                            <img src={coordImg} alt="" />
                            <div className={classes.figcap}>
                                <figcaption>Tops : FILA</figcaption>
                                <figcaption>Pants : FILA</figcaption>
                            </div>
                        </figure>
                    </li>
                </ul>

                <p className={classes.title}>参加中のすべてのコーデ</p>
                <ul className={classes.ul}>
                    <li>
                        <figure>
                            <i><FavoriteRoundedIcon style={{ fontSize: "30px", color: "silver" }} /></i>
                            <img src={coordImg} alt="" />
                            <div className={classes.figcap}>
                                <figcaption>Tops : FILA</figcaption>
                                <figcaption>Pants : FILA</figcaption>
                            </div>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <i><FavoriteRoundedIcon style={{ fontSize: "30px", color: "silver" }} /></i>
                            <img src={coordImg} alt="" />
                            <div className={classes.figcap}>
                                <figcaption>Tops : FILA</figcaption>
                                <figcaption>Pants : FILA</figcaption>
                            </div>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <i><FavoriteRoundedIcon style={{ fontSize: "30px", color: "silver" }} /></i>
                            <img src={coordImg} alt="" />
                            <div className={classes.figcap}>
                                <figcaption>Tops : FILA</figcaption>
                                <figcaption>Pants : FILA</figcaption>
                            </div>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <i><FavoriteRoundedIcon style={{ fontSize: "30px", color: "silver" }} /></i>
                            <img src={coordImg} alt="" />
                            <div className={classes.figcap}>
                                <figcaption>Tops : FILA</figcaption>
                                <figcaption>Pants : FILA</figcaption>
                            </div>
                        </figure>
                    </li>
                </ul>
                <div className={classes.bottom}></div>
            </div>
        </>
    )
})