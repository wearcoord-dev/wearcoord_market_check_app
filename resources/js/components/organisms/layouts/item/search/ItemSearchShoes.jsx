import { memo, useContext, useState } from "react";
import { SearchBrandCaps } from "../../../../molecules/searchbox/searchBrand/SearchBrandCaps";
import { SearchColor } from "../../../../molecules/searchbox/SearchColor";
import { UserContext } from "../../../../providers/UserProvider";
import SearchIcon from '@material-ui/icons/Search';
import { Button } from "@material-ui/core";



export const ItemSearchShoes = memo((props) => {
    const { onClickFetchShoes } = props;
    const [value, setValue] = useState("");
    const [valueColor, setValueColor] = useState("");
    const [valueCategory, setValueCategory] = useState("");

    const context = useContext(UserContext);

    const handleClick = () => {
        let category = "";

        if(context.contextName.gender == 'male'){
            category = "208025";
        }else{
            category = "565819";
        }

        const data = {
            wear: "shoes",
            brand: value,
            color: valueColor,
            category: category,
        }

        onClickFetchShoes(data);
    }

    return (
        <>
            <div>
                <SearchBrandCaps setValue={setValue}
                />
                <SearchColor setValueColor={setValueColor} />

                <Button style={{ position: "absolute", bottom: "-50px", left: "50%", transform: "translateX(-50%)", width: "250px", height: '40px' }} variant="contained" color="primary" onClick={handleClick}>
                    <SearchIcon style={{ paddingRight: "6px" }} />
                    検索する
                </Button>
            </div>
        </>
    )
})