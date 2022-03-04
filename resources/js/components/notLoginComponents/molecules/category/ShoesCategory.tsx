import { Flex } from "@chakra-ui/react";
import { FC, memo, useEffect, useRef, useState } from "react";
import { SaveBtn } from "../../atoms/buttonGroup/SaveBtn";
import { SearchBrandSelect } from "./select/SearchBrand";
import { SearchCategorySelect } from "./select/SearchCategory";
import { SearchColorSelect } from "./select/SearchColor";

type Props = {
    onClickRegisterWear: () => void;
    onClickAllClose: () => void;
    onClickFetchShoes: any;
    setShoesSel: any;
    shoesSel: any;
    defaultGender: string;
}

const style = {
    wrapper: {
        position: "fixed",
        bottom: "0px",
        width: "100%",
        right: "0",
        flexDirection: 'column',
        backgroundColor: 'ghostwhite',
        padding: "0 20px 20px",
        zIndex: 1000,
    },
    ul: {
        flexWrap: "nowrap",
        overflow: "auto",
    }
} as const;

const commoncss = {
    '&::-webkit-scrollbar': {
        height: '8px',
    },
    '&::-webkit-scrollbar-track': {
        width: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#216496',
        borderRadius: '24px',
    },
}

export const ShoesCategory: FC<Props> = memo((props) => {
    const { onClickAllClose, onClickFetchShoes, setShoesSel, shoesSel, defaultGender, onClickRegisterWear } = props;
    const [value, setValue] = useState(shoesSel.brand);
    const [valueColor, setValueColor] = useState(shoesSel.color);
    const [valueCategory, setValueCategory] = useState(shoesSel.category);

    // 初回のレンダリング判定
    const isFirstRender = useRef(false)

    useEffect(() => {
        isFirstRender.current = true
    }, [])

    useEffect(() => {

        if (isFirstRender.current) {
            isFirstRender.current = false;
        } else {
            const data = {
                wear: "shoes",
                brand: value,
                color: valueColor,
                category: valueCategory,
            }

            setShoesSel(data);
            onClickFetchShoes(data);
        }
    }, [value, valueColor, valueCategory]);

    return (
        <Flex style={style.wrapper} p={10}>
            <Flex as='ul' overflow='auto'
                css={commoncss}
            >
                <SearchCategorySelect
                    type={'shoes'}
                    setValueCategory={setValueCategory}
                    valueCategory={valueCategory}
                    defaultGender={defaultGender}
                />
            </Flex>
            <Flex as='ul' overflow='auto'
                css={commoncss}
            >
                <SearchBrandSelect
                    type={'shoes'}
                    setValue={setValue}
                    valueBrand={value}
                    defaultGender={defaultGender}
                />
            </Flex>
            <Flex as='ul' overflow='auto'
                css={commoncss}
            >
                <SearchColorSelect
                    setValueColor={setValueColor}
                    valueColor={valueColor}
                />
            </Flex>
            <SaveBtn
                onClickAllClose={onClickAllClose}
                onClickRegisterWear={onClickRegisterWear}
            />
        </Flex>
    )
});