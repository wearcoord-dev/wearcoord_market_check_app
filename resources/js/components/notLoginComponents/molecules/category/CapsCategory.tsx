import { Button, ButtonGroup, Flex } from "@chakra-ui/react";
import { FC, memo, ReactNode, useEffect, useRef, useState } from "react";
import { SaveBtn } from "../../atoms/buttonGroup/SaveBtn";
import { SearchBrandSelect } from "./select/SearchBrand";
import { SearchCategorySelect } from "./select/SearchCategory";
import { SearchColorSelect } from "./select/SearchColor";

type Props = {
    onClickAllClose: () => void;
    onClickFetchCaps: any;
    setCapsSel: any;
    capsSel: any;
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


export const CapsCategory: FC<Props> = memo((props) => {
    const { onClickAllClose, onClickFetchCaps, setCapsSel, capsSel, defaultGender } = props;
    const [value, setValue] = useState('');
    const [valueColor, setValueColor] = useState((''));
    const [valueCategory, setValueCategory] = useState();

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
                wear: "caps",
                brand: value,
                color: valueColor,
                category: valueCategory,
            }

            setCapsSel(data);
            onClickFetchCaps(data);
        }
    }, [value, valueColor, valueCategory]);

    return (
        <Flex style={style.wrapper} p={10}>
            <Flex as='ul' overflow='auto'
                css={commoncss}
            >
                <SearchCategorySelect
                    type={'caps'}
                    setValueCategory={setValueCategory}
                    valueCategory={valueCategory}
                    defaultGender={defaultGender}
                />
            </Flex>
            <Flex as='ul' overflow='auto'
                css={commoncss}
            >
                <SearchBrandSelect
                    type={'caps'}
                    setValue={setValue}
                    value={value}
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
            <SaveBtn onClickAllClose={onClickAllClose} />
        </Flex>
    )
});