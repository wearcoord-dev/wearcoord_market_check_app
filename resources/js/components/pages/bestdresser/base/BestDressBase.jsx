import { makeStyles, useTheme } from "@material-ui/core";
import { memo, useCallback, useEffect, useState } from "react";
import { UserWear } from "../../../providers/UserWear";
import PropTypes from 'prop-types';
import { Box, Paper, Tab, Tabs } from "@material-ui/core";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ImageSearchRoundedIcon from '@material-ui/icons/ImageSearchRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import { TopBase } from "./top/TopBase";
import { ShowBDCoordList } from "./showcoord/ShowBDCoordList";
import { Route, Switch, useHistory, useLocation } from "react-router";
import { Page404 } from "../../Page404";
import { PageRouteBD } from "../../../router/loops/PageRouteBD";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <>{children}</>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles({
    root: {
        backgroundColor: "#216496",
    },
    paper: {
        backgroundColor: 'unset',
        boxShadow: 'unset',
    },
    tab: {
        color: "white",
        minHeight: "auto",
    }
});

export const BestDressBase = memo(() => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(0);
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        if(location.pathname == "/main/bestdresser/main"){
            setValue(0);
        }
        if(location.pathname == "/main/bestdresser/show"){
            setValue(1);
        }
        if(location.pathname == "/main/bestdresser/create"){
            setValue(2);
        }
        if(location.pathname == "/main/bestdresser/create/coord"){
            setValue(2);
        }
    },[location]);


    const onClickTop = useCallback(() => {
        history.push("/main/bestdresser/main")
    }, [history]);

    const onClickShow = useCallback(() => {
        history.push("/main/bestdresser/show")
    }, [history]);

    const onClickCreate = useCallback(() => {
        history.push("/main/bestdresser/create")
    }, [history]);

    return (
        <>
            <UserWear>
                <Paper className={classes.root}>
                    <Tabs
                        value={value}
                        // indicatorColor="primary"
                        TabIndicatorProps={{ style: { background: 'white' } }}
                        // color="white"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                        centered
                    >
                        <Tab icon={<HomeRoundedIcon />} className={classes.tab} label="Top" onClick={onClickTop}  />
                        <Tab icon={<ImageSearchRoundedIcon />} className={classes.tab} label="コーデを見る" onClick={onClickShow}  />
                        <Tab icon={<CreateRoundedIcon />} className={classes.tab} label="コーデを作る" onClick={onClickCreate}  />
                    </Tabs>
                </Paper>
                <Switch>
                    <Route path="/main/bestdresser/" render={({ match: { url } }) => (
                        <Switch>
                            {PageRouteBD.map((route) => (
                                <Route
                                    key={route.path}
                                    exact={route.exact}
                                    path={`${url}${route.path}`}>
                                    {route.children}
                                </Route>
                            ))}
                        </Switch>
                    )} />
                    <Route path="*">
                        <Page404 />
                    </Route>
                </Switch>
            </UserWear>
        </>
    )
})