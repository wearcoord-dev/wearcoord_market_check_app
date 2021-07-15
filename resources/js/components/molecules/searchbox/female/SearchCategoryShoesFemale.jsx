import { memo, useEffect, useState } from "react";

export const SearchCategoryShoesFemale = memo((props) => {

    const categorylist = {
        none: 0,
        shoes: 0,
    }

    const { setValueCategory, valueCategory } = props;
    const [check, setCheck] = useState(categorylist);

    // radioのonChangeイベント発生時
    const handleInputChange = (props) => {
        const category = props.target.value;

        // 最初のinput以外にチェックが入ったかどうか確認
        if(category == "565819"){
            setCheck( {shoes: true} );
        }else{
            setCheck( {none: true});
        }

        setValueCategory(category);
    }

    // 最初はnoneにセット、以前の条件があればそれを反映
    useEffect(() => {

        if(valueCategory){
            if(valueCategory == "565819"){
                setCheck( {shoes: true} );
                setValueCategory(valueCategory);
            }else{
                setCheck( {none: true});
                setValueCategory(valueCategory);
            }
        }else{
            setCheck( {none: true} );
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

                <input type="radio" id="shoes" className="radioInput" name="category" value="565819" onChange={handleInputChange}
                checked={check.shoes}
                 />
                <label htmlFor="shoes" className="radioInputLabel">シューズ</label>
            </div>
        </>
    )
})