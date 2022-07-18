import { Flex, Tag } from '@chakra-ui/react';
import { FC, memo, useEffect, useRef, useState } from 'react';
import { SearchBrandSelect } from '../../../molecules/category/select/SearchBrand';
import { SearchCategorySelect } from '../../../molecules/category/select/SearchCategory';
import { SearchColorSelect } from '../../../molecules/category/select/SearchColor';
type Props = {
    onClickAllClose: () => void;
    onClickFetchTops: any;
    setTopsSel: any;
    topsSel: any;
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

export const TopsEcCategory: FC<Props> = memo((props) => {
    const {
        onClickAllClose,
        onClickFetchTops,
        setTopsSel,
        topsSel,
        defaultGender,
        defaultBrand,
    } = props;
    const [value, setValue] = useState(topsSel.brand);
    const [valueColor, setValueColor] = useState(topsSel.color);
    const [valueCategory, setValueCategory] = useState(topsSel.category);

    // 初回のレンダリング判定
    const isFirstRender = useRef(false);

    useEffect(() => {
        isFirstRender.current = true;
        if (defaultBrand) {
            setValue(defaultBrand);
        }
    }, []);

    // 初回自動検索ボックス表示時の挙動対応
    useEffect(() => {
        setValueCategory(topsSel.category);
    }, [topsSel.category]);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
        } else {
            const data = {
                wear: 'tops',
                brand: value,
                color: valueColor,
                category: valueCategory,
            };

            setTopsSel(data);
            onClickFetchTops(data);
        }
    }, [value, valueColor, valueCategory]);

    return (
        <Flex style={style.wrapper} p={10}>
            <Flex as="ul" overflow="auto" css={commoncss}>
                <SearchCategorySelect
                    type={'tops'}
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
                        type={'tops'}
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
