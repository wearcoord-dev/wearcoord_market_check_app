import { memo, useEffect, useState } from "react";

export const SearchCategoryTopsFemale = memo((props) => {
    const { setValueCategory } = props;
    const [check, setCheck] = useState(1);

    // radioのonChangeイベント発生時
    const handleInputChange = (props) => {
        const category = props.target.value;

        // 最初のinput以外にチェックが入ったかどうか確認
        if (props.target.value !== "508803") {
            setCheck(0);
        } else {
            setCheck(1);
        }

        setValueCategory(category);
    }

    // 最初はtshirtにセット
    useEffect(() => {
        const category = "508803";
        setValueCategory(category);
    }, []);


    return (
        <>
            {/* <p className="searchTitle">Category : </p> */}
            <div className="slide_x">

                <input type="radio" id="tshirt" className="radioInput" name="category" value="508803" onChange={handleInputChange}
                    checked={check}
                />
                <label htmlFor="tshirt" className="radioInputLabel">Tシャツ</label>

                <input type="radio" id="outer" className="radioInput" name="category" value="565927" onChange={handleInputChange} />
                <label htmlFor="outer" className="radioInputLabel">アウター</label>
            </div>
        </>
    )
})