import { memo, useState } from "react";

export const SearchBrandCaps = memo((props) => {
    const { setValue } = props;
    const [ data, setData ] = useState('');

    // radioのonChangeイベント発生時
    const handleInputChange = (props) => {
        const brand = props.target.value;
        setValue(brand);
    }

    const onClickInput = (props) => {

        // 前と同じ条件をクリックしたらチェックボタンを外す
        if(data == props.target.value){
            console.log(props.target.checked);
            props.target.checked = !props.target.checked;

            setData(null);
            setValue('');
            return;
        }

        setValue(props.target.value);
        setData(props.target.value);
    }


    return (
        <>
            <div className="slide_x">

                <input type="radio" id="adidas" className="radioInput" name="brand" value="adidas" onChange={handleInputChange}
                onClick={onClickInput}
                 />
                <label htmlFor="adidas" className="radioInputLabel">Adidas</label>

                <input type="radio" id="nike" className="radioInput" name="brand" value="nike" onChange={handleInputChange}
                onClick={onClickInput}
                 />
                <label htmlFor="nike" className="radioInputLabel">NIKE</label>

                <input type="radio" id="yonex" className="radioInput" name="brand" value="yonex" onChange={handleInputChange}
                onClick={onClickInput} />
                <label htmlFor="yonex" className="radioInputLabel">Yonex</label>

                <input type="radio" id="asics" className="radioInput" name="brand" value="asics" onChange={handleInputChange}
                onClick={onClickInput} />
                <label htmlFor="asics" className="radioInputLabel">Asics</label>

                <input type="radio" id="diadora" className="radioInput" name="brand" value="diadora" onChange={handleInputChange}
                onClick={onClickInput} />
                <label htmlFor="diadora" className="radioInputLabel">Diadora</label>

                <input type="radio" id="prince" className="radioInput" name="brand" value="prince" onChange={handleInputChange}
                onClick={onClickInput} />
                <label htmlFor="prince" className="radioInputLabel">Prince</label>

                <input type="radio" id="fila" className="radioInput" name="brand" value="fila" onChange={handleInputChange}
                onClick={onClickInput} />
                <label htmlFor="fila" className="radioInputLabel">FILA</label>

                <input type="radio" id="underarmour" className="radioInput" name="brand" value="underarmour" onChange={handleInputChange}
                onClick={onClickInput} />
                <label htmlFor="underarmour" className="radioInputLabel">Underarmour</label>

                <input type="radio" id="ellesse" className="radioInput" name="brand" value="ellesse" onChange={handleInputChange}
                onClick={onClickInput} />
                <label htmlFor="ellesse" className="radioInputLabel">Ellesse</label>

                <input type="radio" id="babolat" className="radioInput" name="brand" value="babolat" onChange={handleInputChange}
                onClick={onClickInput} />
                <label htmlFor="babolat" className="radioInputLabel">Babolat</label>

                <input type="radio" id="hydrogen" className="radioInput" name="brand" value="hydrogen" onChange={handleInputChange}
                onClick={onClickInput} />
                <label htmlFor="hydrogen" className="radioInputLabel">Hydrogen</label>

                <input type="radio" id="lecoq" className="radioInput" name="brand" value="lecoq" onChange={handleInputChange}
                onClick={onClickInput} />
                <label htmlFor="lecoq" className="radioInputLabel">Lecoq</label>

                <input type="radio" id="lacoste" className="radioInput" name="brand" value="lacoste" onChange={handleInputChange}
                onClick={onClickInput} />
                <label htmlFor="lacoste" className="radioInputLabel">Lacoste</label>
            </div>
        </>
    )
})