import { Flex } from "@chakra-ui/react";
import { FC, memo } from "react";
import { SaveBtn } from "../../atoms/buttonGroup/SaveBtn";
import { SearchBrandSelect } from "./select/SearchBrand";
import { SearchCategorySelect } from "./select/SearchCategory";
import { SearchColorSelect } from "./select/SearchColor";

type Props = {
    onClickAllClose: () => void;
}

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

export const PantsCategory: FC<Props> = memo((props) => {
    const { onClickAllClose } = props;

    return (
        <Flex style={style.wrapper} p={10}>
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
                <SearchCategorySelect type={'pants'} />
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
                <SearchBrandSelect type={'pants'} />
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
            <SaveBtn onClickAllClose={onClickAllClose} />
        </Flex>
    )
});