import { memo, useState } from "react";

export const SearchColor = memo((props) => {
    const { setValueColor } = props;
    const [ data, setData ] = useState('');

        // radioのonChangeイベント発生時
        const handleInputChange = (props) => {
            const color = props.target.value;

            setValueColor(color);
        }

        const onClickInput = (props) => {

            // 前と同じ条件をクリックしたらチェックボタンを外す
            if(data == props.target.value){
                console.log(props.target.checked);
                props.target.checked = !props.target.checked;

                setData(null);
                setValueColor('');
                return;
            }

            setValueColor(props.target.value);
            setData(props.target.value);
        }

    return (
        <>
                 {/* <p className="searchTitle">Color : </p> */}
            <div className="slide_x">
                <input type="radio" id="black" className="radioInputColor" name="color" value="black" onChange={handleInputChange}
                onClick={onClickInput} />
                <label htmlFor="black" style={{ background: "black" }} className="radioInputLabelColor"></label>

                <input type="radio" id="white" className="radioInputColor" name="color" value="white" onChange={handleInputChange}
                onClick={onClickInput} />
                <label htmlFor="white" style={{ background: "white" }} className="radioInputLabelColor"></label>

                <input type="radio" id="navy" className="radioInputColor" name="color" value="navy" onChange={handleInputChange}
                onClick={onClickInput} />
                <label htmlFor="navy" style={{ background: "navy" }} className="radioInputLabelColor"></label>

                <input type="radio" id="pink" className="radioInputColor" name="color" value="pink" onChange={handleInputChange}
                onClick={onClickInput} />
                <label htmlFor="pink" style={{ background: "pink" }} className="radioInputLabelColor"></label>

                <input type="radio" id="red" className="radioInputColor" name="color" value="red" onChange={handleInputChange}
                onClick={onClickInput} />
                <label htmlFor="red" style={{ background: "red" }} className="radioInputLabelColor"></label>

                <input type="radio" id="orange" className="radioInputColor" name="color" value="orange" onChange={handleInputChange}
                onClick={onClickInput} />
                <label htmlFor="orange" style={{ background: "orange" }} className="radioInputLabelColor"></label>

                <input type="radio" id="yellow" className="radioInputColor" name="color" value="yellow" onChange={handleInputChange}
                onClick={onClickInput} />
                <label htmlFor="yellow" style={{ background: "yellow" }} className="radioInputLabelColor"></label>

                <input type="radio" id="green" className="radioInputColor" name="color" value="green" onChange={handleInputChange}
                onClick={onClickInput} />
                <label htmlFor="green" style={{ background: "green" }} className="radioInputLabelColor"></label>

                <input type="radio" id="blue" className="radioInputColor" name="color" value="blue" onChange={handleInputChange}
                onClick={onClickInput} />
                <label htmlFor="blue" style={{ background: "blue" }} className="radioInputLabelColor"></label>

                <input type="radio" id="purple" className="radioInputColor" name="color" value="purple" onChange={handleInputChange}
                onClick={onClickInput} />
                <label htmlFor="purple" style={{ background: "purple" }} className="radioInputLabelColor"></label>

                <input type="radio" id="gray" className="radioInputColor" name="color" value="gray" onChange={handleInputChange}
                onClick={onClickInput} />
                <label htmlFor="gray" style={{ background: "gray" }} className="radioInputLabelColor"></label>

            </div>
        </>
    )
})