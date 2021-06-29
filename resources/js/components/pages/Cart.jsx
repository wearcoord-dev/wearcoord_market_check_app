import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { CartBox } from '../molecules/cart/CartBox';

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

export const Cart = memo(() => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            // variant="scrollable"
            // scrollButtons="off"
            aria-label="scrollable prevent tabs example"
            centered
            style={{backgroundColor: '#0080E4', position: "fixed", width: "100%", zIndex: "100"}}
          >
            <Tab icon={<span className="material-icons-outlined"
        >face</span>} aria-label="caps" {...a11yProps(0)} />
            <Tab icon={<i className="fas fa-tshirt sideFontAwesome"
        ></i>} aria-label="tops" {...a11yProps(1)} />
            <Tab icon={<span className="material-icons-outlined"
        >airline_seat_legroom_extra</span>} aria-label="pants" {...a11yProps(2)} />
            <Tab icon={<i className="fas fa-shoe-prints sideFontAwesome"></i>} aria-label="shoes" {...a11yProps(3)} />
            {/* <Tab icon={<ShoppingBasket />} aria-label="shopping" {...a11yProps(4)} />
            <Tab icon={<ThumbDown />} aria-label="up" {...a11yProps(5)} />
            <Tab icon={<ThumbUp />} aria-label="down" {...a11yProps(6)} /> */}
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <CartBox
          type={'caps'}
           />
        </TabPanel>
        <TabPanel value={value} index={1}>
        <CartBox
          type={'tops'}
           />
        </TabPanel>
        <TabPanel value={value} index={2}>
        <CartBox
          type={'pants'}
           />
        </TabPanel>
        <TabPanel value={value} index={3}>
        <CartBox
          type={'shoes'}
           />
        </TabPanel>
        {/* <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel> */}
      </div>
    );
})