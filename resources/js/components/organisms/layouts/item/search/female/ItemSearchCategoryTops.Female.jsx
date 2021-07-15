import { memo, useEffect, useState } from "react";

export const ItemSearchCategoryTopsFemale = memo((props) => {

    const categorylist = {
        tshirt: 0,
        outer: 0,
    }

    const { setValueCategory, valueCategory } = props;
    const [check, setCheck] = useState(categorylist);

    // radioのonChangeイベント発生時
    const handleInputChange = (props) => {
        const category = props.target.value;

        // 最初のinput以外にチェックが入ったかどうか確認
        if(category == "508803"){
            setCheck( {tshirt: true} );
        }else{
            setCheck( {outer: true});
        }

        setValueCategory(category);
    }

    // 最初はtshirtにセット
    useEffect(() => {
        if(valueCategory){
            if(valueCategory == "508803"){
                setCheck( {tshirt: true} );
                setValueCategory(valueCategory);
            }else{
                setCheck( {outer: true});
                setValueCategory(valueCategory);
            }
        }else{
            setCheck( {tshirt: true} );
            const category = "508803";
            setValueCategory(category);
        }
    }, []);


    return (
        <>
            <div className="slide_x">

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