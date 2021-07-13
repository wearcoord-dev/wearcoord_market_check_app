import { memo, useEffect, useState } from "react";

export const ItemSearchCategoryCaps = memo((props) => {

    const categorylist = {
        caps: 0,
    }

    const { setValueCategory, valueCategory } = props;
    const [check, setCheck] = useState(categorylist);

    // radioのonChangeイベント発生時
    const handleInputChange = (props) => {
        const category = props.target.value;

        // 最初のinput以外にチェックが入ったかどうか確認
        if(category == "506269"){
            setCheck( {caps: true});
        }else{
        }

        setValueCategory(category);
    }

    // 最初はcapsにセット
    useEffect(() => {

        if(valueCategory){
            if(valueCategory == ""){
            }else{
                setCheck( {caps: true});
                setValueCategory(valueCategory);
            }
        }else{
            setCheck( {caps: true} );
            const category = "506269";
            setValueCategory(category);
        }

        const category = "506269";
        setValueCategory(category);
    }, []);

    return (
        <>
            <div className="slide_x">
                <input type="radio" id="caps" className="radioInput" name="category" value="506269" onChange={handleInputChange}
                checked={check.caps}
                 />
                <label htmlFor="caps" className="radioInputLabel">キャップス</label>
            </div>
        </>
    )
})