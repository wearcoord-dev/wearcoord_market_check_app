import { memo, useEffect, useState } from "react";

export const SearchCategoryPantsFemale = memo((props) => {
    const { setValueCategory } = props;
    const [check, setCheck] = useState(1);

    // radioのonChangeイベント発生時
    const handleInputChange = (props) => {
        const category = props.target.value;

        // 最初のinput以外にチェックが入ったかどうか確認
        if (props.target.value !== "508820") {
            setCheck(0);
        } else {
            setCheck(1);
        }

        setValueCategory(category);
    }

    // 最初はhalfにセット
    useEffect(() => {
        const category = "508820";
        setValueCategory(category);
    }, []);


    return (
        <>
            {/* <p className="searchTitle">Category : </p> */}
            <div className="slide_x">

                <input type="radio" id="half" className="radioInput" name="category" value="508820" onChange={handleInputChange}
                checked={check}
                 />
                <label htmlFor="half" className="radioInputLabel">ハーフ・ショート</label>

                <input type="radio" id="long" className="radioInput" name="category" value="565928" onChange={handleInputChange} />
                <label htmlFor="long" className="radioInputLabel">ロング</label>

                <input type="radio" id="skirt" className="radioInput" name="category" value="565816" onChange={handleInputChange} />
                <label htmlFor="skirt" className="radioInputLabel">スカート・スコート</label>
            </div>
        </>
    )
})