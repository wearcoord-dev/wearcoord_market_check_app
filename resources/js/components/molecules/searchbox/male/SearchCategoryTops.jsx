import { memo, useEffect, useState } from "react";

export const SearchCategoryTops = memo((props) => {
    const { setValueCategory } = props;
    const [check, setCheck] = useState(1);

    // radioのonChangeイベント発生時
    const handleInputChange = (props) => {
        const category = props.target.value;

        // 最初のinput以外にチェックが入ったかどうか確認
        if(props.target.value !== "508759"){
            setCheck(0);
        }else{
            setCheck(1);
        }

        setValueCategory(category);
    }

    // 最初はtshirtにセット
    useEffect(() => {
        const category = "508759";
        setValueCategory(category);
    }, []);

    return (
        <>
            <div className="slide_x">

                <input type="radio" id="tshirt" className="radioInput" name="category" value="508759" onChange={handleInputChange}
                checked={check}
                />
                <label htmlFor="tshirt" className="radioInputLabel">Tシャツ</label>

                <input type="radio" id="outer" className="radioInput" name="category" value="565925" onChange={handleInputChange}
                 />
                <label htmlFor="outer" className="radioInputLabel">アウター</label>
            </div>
        </>
    )
})