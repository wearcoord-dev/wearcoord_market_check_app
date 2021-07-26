import React, { memo, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { CartBox } from '../../../molecules/cart/CartBox';
import { ShowTopsSize } from './ShowTopsSize';
import { UserContext } from '../../../providers/UserProvider';

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
            style={{backgroundColor: '#216496', position: "fixed", width: "100%", zIndex: "100", top: "50px"}}
          >
            <Tab icon={<i className="fas fa-tshirt sideFontAwesome"
        ></i>} aria-label="tops" {...a11yProps(0)} />
            <Tab icon={<span className="material-icons-outlined"
        >airline_seat_legroom_extra</span>} aria-label="pants" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
            <ShowTopsSize
            // userid={userCheck.id}
             />
        </TabPanel>
        <TabPanel value={value} index={1}>
        {/* <CartBox
          type={'pants'}
           /> */}
        </TabPanel>
      </div>
    );
})