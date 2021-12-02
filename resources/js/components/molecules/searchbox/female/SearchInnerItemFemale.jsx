import { memo, useState } from "react";
import Img1 from "/img/mannequin/woman_inner_manekin1.png";
import Img2 from "/img/mannequin/woman_totalinner_manekin1.png";
import Img3 from "/img/mannequin/manekin_female_10001000.png";

export const SearchInnerItemFemale = memo((props) => {

    const { setValueId } = props;

    // radioのonChangeイベント発生時
    const handleInputChange = (props) => {
        const id = props.target.value;

        // name属性の値を取得

        setValueId(id);
    }

    const style = {
        width: "150px",
        height: "150px",
        objectFit: "contain",
    }

    return (
        <>
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

                <input type="radio" id="3" className="radioInput" name="brand" value="manekin_female_10001000.png" onChange={handleInputChange} />
                <label htmlFor="3" className="radioInputLabel">
                <img style={style} src={Img3} alt="" />
                <p style={{textAlign: "center"}}>Type3</p>
                </label>

            </div>
        </>
    )
})