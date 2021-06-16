import { memo, useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/UserProvider";
import { SearchBrandShoes } from "./searchBrand/SearchBrandShoes";
import { SearchColor } from "./SearchColor";

export const SearchItemShoes = memo((props) => {
    const { onClickFetchShoes } = props;
    const [value, setValue] = useState("");
    const [valueColor, setValueColor] = useState("");

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

        onClickFetchShoes(data);
        // }
    }, [value, valueColor]);

    return (
        <>
            <div>
                <SearchBrandShoes setValue={setValue} />
                <SearchColor setValueColor={setValueColor} />
            </div>
        </>
    )
})