import { memo, useContext, useState } from "react";
import { useAllCaps } from "../../../hooks/selectwear/useAllCaps";
import { UserContext } from "../../providers/UserProvider";
import { SearchBrand } from "./SearchBrand";
import { SearchColor } from "./SearchColor";

export const SearchItemCaps = memo((props) => {
    const { onClickFetchCaps } = props;
    const [value, setValue] = useState("");
    const [valueColor, setValueColor] = useState("");

    const context = useContext(UserContext);
    // console.log(context.contextName.id);
    // console.log('表示してるぞ！！');

    return (
        <>
            <form>
                <input type="hidden" wear="caps" />
                <input type="hidden" id="getbrand" value={value} />
                <input type="hidden" id="getcolor" value={valueColor} />
                {context.contextName.gender == 'male' ? <input type="hidden" id="getCategory" value="506269" /> : <input type="hidden" id="getCategory" value="565818" />}
                <input type="hidden" id="type" value="caps" />
                <SearchBrand setValue={setValue} />
                <SearchColor setValueColor={setValueColor} />

                <div className="divBtn">
                    <button  className="submitBtn" type="button" onClick={onClickFetchCaps}>送信</button>
                </div>
            </form>
        </>
    )
})