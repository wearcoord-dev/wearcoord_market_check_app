import { memo, useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../providers/UserProvider";
import { SearchCategoryShoesFemale } from "./female/SearchCategoryShoesFemale";
import { SearchCategoryShoes } from "./male/SearchCategoryShoes";
import { SearchBrandShoes } from "./searchBrand/SearchBrandShoes";
import { SearchColor } from "./SearchColor";

export const SearchItemShoes = memo((props) => {
    const { onClickFetchShoes, setShoesSel, shoesSel } = props;
    const [value, setValue] = useState(shoesSel.brand);
    const [valueColor, setValueColor] = useState(shoesSel.color);
    const [valueCategory, setValueCategory] = useState(shoesSel.category);

    const context = useContext(UserContext);

        // 初回のレンダリング判定
        const isFirstRender = useRef(false)

        useEffect(() => {
            isFirstRender.current = true
        }, [])

    useEffect((props) => {
        // let category = "";
        // if(context.contextName.gender == 'male'){
        //     category = "208025";
        // }else{
        //     category = "565819";
        // }

        if(isFirstRender.current) {
            isFirstRender.current = false;
          } else {
              const data = {
                  wear : "shoes",
                  brand : value,
                  color : valueColor,
                  category: valueCategory,
              }

              // 検索条件を保存
              setShoesSel(data);
              onClickFetchShoes(data);
          }

    }, [value, valueColor, valueCategory]);

    return (
        <>
            <div>
                <SearchBrandShoes setValue={setValue} value={value} />
                <SearchColor setValueColor={setValueColor} valueColor={valueColor} />

                {context.contextName.gender == 'male' ? <SearchCategoryShoes setValueCategory={setValueCategory} valueCategory={valueCategory} /> : <SearchCategoryShoesFemale setValueCategory={setValueCategory} valueCategory={valueCategory} />}
            </div>
        </>
    )
})