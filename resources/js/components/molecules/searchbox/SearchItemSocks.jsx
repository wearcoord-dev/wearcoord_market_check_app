import { memo, useContext, useState } from "react";
import { UserContext } from "../../providers/UserProvider";
import { SearchSocksItem } from "./male/SearchSocksItem";
import { SearchSocksItemFemale } from "./female/SearchSocksItemFemale";

export const SearchItemSocks = memo((props) => {
    const { onClickFetchSocks } = props;
    const [valueId, setValueId] = useState("");

    const context = useContext(UserContext);
    const userid = context.contextName.id;
    const gender = context.contextName.gender;

    return (
        <>
            <form>
                <input type="hidden" id="type" value="socks" />
                <input type="hidden" id="getUrl" value={valueId} />
                <input type="hidden" id="userid" value={userid} />

                {gender == 'male' ? <SearchSocksItem setValueId={setValueId}/> : <SearchSocksItemFemale setValueId={setValueId} />}

                <div className="divBtn">
                    <button  className="submitBtn" type="button" onClick={onClickFetchSocks}>送信</button>
                </div>
            </form>
        </>
    )
})