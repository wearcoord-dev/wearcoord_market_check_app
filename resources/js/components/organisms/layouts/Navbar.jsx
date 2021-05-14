import { memo, React, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AccessibilityRoundedIcon from '@material-ui/icons/AccessibilityRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: 70,
        position: 'fixed',
        bottom: 0,
    },
});


export const Navbar = memo(() => {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    return (
        <>
            <BottomNavigation
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction
                    // value='main'
                    component={Link}
                    to="/home"
                    label="ホーム"
                    icon={<HomeRoundedIcon />}
                />
                <BottomNavigationAction
                    // value='mycoord'
                    component={Link}
                    to="/mycoord"
                    label="MYコーデ"
                    icon={<AccessibilityRoundedIcon />}
                />
                <BottomNavigationAction
                    // value='item'
                    component={Link}
                    to="/"
                    label="アイテム"
                    icon={<SearchRoundedIcon />}
                />
                <BottomNavigationAction label="お気に入り" icon={<FavoriteBorderRoundedIcon />} />
                <BottomNavigationAction label="カート" icon={<ShoppingCartRoundedIcon />} />
            </BottomNavigation>
        </>
    )
})