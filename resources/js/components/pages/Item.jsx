import { Button, Popper } from "@material-ui/core";
import { memo, useState } from "react";
import SearchIcon from '@material-ui/icons/Search';
import { ItemWearSearch } from "../organisms/layouts/item/ItemWearSearch";

export const Item = memo(() => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <p>itemです</p>

            <Button style={{ position: "fixed", bottom: "100px", left: "50%", transform: "translateX(-50%)" }} aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
                <SearchIcon style={{ paddingRight: "6px" }} />
                ウェアを探す
            </Button>

            <Popper
                id={id}
                open={open}
                anchorEl={anchorEl}
                // onClose={handleClose}
                placement={'top'}
                className="popper2"
                style={{ width: "100%" }}
            >
                <ItemWearSearch
                handleClick={handleClick}
                 />
            </Popper>
        </>
    )
})