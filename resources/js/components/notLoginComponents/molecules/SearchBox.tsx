import { Box, Center, Flex, Wrap, WrapItem } from "@chakra-ui/react";
import { FC, memo } from "react";
import { SearchBrandSelect } from "./SearchBrand";


const style = {
wrapper:{
        position: "fixed",
        bottom: "20px",
        width: "100%",
        right: "0",
},
ul:{
    flexWrap: "nowrap",
    overflow: "auto",
}
} as const;

export const SearchBox: FC = memo(() => {
    return (
        <>
            <Flex as='ul' style={style.wrapper} overflow='auto'
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

            {/* <Box style={style.wrapper} >
                <Box as="ul" style={style.ul} overflow='auto' whiteSpace='nowrap'>
                    <Box as="li" display='inline-block' w='180px' h='80px' bg='red.200'>
                        Box 1
                    </Box>
                    <Box as="li" display='inline-block' w='180px' h='80px' bg='red.200'>
                        Box 1
                    </Box>
                    <Box as="li" display='inline-block' w='180px' h='80px' bg='red.200'>
                        Box 1
                    </Box>
                    <Box as="li" display='inline-block' w='180px' h='80px' bg='red.200'>
                        Box 1
                    </Box>
                    <Box as="li" display='inline-block' w='180px' h='80px' bg='red.200'>
                        Box 1
                    </Box>
                    <Box as="li" display='inline-block' w='180px' h='80px' bg='red.200'>
                        Box 1
                    </Box>
                    <Box as="li" display='inline-block' w='180px' h='80px' bg='red.200'>
                        Box 1
                    </Box>
                    <Box as="li" display='inline-block' w='180px' h='80px' bg='red.200'>
                        Box 1
                    </Box>
                    <Box as="li" display='inline-block' w='180px' h='80px' bg='red.200'>
                        Box 1
                    </Box>
                    <Box as="li" display='inline-block' w='180px' h='80px' bg='red.200'>
                        Box 1
                    </Box>
                    <Box as="li" display='inline-block' w='180px' h='80px' bg='red.200'>
                        Box 1
                    </Box>
                </Box>
            </Box> */}
        </>
    )
});