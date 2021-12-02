import React, { memo, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { CartBox } from '../../../molecules/cart/CartBox';
import { ShowTopsSize } from './ShowTopsSize';
import { UserContext } from '../../../providers/UserProvider';
import { ShowPantsSize } from './ShowPantsSize';
import { useGetUserWear } from '../../../../hooks/selectwear/useGetUserWear';
import InfoIcon from '@material-ui/icons/Info';
import { SizeTextPage } from './SizeTextPage';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-prevent-tabpanel-${index}`}
            aria-labelledby={`scrollable-prevent-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
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
        id: `scrollable-prevent-tab-${index}`,
        'aria-controls': `scrollable-prevent-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        //   backgroundColor: theme.palette.background.paper,
    },
}));

export const ShowSizeResult = memo(() => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const context = useContext(UserContext);
    const userCheck = context.contextName;
    const { GetWear, userWearInfo, loadingWear, errorWear } = useGetUserWear();
    const [ isTops, setIsTops ] = useState('none');
    const [ isPants, setIsPants ] = useState('none');

    useEffect(() => {
        if (userCheck !== undefined) {
            GetWear(context)
        }
    }, [userCheck]);

    useEffect(() => {
        // if (userWearInfo !== undefined) {
            if(userWearInfo){
                if(userWearInfo['1'].topsData.isSizeTopsDB === true){
                    setIsTops('block');
                }
                if(userWearInfo['2'].pantsData.isSizePantsDB === true){
                    setIsPants('block');
                }
            }
        // }
    }, [userWearInfo]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="scrollable prevent tabs example"
                    centered
                    style={{ backgroundColor: '#0080E4', position: "fixed", width: "100%", zIndex: "100", top: "50px" }}
                >
                    <Tab icon={<InfoIcon />} aria-label="tops" {...a11yProps(0)} />
                    <Tab style={{ display: isTops }} icon={<i className="fas fa-tshirt sideFontAwesome"
                    ></i>} aria-label="tops" {...a11yProps(1)} />
                    <Tab style={{ display: isPants }} icon={<span className="material-icons-outlined"
                    >airline_seat_legroom_extra</span>} aria-label="pants" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                {/* <div style={{ marginTop: "100px" }}>ここに説明が入ります</div> */}
                <SizeTextPage />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ShowTopsSize style={{ display: isTops }}
                // userid={userCheck.id}
                />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <ShowPantsSize style={{ display: isPants }} />
            </TabPanel>
        </div>
    );
})