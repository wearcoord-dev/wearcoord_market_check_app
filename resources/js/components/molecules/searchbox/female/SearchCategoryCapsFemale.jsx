import { memo, useEffect, useState } from "react";

export const SearchCategoryCapsFemale = memo((props) => {
    const { setValueCategory } = props;
    const [check, setCheck] = useState(1);

    // radioのonChangeイベント発生時
    const handleInputChange = (props) => {
        const category = props.target.value;

        // 最初のinput以外にチェックが入ったかどうか確認
        if (props.target.value !== "") {
            setCheck(0);
        } else {
            setCheck(1);
        }

        setValueCategory(category);
    }

    // 最初はtshirtにセット
    useEffect(() => {
        const category = "";
        setValueCategory(category);
    }, []);


    return (
        <>
            {/* <p className="searchTitle">Category : </p> */}
            <div className="slide_x">

                <input type="radio" id="nocaps" className="radioInput" name="category" value="" onChange={handleInputChange}
                    checked={check}
                />
                <label htmlFor="nocaps" className="radioInputLabel">選ぶ</label>

                <input type="radio" id="caps" className="radioInput" name="category" value="565818" onChange={handleInputChange} />
                <label htmlFor="caps" className="radioInputLabel">キャップス</label>
            </div>
        </>
    )
})