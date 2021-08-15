import { memo, useContext, useState } from "react";
import { SearchBrandCaps } from "../../../../molecules/searchbox/searchBrand/SearchBrandCaps";
import { SearchColor } from "../../../../molecules/searchbox/SearchColor";
import { UserContext } from "../../../../providers/UserProvider";
import SearchIcon from '@material-ui/icons/Search';
import { Button } from "@material-ui/core";
import { SearchBrandShoes } from "../../../../molecules/searchbox/searchBrand/SearchBrandShoes";



export const ItemSearchShoes = memo((props) => {
    const { onClickFetchShoes, setShoesSel, shoesSel } = props;
    const [value, setValue] = useState(shoesSel.brand);
    const [valueColor, setValueColor] = useState(shoesSel.color);
    // const [valueCategory, setValueCategory] = useState(shoesSel.category);

    const context = useContext(UserContext);

    const handleClick = () => {
        let category = "";

        if (context.contextName.gender == 'male') {
            category = "208025";
        } else {
            category = "565819";
        }

        const data = {
            wear: "shoes",
            brand: value,
            color: valueColor,
            category: category,
        }

        setShoesSel(data);
        onClickFetchShoes(data);
    }

    return (
        <>
            <div>
                <SearchBrandShoes setValue={setValue} value={value} />
                <SearchColor setValueColor={setValueColor} valueColor={valueColor} />
                <div style={{ height: "40px" }}></div>

                <Button style={{ position: "absolute", bottom: "-50px", left: "50%", transform: "translateX(-50%)", width: "250px", height: '40px', backgroundColor: "#0080E4", color: "#fff" }} variant="contained" onClick={handleClick}>
                    <SearchIcon style={{ paddingRight: "6px" }} />
                    検索する
                </Button>
            </div>
        </>
    )
})