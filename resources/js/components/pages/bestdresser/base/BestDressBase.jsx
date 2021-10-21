import { makeStyles, useTheme } from "@material-ui/core";
import { memo, useState } from "react";
import { UserWear } from "../../../providers/UserWear";
import PropTypes from 'prop-types';
import { Box, Paper, Tab, Tabs } from "@material-ui/core";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ImageSearchRoundedIcon from '@material-ui/icons/ImageSearchRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import { TopBase } from "./top/TopBase";
import { ShowBDCoordList } from "./showcoord/ShowBDCoordList";

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

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };


    return (
        <>
            <UserWear>
                <Paper className={classes.root}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        // indicatorColor="primary"
                        TabIndicatorProps={{style: {background:'white'}}}
                        // color="white"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                        centered
                    >
                        <Tab icon={<HomeRoundedIcon />} className={classes.tab} label="Top" {...a11yProps(0)} />
                        <Tab icon={<ImageSearchRoundedIcon />} className={classes.tab} label="コーデを見る" {...a11yProps(1)} />
                        <Tab icon={<CreateRoundedIcon />} className={classes.tab} label="コーデを作る" {...a11yProps(2)} />
                    </Tabs>
                </Paper>
                <Paper
                    className={classes.paper}
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChange={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <TopBase />
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <ShowBDCoordList />
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        <p>test2</p>
                    </TabPanel>
                </Paper>
            </UserWear>
        </>
    )
})