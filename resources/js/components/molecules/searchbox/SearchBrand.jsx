import { memo, useState } from "react";

export const SearchBrand = memo((props) => {
    // const [userBrand, setUserBrand] = useState('');
    const { setValue } = props;

    // radioのonChangeイベント発生時
    const handleInputChange = (props) => {
        const brand = props.target.value;

        // name属性の値を取得

        setValue(brand);
    }


    return (
        <>
            {/* <p className="searchTitle">Brand : </p> */}
            <div className="slide_x">
                {/* <input type="hidden" id="getbrand" value={userBrand} /> */}

                <input type="radio" id="adidas" className="radioInput" name="brand" value="adidas" onChange={handleInputChange} />
                <label htmlFor="adidas" className="radioInputLabel">Adidas</label>

                <input type="radio" id="nike" className="radioInput" name="brand" value="nike" onChange={handleInputChange} />
                <label htmlFor="nike" className="radioInputLabel">NIKE</label>

                <input type="radio" id="yonex" className="radioInput" name="brand" value="yonex" onChange={handleInputChange} />
                <label htmlFor="yonex" className="radioInputLabel">Yonex</label>

                <input type="radio" id="asics" className="radioInput" name="brand" value="asics" onChange={handleInputChange} />
                <label htmlFor="asics" className="radioInputLabel">Asics</label>

                <input type="radio" id="diadora" className="radioInput" name="brand" value="diadora" onChange={handleInputChange} />
                <label htmlFor="diadora" className="radioInputLabel">Diadora</label>

                <input type="radio" id="prince" className="radioInput" name="brand" value="prince" onChange={handleInputChange} />
                <label htmlFor="prince" className="radioInputLabel">Prince</label>

                <input type="radio" id="fila" className="radioInput" name="brand" value="fila" onChange={handleInputChange} />
                <label htmlFor="fila" className="radioInputLabel">FILA</label>

                <input type="radio" id="underarmour" className="radioInput" name="brand" value="underarmour" onChange={handleInputChange} />
                <label htmlFor="underarmour" className="radioInputLabel">Underarmour</label>

                <input type="radio" id="ellesse" className="radioInput" name="brand" value="ellesse" onChange={handleInputChange} />
                <label htmlFor="ellesse" className="radioInputLabel">Ellesse</label>

                <input type="radio" id="ralosso" className="radioInput" name="brand" value="ralosso" onChange={handleInputChange} />
                <label htmlFor="ralosso" className="radioInputLabel">ralosso</label>
            </div>
        </>
    )
})