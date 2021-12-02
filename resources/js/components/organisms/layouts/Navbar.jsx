import { memo, React, useCallback, useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AccessibilityRoundedIcon from '@material-ui/icons/AccessibilityRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import { Link, useHistory } from "react-router-dom";

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
    const [value, setValue] = useState(null);

    const history = useHistory();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <>
            <BottomNavigation
                value={value}
                onChange={handleChange}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction
                    label="ホーム"
                    icon={<HomeRoundedIcon />}
                    // onClick={onClickMain}
                    to="/main"
                    component={Link}
                />
                <BottomNavigationAction
                    label="MYコーデ"
                    icon={<AccessibilityRoundedIcon />}
                    // onClick={onClickMycoord}
                    to="/main/mycoord"
                    component={Link}
                />
                <BottomNavigationAction
                    label="アイテム"
                    icon={<SearchRoundedIcon />}
                // onClick={onClickItem}
                to="/main/item"
                component={Link}
                />
                <BottomNavigationAction
                    label="お気に入り"
                    icon={<FavoriteBorderRoundedIcon />}
                    // onClick={onClickFavorite}
                    to="/main/favorite"
                    component={Link}
                />
                <BottomNavigationAction label="カート" icon={<ShoppingCartRoundedIcon />}
                    to="/main/cart"
                    component={Link}
                />
            </BottomNavigation>
        </>
    )
})