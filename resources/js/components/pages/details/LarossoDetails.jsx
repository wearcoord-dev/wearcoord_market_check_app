import { Box, Paper, Tab, Tabs } from "@material-ui/core";
import { memo, useContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useGetUserWear } from "../../../hooks/selectwear/useGetUserWear";
import { Detail } from "../../organisms/layouts/detail/Detail";
import { LarossoSelect } from "../../organisms/layouts/detail/larosso/LarossoSelect";
import { UserContext } from "../../providers/UserProvider";
import { UserWear } from "../../providers/UserWear";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


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

const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: theme.palette.background.paper,
        // width: 500,
    },
    paper: {
        backgroundColor: 'unset',
        boxShadow: 'unset',
    }
}));

// const useStyles = makeStyles({
//     root: {
//         flexGrow: 1,
//     },
// });

export const LarossoDetails = memo(() => {
    const { GetWear, userWearInfo, loadingWear, errorWear } = useGetUserWear();
    const [mannequinUrl, setUrl] = useState(null);


    const context = useContext(UserContext);
    const userCheck = context.contextName;

    useEffect(() => {
        if (userCheck !== undefined) {
            GetWear(context)
        }
    }, [userCheck]);

    useEffect(() => {
        if (userWearInfo) {

            const url = { backgroundImage: 'url( ../../../img/mannequin/' + userWearInfo.mannequin + ')' }
            setUrl(url);
        }
    }, [userWearInfo]);

    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };


    return (
        <>
            <UserWear>
                {/* {userWearInfo ? (errorWear ? (
                    <p>error</p>
                ) : loadingWear ? (
                    <p>loading</p>
                ) : (
                    // <p>{userWearInfo.mannequin}</p>
                    <div>
                        {mannequinUrl ? (<div className="mannequinImg" style={{
                            'backgroundImage': mannequinUrl.backgroundImage
                        }}>
                            <LarossoSelect />
                        </div>) : <p>ng</p>}
                    </div>
                )) : <p></p>} */}
                <Paper className={classes.root}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                        centered
                    >
                        <Tab label="ラロッソ2021モデル" {...a11yProps(0)} />
                        <Tab label="コーデする" {...a11yProps(1)} />
                    </Tabs>
                </Paper>
                <Paper
                    className={classes.paper}
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChange={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        LPページ
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        {userWearInfo ? (errorWear ? (
                            <p>error</p>
                        ) : loadingWear ? (
                            <p>loading</p>
                        ) : (
                            // <p>{userWearInfo.mannequin}</p>
                            <div>
                                {mannequinUrl ? (<div className="mannequinImg" style={{
                                    'backgroundImage': mannequinUrl.backgroundImage
                                }}>
                                    <LarossoSelect />
                                </div>) : <p>ng</p>}
                            </div>
                        )) : <p></p>}
                    </TabPanel>
                </Paper>
            </UserWear>
        </>
    )
})