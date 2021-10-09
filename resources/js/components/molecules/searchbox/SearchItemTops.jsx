import { memo, useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../providers/UserProvider";
import { SearchBrandTops } from "./searchBrand/SearchBrandTops";
import { SearchColor } from "./SearchColor";
import { SearchCategoryTops } from "./male/SearchCategoryTops";
import { SearchCategoryTopsFemale } from "./female/SearchCategoryTopsFemale";
import { SearchBrandTopsFemale } from "./female/SearchBrandTopsFemale";

export const SearchItemTops = memo((props) => {
    const { onClickFetchTops, setTopsSel, topsSel } = props;
    const [value, setValue] = useState(topsSel.brand);
    const [valueColor, setValueColor] = useState(topsSel.color);

    const [valueCategory, setValueCategory] = useState(topsSel.category);

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
                  wear: "tops",
                  brand: value,
                  color: valueColor,
                  category: valueCategory,
              }

              setTopsSel(data);
              onClickFetchTops(data);
          }

    }, [value, valueColor, valueCategory]);

    return (
        <>
            <div>
                {context.contextName.gender == 'male' ? <SearchBrandTops setValue={setValue} value={value} /> : <SearchBrandTopsFemale setValue={setValue} value={value} userid={context.contextName.id} />}
                <SearchColor
                    setValueColor={setValueColor}
                    valueColor={valueColor}
                />

                {context.contextName.gender == 'male' ? <SearchCategoryTops setValueCategory={setValueCategory} valueCategory={valueCategory} /> : <SearchCategoryTopsFemale setValueCategory={setValueCategory} valueCategory={valueCategory} />}
            </div>
        </>
    )
})