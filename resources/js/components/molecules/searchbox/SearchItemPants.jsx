import { memo, useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../providers/UserProvider";
import { SearchBrandPantsFemale } from "./female/SearchBrandPantsFemale";
import { SearchCategoryPantsFemale } from "./female/SearchCategoryPantsFemale";
import { SearchCategoryPants } from "./male/SearchCategoryPants";
import { SearchBrandPants } from "./searchBrand/SearchBrandPants";
import { SearchColor } from "./SearchColor";

export const SearchItemPants = memo((props) => {
    const { onClickFetchPants, setPantsSel, pantsSel } = props;
    const [value, setValue] = useState(pantsSel.brand);
    const [valueColor, setValueColor] = useState(pantsSel.color);
    const [valueCategory, setValueCategory] = useState(pantsSel.category);

    const context = useContext(UserContext);

        // 初回のレンダリング判定
        const isFirstRender = useRef(false)

        useEffect(() => {
            isFirstRender.current = true
        }, [])

    useEffect((props) => {
        if(isFirstRender.current) {
            isFirstRender.current = false;
          } else {
              const data = {
                  wear: "pants",
                  brand: value,
                  color: valueColor,
                  category: valueCategory,
              }

              setPantsSel(data);
              onClickFetchPants(data);
          }

    }, [value, valueColor, valueCategory]);

    return (
        <>
            <div>
                {context.contextName.gender == 'male' ? <SearchBrandPants setValue={setValue} value={value} /> : <SearchBrandPantsFemale setValue={setValue} value={value} />}
                <SearchColor setValueColor={setValueColor}
                valueColor={valueColor}
                 />

                {context.contextName.gender == 'male' ? <SearchCategoryPants setValueCategory={setValueCategory} valueCategory={valueCategory} /> : <SearchCategoryPantsFemale setValueCategory={setValueCategory} valueCategory={valueCategory} />}
            </div>
        </>
    )
})