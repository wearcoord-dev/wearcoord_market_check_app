import { Box, Container, Icon, Paper, Tab, Tabs, Typography } from "@material-ui/core"
import { memo, useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { AirlineSeatLegroomExtra, Face } from "@material-ui/icons";
import { SearchItemCaps } from "./SearchItemCaps";


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
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
});

export const WearSearch = memo((props) => {
    const { onClickFetchCaps } = props;
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
        <Container>
            <Paper className={classes.root}>
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
                    <div>test2</div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                <div>test3</div>
                </TabPanel>
                <TabPanel value={value} index={3}>
                <div>test4</div>
                </TabPanel>
                <TabPanel value={value} index={4}>
                <div>test5</div>
                </TabPanel>
            </Paper>
        </Container>
        </>
    )
})