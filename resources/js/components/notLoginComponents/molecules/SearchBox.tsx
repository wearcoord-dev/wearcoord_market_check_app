import { Box, Center, Flex, Wrap, WrapItem } from "@chakra-ui/react";
import { FC, memo } from "react";
import { SearchBrandSelect } from "./SearchBrand";
import { SearchCategorySelect } from "./SearchCategory";
import { SearchColorSelect } from "./SearchColor";


const style = {
    wrapper: {
        position: "fixed",
        bottom: "20px",
        width: "100%",
        right: "0",
        flexDirection: 'column',
    },
    ul: {
        flexWrap: "nowrap",
        overflow: "auto",
    }
} as const;

export const SearchBox: FC = memo(() => {
    return (
        <>
            <Flex style={style.wrapper}>
                <Flex as='ul' overflow='auto'
                    css={{
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
                    }}
                >
                    <SearchCategorySelect />
                </Flex>
                <Flex as='ul' overflow='auto'
                    css={{
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
                    }}
                >
                    <SearchBrandSelect />
                </Flex>
                <Flex as='ul' overflow='auto'
                    css={{
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
                    }}
                >
                    <SearchColorSelect />
                </Flex>
            </Flex>
        </>
    )
});