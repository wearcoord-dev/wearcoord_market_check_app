import { memo } from "react";

export const SearchColor = memo(() => {
    return (
        <>
                 <p className="searchTitle">Color : </p>
            <div className="slide_x">
                <input type="radio" id="black" className="radioInputColor" name="color" value="black" />
                <label htmlFor="black" style={{ background: "black" }} className="radioInputLabelColor"></label>

                <input type="radio" id="white" className="radioInputColor" name="color" value="white" />
                <label htmlFor="white" style={{ background: "white" }} className="radioInputLabelColor"></label>

                <input type="radio" id="navy" className="radioInputColor" name="color" value="navy" />
                <label htmlFor="navy" style={{ background: "navy" }} className="radioInputLabelColor"></label>

                <input type="radio" id="pink" className="radioInputColor" name="color" value="pink" />
                <label htmlFor="pink" style={{ background: "pink" }} className="radioInputLabelColor"></label>

                <input type="radio" id="red" className="radioInputColor" name="color" value="red" />
                <label htmlFor="red" style={{ background: "red" }} className="radioInputLabelColor"></label>

                <input type="radio" id="orange" className="radioInputColor" name="color" value="orange" />
                <label htmlFor="orange" style={{ background: "orange" }} className="radioInputLabelColor"></label>

                <input type="radio" id="yellow" className="radioInputColor" name="color" value="yellow" />
                <label htmlFor="yellow" style={{ background: "yellow" }} className="radioInputLabelColor"></label>

                <input type="radio" id="green" className="radioInputColor" name="color" value="green" />
                <label htmlFor="green" style={{ background: "green" }} className="radioInputLabelColor"></label>

                <input type="radio" id="blue" className="radioInputColor" name="color" value="blue" />
                <label htmlFor="blue" style={{ background: "blue" }} className="radioInputLabelColor"></label>

                <input type="radio" id="purple" className="radioInputColor" name="color" value="purple" />
                <label htmlFor="purple" style={{ background: "purple" }} className="radioInputLabelColor"></label>

            </div>
        </>
    )
})