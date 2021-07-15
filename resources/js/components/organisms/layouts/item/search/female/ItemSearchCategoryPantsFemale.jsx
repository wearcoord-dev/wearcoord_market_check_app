import { memo, useEffect, useState } from "react";

export const ItemSearchCategoryPantsFemale = memo((props) => {

    const categorylist = {
        half: 0,
        long: 0,
        skirt: 0,
    }

    const { setValueCategory, valueCategory } = props;
    const [check, setCheck] = useState(categorylist);

    // radioのonChangeイベント発生時
    const handleInputChange = (props) => {
        const category = props.target.value;

        // 最初のinput以外にチェックが入ったかどうか確認
        if(category == "508820"){
            setCheck( {half: true} );
        }else if(category == "565928"){
            setCheck( {long: true});
        }else{
            setCheck( {skirt: true});
        }

        setValueCategory(category);
    }

    // 最初はhalfにセット
    useEffect(() => {
        if(valueCategory){
            if(valueCategory == "508820"){
                setCheck( {half: true} );
                setValueCategory(valueCategory);
            }else if(valueCategory == "565928"){
                setCheck( {long: true});
                setValueCategory(valueCategory);
            }else{
                setCheck( {skirt: true});
                setValueCategory(valueCategory);
            }
        }else{
            setCheck( {half: true} );
            const category = "508820";
            setValueCategory(category);
        }
    }, []);


    return (
        <>
            <div className="slide_x">

                <input type="radio" id="half" className="radioInput" name="category" value="508820" onChange={handleInputChange}
                checked={check.half}
                 />
                <label htmlFor="half" className="radioInputLabel">ハーフ・ショート</label>

                <input type="radio" id="long" className="radioInput" name="category" value="565928" onChange={handleInputChange}
                checked={check.long}
                 />
                <label htmlFor="long" className="radioInputLabel">ロング</label>

                <input type="radio" id="skirt" className="radioInput" name="category" value="565816" onChange={handleInputChange}
                checked={check.skirt}
                 />
                <label htmlFor="skirt" className="radioInputLabel">スカート・スコート</label>
            </div>
        </>
    )
})