import { memo, useContext, useState } from "react";
import { SearchBrandCaps } from "../../../../molecules/searchbox/searchBrand/SearchBrandCaps";
import { SearchColor } from "../../../../molecules/searchbox/SearchColor";
import { UserContext } from "../../../../providers/UserProvider";
import { ItemSearchCategoryCapsFemale } from "./female/ItemSearchCategoryCapsFemale";
import { ItemSearchCategoryCaps } from "./male/ItemSearchCategoryCaps";
import SearchIcon from '@material-ui/icons/Search';
import { Button } from "@material-ui/core";



export const ItemSearchCaps = memo((props) => {
    const { onClickFetchCaps } = props;
    const [value, setValue] = useState("");
    const [valueColor, setValueColor] = useState("");
    const [valueCategory, setValueCategory] = useState("");

    const context = useContext(UserContext);

    // useEffect((props) => {
    //     console.log(props);

    //     const data = {
    //         wear: "caps",
    //         brand: value,
    //         color: valueColor,
    //         category: valueCategory,
    //     }

    //     onClickFetchCaps(data);
    // }, [value, valueColor, valueCategory]);

    const handleClick = () => {
        const data = {
            wear: "caps",
            brand: value,
            color: valueColor,
            category: valueCategory,
        }

                console.log(data);

        onClickFetchCaps(data);
    }

    return (
        <>
            <div>
                <SearchBrandCaps setValue={setValue}
                />
                <SearchColor setValueColor={setValueColor} />

                {context.contextName.gender == 'male' ? <ItemSearchCategoryCaps setValueCategory={setValueCategory} /> : <ItemSearchCategoryCapsFemale setValueCategory={setValueCategory} />}

                <Button style={{ position: "fixed", bottom: "-36px", left: "50%", transform: "translateX(-50%)", width: "250px" }}  variant="contained" color="primary" onClick={handleClick}>
                    <SearchIcon style={{ paddingRight: "6px" }} />
                    検索する
                </Button>
            </div>
        </>
    )
})