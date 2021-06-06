import { memo, React, useCallback, useState } from "react";
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
    const [value, setValue] = useState(0);

    const history = useHistory();

    const onClickMain = useCallback(() => history.push("/main"), [history]);
    const onClickMycoord = useCallback(() => history.push("/main/mycoord"), [history]);
    const onClickItem = useCallback(() => history.push("/main/item"), [history]);
    const onClickFavorite = useCallback(() => history.push("/main/favorite"), [history]);

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
                    label="ホーム"
                    icon={<HomeRoundedIcon />}
                    onClick={onClickMain}
                />
                <BottomNavigationAction
                    // value='mycoord'
                    label="MYコーデ"
                    icon={<AccessibilityRoundedIcon />}
                    onClick={onClickMycoord}
                />
                <BottomNavigationAction
                    // value='item'
                    label="アイテム"
                    icon={<SearchRoundedIcon />}
                    onClick={onClickItem}
                />
                <BottomNavigationAction
                label="お気に入り"
                icon={<FavoriteBorderRoundedIcon/>}
                onClick={onClickFavorite}
                />
                <BottomNavigationAction label="カート" icon={<ShoppingCartRoundedIcon />} />
            </BottomNavigation>
        </>
    )
})