import { memo, useEffect, useState } from "react";

export const SearchCategoryPants = memo((props) => {

    const categorylist = {
        none: 0,
        half: 0,
        long: 0,
    }

    const { setValueCategory, valueCategory } = props;
    const [check, setCheck] = useState(categorylist);

    // radioのonChangeイベント発生時
    const handleInputChange = (props) => {
        const category = props.target.value;

        // 最初のinput以外にチェックが入ったかどうか確認
        if (category == "508772") {
            setCheck({ half: true });
        } else if (category == "565926") {
            setCheck({ long: true });
        } else {
            setCheck({ none: true });
        }

        setValueCategory(category);
    }

    // 最初はnoneにセット
    useEffect(() => {
        if (valueCategory) {
            if (valueCategory == "508772") {
                setCheck({ half: true });
                setValueCategory(valueCategory);
            } else if (valueCategory == "565926") {
                setCheck({ long: true });
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

                <input type="radio" id="half" className="radioInput" name="category" value="508772" onChange={handleInputChange}
                    checked={check.half}
                />
                <label htmlFor="half" className="radioInputLabel">ハーフ・ショート</label>

                <input type="radio" id="long" className="radioInput" name="category" value="565926" onChange={handleInputChange}
                    checked={check.long}
                />
                <label htmlFor="long" className="radioInputLabel">ロング</label>
            </div>
        </>
    )
})