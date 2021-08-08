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
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';


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
    },
    register: {
        position: "absolute",
        width: "150px",
        backgroundColor: "#216496",
        color: "#fff",
        height: "30px",
        top: "-40px",
        left: "10px",
        borderRadius: "6px",
    }
});

export const WearSearch = memo((props) => {
    const { onClickFetchCaps, onClickFetchTops, onClickFetchPants, onClickFetchShoes, handleClick, setCapsSel, capsSel, setTopsSel, topsSel, setPantsSel, pantsSel, setShoesSel, shoesSel,onClickRegisterWear } = props;
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Container>
                <Paper className={classes.root}>
                    <button className={classes.closeBtn} type="button" onClick={handleClick} ><CloseIcon style={{ color: "white" }} /></button>
                    <button className={classes.register} type="button" onClick={onClickRegisterWear} ><CheckCircleOutlineIcon style={{ paddingRight: "6px", verticalAlign: "text-bottom" }} />ウェアを確定</button>
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
                        {/* <Tab icon={<Icon className="fas fa-socks" />} {...a11yProps(3)} /> */}
                        <Tab icon={<Icon className="fas fa-shoe-prints" />} {...a11yProps(3)} />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <SearchItemCaps onClickFetchCaps={onClickFetchCaps}
                            setCapsSel={setCapsSel}
                            capsSel={capsSel}
                        />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <SearchItemTops onClickFetchTops={onClickFetchTops}
                            setTopsSel={setTopsSel}
                            topsSel={topsSel}
                        />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <SearchItemPants onClickFetchPants={onClickFetchPants}
                            setPantsSel={setPantsSel}
                            pantsSel={pantsSel}
                        />
                    </TabPanel>
                    {/* <TabPanel value={value} index={3}>
                        <div>test4</div>
                    </TabPanel> */}
                    <TabPanel value={value} index={3}>
                        <SearchItemShoes onClickFetchShoes={onClickFetchShoes}
                            setShoesSel={setShoesSel}
                            shoesSel={shoesSel}
                        />
                    </TabPanel>
                </Paper>
            </Container>
        </>
    )
})