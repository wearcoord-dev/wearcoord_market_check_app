import { memo, useState } from "react";
import Img1 from "/img/mannequin/mens_170_totalinner_long_black_socks_model.png";
import Img2 from "/img/mannequin/mens_170_totalinner_long_white_socks_model.png";
import Img3 from "/img/mannequin/mens_170_totalinner_short_black_socks_model.png";
import Img4 from "/img/mannequin/mens_170_totalinner_short_white_socks_model.png";
import Img5 from "/img/mannequin/mens_170_underinner_long_black_socks_model.png";
import Img6 from "/img/mannequin/mens_170_underinner_short_white_socks_model.png";
import Img7 from "/img/mannequin/mens_170_underinner_long_white_socks_model.png";
import Img8 from "/img/mannequin/mens_170_underinner_short_black_socks_model.png";
import Img9 from "/img/mannequin/mannequin_done3.png";

export const SearchInnerItem = memo((props) => {

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
                {/* <input type="hidden" id="getbrand" value={userBrand} /> */}

                <input type="radio" id="1" className="radioInput" name="brand" value="mens_170_totalinner_long_black_socks_model.png" onChange={handleInputChange} />
                <label htmlFor="1" className="radioInputLabel">
                <img style={style} src={Img1} alt="" />
                <p style={{textAlign: "center"}}>Type1</p>
                </label>

                <input type="radio" id="2" className="radioInput" name="brand" value="mens_170_totalinner_long_white_socks_model.png" onChange={handleInputChange} />
                <label htmlFor="2" className="radioInputLabel">
                <img style={style} src={Img2} alt="" />
                <p style={{textAlign: "center"}}>Type2</p>
                </label>

                <input type="radio" id="3" className="radioInput" name="brand" value="mens_170_totalinner_short_black_socks_model.png" onChange={handleInputChange} />
                <label htmlFor="3" className="radioInputLabel">
                <img style={style} src={Img3} alt="" />
                <p style={{textAlign: "center"}}>Type3</p>
                </label>

                <input type="radio" id="4" className="radioInput" name="brand" value="mens_170_totalinner_short_white_socks_model.png" onChange={handleInputChange} />
                <label htmlFor="4" className="radioInputLabel">
                <img style={style} src={Img4} alt="" />
                <p style={{textAlign: "center"}}>Type4</p>
                </label>

                <input type="radio" id="5" className="radioInput" name="brand" value="mens_170_underinner_long_black_socks_model.png" onChange={handleInputChange} />
                <label htmlFor="5" className="radioInputLabel">
                <img style={style} src={Img5} alt="" />
                <p style={{textAlign: "center"}}>Type5</p>
                </label>

                <input type="radio" id="6" className="radioInput" name="brand" value="mens_170_underinner_short_white_socks_model.png" onChange={handleInputChange} />
                <label htmlFor="6" className="radioInputLabel">
                <img style={style} src={Img6} alt="" />
                <p style={{textAlign: "center"}}>Type6</p>
                </label>

                <input type="radio" id="7" className="radioInput" name="brand" value="mens_170_underinner_long_white_socks_model.png" onChange={handleInputChange} />
                <label htmlFor="7" className="radioInputLabel">
                <img style={style} src={Img7} alt="" />
                <p style={{textAlign: "center"}}>Type7</p>
                </label>

                <input type="radio" id="8" className="radioInput" name="brand" value="mens_170_underinner_short_black_socks_model.png" onChange={handleInputChange} />
                <label htmlFor="8" className="radioInputLabel">
                <img style={style} src={Img8} alt="" />
                <p style={{textAlign: "center"}}>Type8</p>
                </label>

                <input type="radio" id="9" className="radioInput" name="brand" value="mannequin_done3.png" onChange={handleInputChange} />
                <label htmlFor="9" className="radioInputLabel">
                <img style={style} src={Img9} alt="" />
                <p style={{textAlign: "center"}}>Type9</p>
                </label>

            </div>
        </>
    )
})