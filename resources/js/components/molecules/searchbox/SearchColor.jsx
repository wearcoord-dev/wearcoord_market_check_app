import { memo, useEffect, useState } from "react";

export const SearchColor = memo((props) => {

    const colorlist = {
        white: '',
        black: '',
        navy: '',
        pink: '',
        red: '',
        orange: '',
        yellow: '',
        green: '',
        blue: '',
        purple: '',
        gray: '',
    }

    const { setValueColor, valueColor } = props;
    const [ data, setData ] = useState(valueColor);
    const [ getcheck, useGetcheck ] = useState(colorlist);

    useEffect(() => {

        if(valueColor == 'white'){
            useGetcheck( {white: true} );
        }
        if(valueColor == 'black'){
            useGetcheck( {black: true} );
        }
        if(valueColor == 'navy'){
            useGetcheck( {navy: true} );
        }
        if(valueColor == 'pink'){
            useGetcheck( {pink: true} );
        }
        if(valueColor == 'red'){
            useGetcheck( {red: true} );
        }
        if(valueColor == 'orange'){
            useGetcheck( {orange: true} );
        }
        if(valueColor == 'yellow'){
            useGetcheck( {yellow: true} );
        }
        if(valueColor == 'green'){
            useGetcheck( {green: true} );
        }
        if(valueColor == 'blue'){
            useGetcheck( {blue: true} );
        }
        if(valueColor == 'purple'){
            useGetcheck( {purple: true} );
        }
        if(valueColor == 'gray'){
            useGetcheck( {gray: true} );
        }

    }, [valueColor])



        // radioのonChangeイベント発生時
        const handleInputChange = (props) => {
            const color = props.target.value;

            setValueColor(color);
        }

        const onClickInput = (props) => {

            // 前と同じ条件をクリックしたらチェックボタンを外す
            if(data == props.target.value){
                props.target.checked = !props.target.checked;

                setData(null);
                setValueColor('');
                useGetcheck('');
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
                onClick={onClickInput}
                checked={getcheck.black}
                 />
                <label htmlFor="black" style={{ background: "black" }} className="radioInputLabelColor"></label>

                <input type="radio" id="white" className="radioInputColor" name="color" value="white" onChange={handleInputChange}
                onClick={onClickInput}
                checked={getcheck.white}
                 />
                <label htmlFor="white" style={{ background: "white" }} className="radioInputLabelColor"></label>

                <input type="radio" id="navy" className="radioInputColor" name="color" value="navy" onChange={handleInputChange}
                onClick={onClickInput}
                checked={getcheck.navy}
                 />
                <label htmlFor="navy" style={{ background: "navy" }} className="radioInputLabelColor"></label>

                <input type="radio" id="pink" className="radioInputColor" name="color" value="pink" onChange={handleInputChange}
                onClick={onClickInput}
                checked={getcheck.pink}
                 />
                <label htmlFor="pink" style={{ background: "pink" }} className="radioInputLabelColor"></label>

                <input type="radio" id="red" className="radioInputColor" name="color" value="red" onChange={handleInputChange}
                onClick={onClickInput}
                checked={getcheck.red}
                 />
                <label htmlFor="red" style={{ background: "red" }} className="radioInputLabelColor"></label>

                <input type="radio" id="orange" className="radioInputColor" name="color" value="orange" onChange={handleInputChange}
                onClick={onClickInput}
                checked={getcheck.orange}
                 />
                <label htmlFor="orange" style={{ background: "orange" }} className="radioInputLabelColor"></label>

                <input type="radio" id="yellow" className="radioInputColor" name="color" value="yellow" onChange={handleInputChange}
                onClick={onClickInput}
                checked={getcheck.yellow}
                 />
                <label htmlFor="yellow" style={{ background: "yellow" }} className="radioInputLabelColor"></label>

                <input type="radio" id="green" className="radioInputColor" name="color" value="green" onChange={handleInputChange}
                onClick={onClickInput}
                checked={getcheck.green}
                 />
                <label htmlFor="green" style={{ background: "green" }} className="radioInputLabelColor"></label>

                <input type="radio" id="blue" className="radioInputColor" name="color" value="blue" onChange={handleInputChange}
                onClick={onClickInput}
                checked={getcheck.blue}
                 />
                <label htmlFor="blue" style={{ background: "blue" }} className="radioInputLabelColor"></label>

                <input type="radio" id="purple" className="radioInputColor" name="color" value="purple" onChange={handleInputChange}
                onClick={onClickInput}
                checked={getcheck.purple}
                 />
                <label htmlFor="purple" style={{ background: "purple" }} className="radioInputLabelColor"></label>

                <input type="radio" id="gray" className="radioInputColor" name="color" value="gray" onChange={handleInputChange}
                onClick={onClickInput}
                checked={getcheck.gray}
                 />
                <label htmlFor="gray" style={{ background: "gray" }} className="radioInputLabelColor"></label>

            </div>
        </>
    )
})