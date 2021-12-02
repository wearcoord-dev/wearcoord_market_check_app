import { memo, useState } from "react";
import Img9 from "/img/mannequin/mens_170_long_black_socks_model.png";
import Img10 from "/img/mannequin/mens_170_long_white_socks_model.png";
import Img11 from "/img/mannequin/mens_170_short_black_socks_model.png";
import Img12 from "/img/mannequin/mens_170_short_white_socks_model.png";

export const SearchSocksItem = memo((props) => {

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

                <input type="radio" id="9" className="radioInput" name="brand" value="mens_170_long_black_socks_model.png" onChange={handleInputChange} />
                <label htmlFor="9" className="radioInputLabel">
                <img style={style} src={Img9} alt="" />
                <p style={{textAlign: "center"}}>Type9</p>
                </label>

                <input type="radio" id="10" className="radioInput" name="brand" value="mens_170_long_white_socks_model.png" onChange={handleInputChange} />
                <label htmlFor="10" className="radioInputLabel">
                <img style={style} src={Img10} alt="" />
                <p style={{textAlign: "center"}}>Type10</p>
                </label>

                <input type="radio" id="11" className="radioInput" name="brand" value="mens_170_short_black_socks_model.png" onChange={handleInputChange} />
                <label htmlFor="11" className="radioInputLabel">
                <img style={style} src={Img11} alt="" />
                <p style={{textAlign: "center"}}>Type11</p>
                </label>

                <input type="radio" id="12" className="radioInput" name="brand" value="mens_170_short_white_socks_model.png" onChange={handleInputChange} />
                <label htmlFor="12" className="radioInputLabel">
                <img style={style} src={Img12} alt="" />
                <p style={{textAlign: "center"}}>Type12</p>
                </label>

            </div>
        </>
    )
})