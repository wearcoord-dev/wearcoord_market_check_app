import { memo, useContext, useState } from "react";
import { SearchBrandCaps } from "../../../../molecules/searchbox/searchBrand/SearchBrandCaps";
import { SearchColor } from "../../../../molecules/searchbox/SearchColor";
import { UserContext } from "../../../../providers/UserProvider";
import { ItemSearchCategoryCapsFemale } from "./female/ItemSearchCategoryCapsFemale";
import { ItemSearchCategoryCaps } from "./male/ItemSearchCategoryCaps";
import SearchIcon from '@material-ui/icons/Search';
import { Button } from "@material-ui/core";



export const ItemSearchCaps = memo((props) => {
    const { onClickFetchCaps, setCapsSel, capsSel } = props;
    const [value, setValue] = useState(capsSel.brand);
    const [valueColor, setValueColor] = useState(capsSel.color);
    const [valueCategory, setValueCategory] = useState(capsSel.category);

    const context = useContext(UserContext);

    const handleClick = () => {
        const data = {
            wear: "caps",
            brand: value,
            color: valueColor,
            category: valueCategory,
        }

        setCapsSel(data);
        onClickFetchCaps(data);
    }

    return (
        <>
            <div>
                <SearchBrandCaps setValue={setValue}
                value={value}
                />
                <SearchColor
                setValueColor={setValueColor}
                valueColor={valueColor}
                 />

                {context.contextName.gender == 'male' ? <ItemSearchCategoryCaps setValueCategory={setValueCategory} valueCategory={valueCategory} /> : <ItemSearchCategoryCapsFemale setValueCategory={setValueCategory} valueCategory={valueCategory} />}

                <Button style={{ position: "absolute", bottom: "-50px", left: "50%", transform: "translateX(-50%)", width: "250px", height: '40px', backgroundColor: "#0080E4", color: "#fff" }}  variant="contained" onClick={handleClick}>
                    <SearchIcon style={{ paddingRight: "6px" }} />
                    検索する
                </Button>
            </div>
        </>
    )
})