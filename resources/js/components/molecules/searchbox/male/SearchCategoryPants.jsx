import { memo } from "react";

export const SearchCategoryPants = memo((props) => {
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

                <input type="radio" id="half" className="radioInput" name="category" value="508772" onChange={handleInputChange} />
                <label htmlFor="half" className="radioInputLabel">ハーフ・ショート</label>

                <input type="radio" id="long" className="radioInput" name="category" value="565926" onChange={handleInputChange} />
                <label htmlFor="long" className="radioInputLabel">ロング</label>
            </div>
        </>
    )
})