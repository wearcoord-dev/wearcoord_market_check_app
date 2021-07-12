import { memo, useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/UserProvider";
import { SearchBrandShoes } from "./searchBrand/SearchBrandShoes";
import { SearchColor } from "./SearchColor";

export const SearchItemShoes = memo((props) => {
    const { onClickFetchShoes, setShoesSel, shoesSel } = props;
    const [value, setValue] = useState(shoesSel.brand);
    const [valueColor, setValueColor] = useState(shoesSel.color);

    const context = useContext(UserContext);

    useEffect((props) => {
        console.log(props);
        // if (props !== undefined) {
            let category = "";

        if(context.contextName.gender == 'male'){
            category = "208025";
        }else{
            category = "565819";
        }

        const data = {
            wear : "shoes",
            brand : value,
            color : valueColor,
            category: category,
        }

        // 検索条件を保存
        setShoesSel(data);

        onClickFetchShoes(data);
        // }
    }, [value, valueColor]);

    return (
        <>
            <div>
                <SearchBrandShoes setValue={setValue} value={value} />
                <SearchColor setValueColor={setValueColor} valueColor={valueColor} />
            </div>
        </>
    )
})