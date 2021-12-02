import { memo, useState } from "react";
import Img1 from "/img/mannequin/woman_inner_manekin1.png";
import Img2 from "/img/mannequin/woman_totalinner_manekin1.png";

export const SearchSocksItemFemale = memo((props) => {

    const { setValueId } = props;

    // radioのonChangeイベント発生時
    const handleInputChange = (props) => {
        const id = props.target.value;

        setValueId(id);
    }

    const style = {
        width: "150px",
        height: "150px",
        objectFit: "contain",
    }

    return (
        <>
            {/* <p className="searchTitle">Brand : </p> */}
            <div className="slide_x">

                <input type="radio" id="1" className="radioInput" name="brand" value="woman_inner_manekin1.png" onChange={handleInputChange} />
                <label htmlFor="1" className="radioInputLabel">
                <img style={style} src={Img1} alt="" />
                <p style={{textAlign: "center"}}>Type1</p>
                </label>

                <input type="radio" id="2" className="radioInput" name="brand" value="woman_totalinner_manekin1.png" onChange={handleInputChange} />
                <label htmlFor="2" className="radioInputLabel">
                <img style={style} src={Img2} alt="" />
                <p style={{textAlign: "center"}}>Type2</p>
                </label>
            </div>
        </>
    )
})