import { memo } from "react";

export const SearchCategoryTops = memo((props) => {
    const { setValueCategory } = props;

    // radioのonChangeイベント発生時
    const handleInputChange = (props) => {
        const category = props.target.value;

        setValueCategory(category);
    }


    return (
        <>
            {/* <p className="searchTitle">Category : </p> */}
            <div className="slide_x">

                <input type="radio" id="tshirt" className="radioInput" name="category" value="508759" onChange={handleInputChange} />
                <label htmlFor="tshirt" className="radioInputLabel">Tシャツ</label>

                <input type="radio" id="outer" className="radioInput" name="category" value="565925" onChange={handleInputChange} />
                <label htmlFor="outer" className="radioInputLabel">アウター</label>
            </div>
        </>
    )
})