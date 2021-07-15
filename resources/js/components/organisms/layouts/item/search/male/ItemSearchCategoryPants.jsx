import { memo, useEffect, useState } from "react";

export const ItemSearchCategoryPants = memo((props) => {

    const categorylist = {
        half: 0,
        long: 0,
    }

    const { setValueCategory, valueCategory } = props;
    const [check, setCheck] = useState(categorylist);

    // radioのonChangeイベント発生時
    const handleInputChange = (props) => {
        const category = props.target.value;

        // 最初のinput以外にチェックが入ったかどうか確認
        if(category == "508772"){
            setCheck( {half: true} );
        }else{
            setCheck( {long: true});
        }

        setValueCategory(category);
    }

    // 最初はhalfにセット
    useEffect(() => {
        if(valueCategory){
            if(valueCategory == "508772"){
                setCheck( {half: true} );
                setValueCategory(valueCategory);
            }else{
                setCheck( {long: true});
                setValueCategory(valueCategory);
            }
        }else{
            setCheck( {half: true} );
            const category = "508772";
            setValueCategory(category);
        }
    }, []);


    return (
        <>
            <div className="slide_x">

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