import { memo, useEffect, useState } from "react";

export const SearchBrandTops = memo((props) => {

    const brandlist = {
        adidas: '',
        nike: '',
        yonex: '',
        asics: '',
        diadora: '',
        prince: '',
        fila: '',
        underarmour: '',
        ellesse: '',
        babolat: '',
        hydrogen: '',
        lecoq: '',
        lacoste: '',
        yuuchan: '',
        ralosso: '',
        tenninchu: '',
        marc_de_paw: '',
    }

    const { setValue, value } = props;
    const [ data, setData ] = useState('');
    const [ check, useGetcheck ] = useState(brandlist);

    useEffect(() => {

        if(value == 'adidas'){
            useGetcheck( {adidas: true} );
        }
        if(value == 'nike'){
            useGetcheck( {nike: true} );
        }
        if(value == 'yonex'){
            useGetcheck( {yonex: true} );
        }
        if(value == 'asics'){
            useGetcheck( {asics: true} );
        }
        if(value == 'diadora'){
            useGetcheck( {diadora: true} );
        }
        if(value == 'prince'){
            useGetcheck( {prince: true} );
        }
        if(value == 'fila'){
            useGetcheck( {fila: true} );
        }
        if(value == 'underarmour'){
            useGetcheck( {underarmour: true} );
        }
        if(value == 'ellesse'){
            useGetcheck( {ellesse: true} );
        }
        if(value == 'babolat'){
            useGetcheck( {babolat: true} );
        }
        if(value == 'hydrogen'){
            useGetcheck( {hydrogen: true} );
        }
        if(value == 'lecoq'){
            useGetcheck( {lecoq: true} );
        }
        if(value == 'lacoste'){
            useGetcheck( {lacoste: true} );
        }
        if(value == 'yuuchan'){
            useGetcheck( {yuuchan: true} );
        }
        if(value == 'ralosso'){
            useGetcheck( {ralosso: true} );
        }
        if(value == 'tenninchu'){
            useGetcheck( {tenninchu: true} );
        }
        if(value == 'marc_de_paw'){
            useGetcheck( {marc_de_paw: true} );
        }

    }, [value])

    // radioのonChangeイベント発生時
    const handleInputChange = (props) => {
        const brand = props.target.value;

        setValue(brand);
    }

    const onClickInput = (props) => {

        // 前と同じ条件をクリックしたらチェックボタンを外す
        if(data == props.target.value){
            // console.log(props.target.checked);
            props.target.checked = !props.target.checked;

            setData(null);
            setValue('');
            useGetcheck('');
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
                checked={check.adidas}
                 />
                <label htmlFor="adidas" className="radioInputLabel">Adidas</label>

                <input type="radio" id="nike" className="radioInput" name="brand" value="nike" onChange={handleInputChange}
                onClick={onClickInput}
                checked={check.nike}
                 />
                <label htmlFor="nike" className="radioInputLabel">NIKE</label>

                <input type="radio" id="yonex" className="radioInput" name="brand" value="yonex" onChange={handleInputChange}
                onClick={onClickInput}
                checked={check.yonex}
                 />
                <label htmlFor="yonex" className="radioInputLabel">Yonex</label>

                <input type="radio" id="asics" className="radioInput" name="brand" value="asics" onChange={handleInputChange}
                onClick={onClickInput}
                checked={check.asics}
                 />
                <label htmlFor="asics" className="radioInputLabel">Asics</label>

                <input type="radio" id="diadora" className="radioInput" name="brand" value="diadora" onChange={handleInputChange}
                onClick={onClickInput}
                checked={check.diadora}
                 />
                <label htmlFor="diadora" className="radioInputLabel">Diadora</label>

                <input type="radio" id="prince" className="radioInput" name="brand" value="prince" onChange={handleInputChange}
                onClick={onClickInput}
                checked={check.prince}
                 />
                <label htmlFor="prince" className="radioInputLabel">Prince</label>

                <input type="radio" id="fila" className="radioInput" name="brand" value="fila" onChange={handleInputChange}
                onClick={onClickInput}
                checked={check.fila}
                 />
                <label htmlFor="fila" className="radioInputLabel">FILA</label>

                {/* <input type="radio" id="underarmour" className="radioInput" name="brand" value="underarmour" onChange={handleInputChange}
                onClick={onClickInput}
                checked={check.underarmour}
                 />
                <label htmlFor="underarmour" className="radioInputLabel">Underarmour</label> */}

                <input type="radio" id="ellesse" className="radioInput" name="brand" value="ellesse" onChange={handleInputChange}
                onClick={onClickInput}
                checked={check.ellesse}
                 />
                <label htmlFor="ellesse" className="radioInputLabel">ellesse</label>

                <input type="radio" id="babolat" className="radioInput" name="brand" value="babolat" onChange={handleInputChange}
                onClick={onClickInput}
                checked={check.babolat}
                 />
                <label htmlFor="babolat" className="radioInputLabel">Babolat</label>

                <input type="radio" id="hydrogen" className="radioInput" name="brand" value="hydrogen" onChange={handleInputChange}
                onClick={onClickInput}
                checked={check.hydrogen}
                 />
                <label htmlFor="hydrogen" className="radioInputLabel">Hydrogen</label>

                <input type="radio" id="lecoq" className="radioInput" name="brand" value="lecoq" onChange={handleInputChange}
                onClick={onClickInput}
                checked={check.lecoq}
                 />
                <label htmlFor="lecoq" className="radioInputLabel">Lecoq</label>

                <input type="radio" id="lacoste" className="radioInput" name="brand" value="lacoste" onChange={handleInputChange}
                onClick={onClickInput}
                checked={check.lacoste}
                 />
                <label htmlFor="lacoste" className="radioInputLabel">Lacoste</label>

                <input type="radio" id="yuuchan" className="radioInput" name="brand" value="yuuchan" onChange={handleInputChange}
                onClick={onClickInput}
                checked={check.yuuchan}
                 />
                <label htmlFor="yuuchan" className="radioInputLabel">yuuchan</label>

                <input type="radio" id="ralosso" className="radioInput" name="brand" value="ralosso" onChange={handleInputChange}
                onClick={onClickInput}
                checked={check.ralosso}
                 />
                <label htmlFor="ralosso" className="radioInputLabel">ralosso</label>

                {/* <input type="radio" id="tenninchu" className="radioInput" name="brand" value="tenninchu" onChange={handleInputChange}
                onClick={onClickInput}
                checked={check.tenninchu}
                 />
                <label htmlFor="tenninchu" className="radioInputLabel">庭球人</label> */}

                <input type="radio" id="marc_de_paw" className="radioInput" name="brand" value="marc_de_paw" onChange={handleInputChange}
                onClick={onClickInput}
                checked={check.marc_de_paw}
                 />
                <label htmlFor="marc_de_paw" className="radioInputLabel">Marc De Paw</label>
            </div>
        </>
    )
})