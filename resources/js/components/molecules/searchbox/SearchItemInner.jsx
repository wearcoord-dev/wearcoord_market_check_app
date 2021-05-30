import { memo, useContext, useState } from "react";
import { useAllCaps } from "../../../hooks/selectwear/useAllCaps";
import { UserContext } from "../../providers/UserProvider";
import { SearchBrand } from "./SearchBrand";
import { SearchColor } from "./SearchColor";
import { SearchInnerItem } from "./SearchInnerItem";

export const SearchItemInner = memo((props) => {
    const { onClickFetchInner } = props;
    const [value, setValue] = useState("");
    const [valueId, setValueId] = useState("");

    const context = useContext(UserContext);
    console.log(context.contextName.id);
    console.log('表示してるぞ！！');
    const userid = context.contextName.id;

    return (
        <>
            <form>
                <input type="hidden" id="type" value="inner" />
                {/* <input type="hidden" wear="caps" /> */}
                <input type="hidden" id="getUrl" value={valueId} />
                <input type="hidden" id="userid" value={userid} />
                {/* {context.contextName.gender == 'male' ? <input type="hidden" id="getCategory" value="506269" /> : <input type="hidden" id="getCategory" value="565818" />} */}
                {/* <SearchBrand setValue={setValue} />
                <SearchColor setValueColor={setValueColor} /> */}
                <SearchInnerItem setValueId={setValueId}/>

                <div className="divBtn">
                    <button  className="submitBtn" type="button" onClick={onClickFetchInner}>送信</button>
                </div>
            </form>
        </>
    )
})