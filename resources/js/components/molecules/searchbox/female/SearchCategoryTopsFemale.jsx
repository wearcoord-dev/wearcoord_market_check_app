import { memo } from "react";

export const SearchCategoryTopsFemale = memo((props) => {
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

                <input type="radio" id="tshirt" className="radioInput" name="category" value="508803" onChange={handleInputChange} />
                <label htmlFor="tshirt" className="radioInputLabel">Tシャツ</label>

                <input type="radio" id="outer" className="radioInput" name="category" value="565927" onChange={handleInputChange} />
                <label htmlFor="outer" className="radioInputLabel">アウター</label>
            </div>
        </>
    )
})