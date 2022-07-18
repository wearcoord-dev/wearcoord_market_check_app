import { Button, ButtonGroup, Flex, Tag } from '@chakra-ui/react';
import { FC, memo, ReactNode, useEffect, useRef, useState } from 'react';
import { SearchBrandSelect } from '../../../molecules/category/select/SearchBrand';
import { SearchCategorySelect } from '../../../molecules/category/select/SearchCategory';
import { SearchColorSelect } from '../../../molecules/category/select/SearchColor';


type Props = {
    onClickAllClose: () => void;
    onClickFetchCaps: any;
    setCapsSel: any;
    capsSel: any;
    defaultGender: string;
    defaultBrand?: string;
};

const style = {
    wrapper: {
        position: 'fixed',
        bottom: '0px',
        width: '100%',
        right: '0',
        flexDirection: 'column',
        backgroundColor: 'ghostwhite',
        padding: '10px 20px',
        zIndex: 1000,
    },
    ul: {
        flexWrap: 'nowrap',
        overflow: 'auto',
    },
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
};

export const CapsEcCategory: FC<Props> = memo((props) => {
    const {
        onClickAllClose,
        onClickFetchCaps,
        setCapsSel,
        capsSel,
        defaultGender,
        defaultBrand,
    } = props;
    const [value, setValue] = useState(capsSel.brand);
    const [valueColor, setValueColor] = useState(capsSel.color);
    const [valueCategory, setValueCategory] = useState(capsSel.category);

    // 初回のレンダリング判定
    const isFirstRender = useRef(false);

    useEffect(() => {
        isFirstRender.current = true;
        if (defaultBrand) {
            setValue(defaultBrand);
        }
    }, []);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
        } else {
            const data = {
                wear: 'caps',
                brand: value,
                color: valueColor,
                category: valueCategory,
            };

            setCapsSel(data);
            onClickFetchCaps(data);
        }
    }, [value, valueColor, valueCategory]);

    return (
        <Flex style={style.wrapper} p={10}>
            <Flex as="ul" overflow="auto" css={commoncss}>
                <SearchCategorySelect
                    type={'caps'}
                    setValueCategory={setValueCategory}
                    valueCategory={valueCategory}
                    defaultGender={defaultGender}
                />
            </Flex>
            <Flex as="ul" overflow="auto" css={commoncss}>
                {defaultBrand ? (
                    <Flex>
                        <Tag
                            size={'lg'}
                            variant="solid"
                            bg="#216496"
                            py={3}
                            my={1}
                            fontSize={'lg'}
                        >
                            {`${defaultBrand}を選択中`}
                        </Tag>
                    </Flex>
                ) : (
                    <SearchBrandSelect
                        type={'caps'}
                        setValue={setValue}
                        valueBrand={value}
                        defaultGender={defaultGender}
                    />
                )}
            </Flex>
            <Flex as="ul" overflow="auto" css={commoncss}>
                <SearchColorSelect
                    setValueColor={setValueColor}
                    valueColor={valueColor}
                />
            </Flex>
        </Flex>
    );
});
