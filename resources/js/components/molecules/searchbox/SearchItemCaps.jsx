import { memo, useState } from "react";
import { useAllCaps } from "../../../hooks/selectwear/useAllCaps";
import { SearchBrand } from "./SearchBrand";
import { SearchColor } from "./SearchColor";

export const SearchItemCaps = memo((props) => {
    const { onClickFetchCaps } = props;
    const [value, setValue] = useState("");
    // const { getCaps, userCaps, loading, error } = useAllCaps();
    // const onClickFetchCaps = (props) => { getCaps(props); }
    console.log(value);

    return (
        <>
            <form>
                <input type="hidden" wear="caps" />
                <input type="hidden" id="getbrand" value={value} />
                <SearchBrand setValue={setValue} />
                <SearchColor />
                <button type="button"  onClick={onClickFetchCaps}>送信</button>
            </form>
        </>
    )
})