import { memo, useContext, useState } from "react";
import { SearchBrandCaps } from "../../../../molecules/searchbox/searchBrand/SearchBrandCaps";
import { SearchColor } from "../../../../molecules/searchbox/SearchColor";
import { UserContext } from "../../../../providers/UserProvider";
import SearchIcon from '@material-ui/icons/Search';
import { Button } from "@material-ui/core";
import { SearchCategoryPants } from "../../../../molecules/searchbox/male/SearchCategoryPants";
import { SearchCategoryPantsFemale } from "../../../../molecules/searchbox/female/SearchCategoryPantsFemale";
import { SearchBrandPants } from "../../../../molecules/searchbox/searchBrand/SearchBrandPants";
import { SearchBrandPantsFemale } from "../../../../molecules/searchbox/female/SearchBrandPantsFemale";
import { ItemSearchCategoryPantsFemale } from "./female/ItemSearchCategoryPantsFemale";
import { ItemSearchCategoryPants } from "./male/ItemSearchCategoryPants";



export const ItemSearchPants = memo((props) => {
    const { onClickFetchPants, setPantsSel, pantsSel } = props;
    const [value, setValue] = useState(pantsSel.brand);
    const [valueColor, setValueColor] = useState(pantsSel.color);
    const [valueCategory, setValueCategory] = useState(pantsSel.category);

    const context = useContext(UserContext);

    const handleClick = () => {
        const data = {
            wear: "pants",
            brand: value,
            color: valueColor,
            category: valueCategory,
        }

        setPantsSel(data);
        onClickFetchPants(data);
    }

    return (
        <>
            <div>
                {context.contextName.gender == 'male' ? <SearchBrandPants setValue={setValue} value={value} /> : <SearchBrandPantsFemale setValue={setValue} value={value} />}
                <SearchColor setValueColor={setValueColor}
                valueColor={valueColor}
                 />

                {context.contextName.gender == 'male' ? <ItemSearchCategoryPants setValueCategory={setValueCategory} valueCategory={valueCategory} /> : <ItemSearchCategoryPantsFemale setValueCategory={setValueCategory} valueCategory={valueCategory} />}

                <Button style={{ position: "absolute", bottom: "-50px", left: "50%", transform: "translateX(-50%)", width: "250px", height: '40px' }} variant="contained" color="primary" onClick={handleClick}>
                    <SearchIcon style={{ paddingRight: "6px" }} />
                    検索する
                </Button>
            </div>
        </>
    )
})