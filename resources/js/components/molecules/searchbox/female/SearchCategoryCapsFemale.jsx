import { memo, useEffect, useState } from "react";

export const SearchCategoryCapsFemale = memo((props) => {

    const categorylist = {
        none: 0,
        caps: 0,
        remove: 0,
    }

    const { setValueCategory, valueCategory } = props;
    const [check, setCheck] = useState(categorylist);

    // radioのonChangeイベント発生時
    const handleInputChange = (props) => {
        const category = props.target.value;

        // 最初のinput以外にチェックが入ったかどうか確認
        if(category == ""){
            setCheck( {none: true} );
        }else if(category == "remove"){
            setCheck( {remove: true});
        }else{
            setCheck( {caps: true});
        }

        setValueCategory(category);
    }

    // 最初はnoneにセット、以前の条件があればそれを反映
    useEffect(() => {

        if(valueCategory){
            if(valueCategory == ""){
                setCheck( {none: true} );
                setValueCategory(valueCategory);
            }else if(valueCategory == "remove"){
                setCheck( {remove: true});
                setValueCategory(valueCategory);
            }else{
                setCheck( {caps: true});
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

                <input type="radio" id="nocaps" className="radioInput" name="category" value="" onChange={handleInputChange}
                    checked={check}
                    checked={check.none}
                />
                <label htmlFor="nocaps" className="radioInputLabel">今のウェア</label>

                <input type="radio" id="caps" className="radioInput" name="category" value="565818" onChange={handleInputChange}
                checked={check.caps}
                 />
                <label htmlFor="caps" className="radioInputLabel">キャップス</label>


                <input type="radio" id="removeCaps" className="radioInput" name="category" value="remove" onChange={handleInputChange}
                checked={check.remove}
                 />
                <label htmlFor="removeCaps" className="radioInputLabel">キャップスを脱ぐ</label>
            </div>
        </>
    )
})