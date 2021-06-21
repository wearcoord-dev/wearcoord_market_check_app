import { memo, useEffect, useState } from "react";

export const SearchCategoryPants = memo((props) => {
    const { setValueCategory } = props;
    const [check, setCheck] = useState(1);

    // radioのonChangeイベント発生時
    const handleInputChange = (props) => {
        const category = props.target.value;

        // 最初のinput以外にチェックが入ったかどうか確認
        if (props.target.value !== "508772") {
            setCheck(0);
        } else {
            setCheck(1);
        }

        setValueCategory(category);
    }

    // 最初はhalfにセット
    useEffect(() => {
        const category = "508772";
        setValueCategory(category);
    }, []);


    return (
        <>
            <div className="slide_x">

                <input type="radio" id="half" className="radioInput" name="category" value="508772" onChange={handleInputChange}
                checked={check}
                 />
                <label htmlFor="half" className="radioInputLabel">ハーフ・ショート</label>

                <input type="radio" id="long" className="radioInput" name="category" value="565926" onChange={handleInputChange} />
                <label htmlFor="long" className="radioInputLabel">ロング</label>
            </div>
        </>
    )
})