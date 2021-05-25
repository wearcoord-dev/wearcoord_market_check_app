import { Box, Container, Icon, Paper, Tab, Tabs, Typography } from "@material-ui/core"
import { memo, useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { AirlineSeatLegroomExtra, Face } from "@material-ui/icons";
import { SearchItemCaps } from "./SearchItemCaps";
import { SearchItemTops } from "./SearchItemTops";
import { SearchItemPants } from "./SearchItemPants";
import { SearchItemShoes } from "./SearchItemShoes";
import CloseIcon from '@material-ui/icons/Close';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            className="tabpanel"
        >
            {value === index && (
                <Box p={2}>
                    <>{children}</>
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
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

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

export const WearSearch = memo((props) => {
    const { onClickFetchCaps, onClickFetchTops, onClickFetchPants, onClickFetchShoes, handleClick } = props;
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Container>
                <Paper className={classes.root}>
                    <button className={classes.closeBtn} type="button" onClick={handleClick} ><CloseIcon style={{ color: "white"}} /></button>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                        aria-label="simple tabs example"
                    >
                        <Tab icon={<Face />} {...a11yProps(0)} />
                        <Tab icon={<Icon className="fas fa-tshirt" />} {...a11yProps(1)} />
                        <Tab icon={<AirlineSeatLegroomExtra />} {...a11yProps(2)} />
                        <Tab icon={<Icon className="fas fa-socks" />} {...a11yProps(3)} />
                        <Tab icon={<Icon className="fas fa-shoe-prints" />} {...a11yProps(4)} />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <SearchItemCaps onClickFetchCaps={onClickFetchCaps} />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <SearchItemTops onClickFetchTops={onClickFetchTops} />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <SearchItemPants onClickFetchPants={onClickFetchPants} />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <div>test4</div>
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <SearchItemShoes onClickFetchShoes={onClickFetchShoes} />
                    </TabPanel>
                </Paper>
            </Container>
        </>
    )
})