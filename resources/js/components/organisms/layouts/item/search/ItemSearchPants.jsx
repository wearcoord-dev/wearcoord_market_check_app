import { memo, useContext, useState } from "react";
import { SearchBrandCaps } from "../../../../molecules/searchbox/searchBrand/SearchBrandCaps";
import { SearchColor } from "../../../../molecules/searchbox/SearchColor";
import { UserContext } from "../../../../providers/UserProvider";
import SearchIcon from '@material-ui/icons/Search';
import { Button } from "@material-ui/core";
import { SearchCategoryTops } from "../../../../molecules/searchbox/male/SearchCategoryTops";
import { SearchCategoryTopsFemale } from "../../../../molecules/searchbox/female/SearchCategoryTopsFemale";
import { SearchCategoryPants } from "../../../../molecules/searchbox/male/SearchCategoryPants";
import { SearchCategoryPantsFemale } from "../../../../molecules/searchbox/female/SearchCategoryPantsFemale";



export const ItemSearchPants = memo((props) => {
    const { onClickFetchPants } = props;
    const [value, setValue] = useState("");
    const [valueColor, setValueColor] = useState("");
    const [valueCategory, setValueCategory] = useState("");

    const context = useContext(UserContext);

    const handleClick = () => {
        const data = {
            wear: "pants",
            brand: value,
            color: valueColor,
            category: valueCategory,
        }

        // console.log(data);

        onClickFetchPants(data);
    }

    return (
        <>
            <div>
                <SearchBrandCaps setValue={setValue}
                />
                <SearchColor setValueColor={setValueColor} />

                {context.contextName.gender == 'male' ? <SearchCategoryPants setValueCategory={setValueCategory} /> : <SearchCategoryPantsFemale setValueCategory={setValueCategory} />}

                <Button style={{ position: "fixed", bottom: "-36px", left: "50%", transform: "translateX(-50%)", width: "250px" }} variant="contained" color="primary" onClick={handleClick}>
                    <SearchIcon style={{ paddingRight: "6px" }} />
                    検索する
                </Button>
            </div>
        </>
    )
})