import { memo, useContext, useState } from "react";
import { SearchBrandCaps } from "../../../../molecules/searchbox/searchBrand/SearchBrandCaps";
import { SearchColor } from "../../../../molecules/searchbox/SearchColor";
import { UserContext } from "../../../../providers/UserProvider";
import SearchIcon from '@material-ui/icons/Search';
import { Button } from "@material-ui/core";
import { SearchCategoryTops } from "../../../../molecules/searchbox/male/SearchCategoryTops";
import { SearchCategoryTopsFemale } from "../../../../molecules/searchbox/female/SearchCategoryTopsFemale";
import { SearchBrandTops } from "../../../../molecules/searchbox/searchBrand/SearchBrandTops";
import { SearchBrandTopsFemale } from "../../../../molecules/searchbox/female/SearchBrandTopsFemale";



export const ItemSearchTops = memo((props) => {
    const { onClickFetchTops, setTopsSel, topsSel } = props;
    const [value, setValue] = useState(topsSel.brand);
    const [valueColor, setValueColor] = useState(topsSel.color);
    const [valueCategory, setValueCategory] = useState(topsSel.category);

    const context = useContext(UserContext);

    const handleClick = () => {
        const data = {
            wear: "tops",
            brand: value,
            color: valueColor,
            category: valueCategory,
        }

        setTopsSel(data);
        onClickFetchTops(data);
    }

    return (
        <>
            <div>
                {context.contextName.gender == 'male' ? <SearchBrandTops setValue={setValue} value={value} /> : <SearchBrandTopsFemale setValue={setValue} value={value} />}
                <SearchColor setValueColor={setValueColor}
                valueColor={valueColor}
                 />

                {context.contextName.gender == 'male' ? <SearchCategoryTops setValueCategory={setValueCategory} valueCategory={valueCategory} /> : <SearchCategoryTopsFemale setValueCategory={setValueCategory} valueCategory={valueCategory} />}

                <Button style={{ position: "absolute", bottom: "-50px", left: "50%", transform: "translateX(-50%)", width: "250px", height: '40px' }} variant="contained" color="primary" onClick={handleClick}>
                    <SearchIcon style={{ paddingRight: "6px" }} />
                    検索する
                </Button>
            </div>
        </>
    )
})