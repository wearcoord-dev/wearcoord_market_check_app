import { memo, useEffect, useState } from "react";

export const SearchCategoryTopsFemale = memo((props) => {

    const categorylist = {
        none: 0,
        tshirt: 0,
        outer: 0,
    }

    const { setValueCategory, valueCategory } = props;
    const [check, setCheck] = useState(categorylist);

    // radioのonChangeイベント発生時
    const handleInputChange = (props) => {
        const category = props.target.value;

        // 最初のinput以外にチェックが入ったかどうか確認
        if (category == "508803") {
            setCheck({ tshirt: true });
        } else if (category == "565927") {
            setCheck({ outer: true });
        } else {
            setCheck({ none: true });
        }

        setValueCategory(category);
    }

    // 最初はnoneにセット
    useEffect(() => {
        if (valueCategory) {
            if (valueCategory == "508803") {
                setCheck({ tshirt: true });
                setValueCategory(valueCategory);
            } else if (valueCategory == "565927") {
                setCheck({ outer: true });
                setValueCategory(valueCategory);
            } else {
                setCheck({ none: true });
                setValueCategory(valueCategory);
            }
        } else {
            setCheck({ none: true });
            const category = "";
            setValueCategory(category);
        }
    }, []);


    return (
        <>
            <div className="slide_x">

                <input type="radio" id="none" className="radioInput" name="category" value="" onChange={handleInputChange}
                    checked={check.none}
                />
                <label htmlFor="none" className="radioInputLabel">今のウェア</label>

                <input type="radio" id="tshirt" className="radioInput" name="category" value="508803" onChange={handleInputChange}
                    checked={check.tshirt}
                />
                <label htmlFor="tshirt" className="radioInputLabel">Tシャツ</label>

                <input type="radio" id="outer" className="radioInput" name="category" value="565927" onChange={handleInputChange}
                    checked={check.outer}
                />
                <label htmlFor="outer" className="radioInputLabel">アウター</label>
            </div>
        </>
    )
})