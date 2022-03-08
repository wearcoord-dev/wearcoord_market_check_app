import { Box, Button, CircularProgress, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Icon, Image, Stack, useDisclosure } from "@chakra-ui/react";
import { FC, memo, useEffect, useState } from "react";
import { useGetShopifyItem } from "../../hooks/useGetShopifyItem";

import numeral from "numeral";

type Props = {
    btnIcon: any;
    wearId: any;
    type: string;
    allData: any;
}

export const TopDrawerBtn: FC<Props> = memo((props) => {
    const { btnIcon, wearId, allData, type } = props;
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { getShopifyItem, shopifyItem, loading } = useGetShopifyItem();

    const handleClick = () => {
        onOpen()

        // 商品情報を取得していない場合はAPIを叩く（既に取得していたら叩かない）
        if (!shopifyItem) {
            getShopifyItem(wearId);
        }
    }

    // console.log(shopifyItem)
    // console.log(allData)


    return (
        <>
            <Button
                onClick={() => handleClick()}
                m={0}
                bg="#216496"
                p={8}
            ><Icon w={8} h={8} color='white' as={btnIcon} /></Button>

            <Drawer onClose={onClose} isOpen={isOpen} size={'md'}>
                <DrawerOverlay />
                <DrawerContent>

                    {loading ? (
                        <Flex
                            justifyContent='center'
                            height='50vh'
                            alignItems='center'
                        >
                            <CircularProgress isIndeterminate color='#216496' />
                        </Flex>
                    ) : (
                        shopifyItem ? (
                            <>
                                <DrawerHeader
                                    textAlign='center'
                                    py={8}
                                    fontSize='20px'
                                    color='#216496'
                                    fontWeight='bold'
                                >{shopifyItem ? <>{shopifyItem.title}</> : null}</DrawerHeader>
                                <DrawerHeader
                                    textAlign='center'
                                >
                                    {shopifyItem.onlineStoreUrl ? (
                                        <>
                                            <Button as="a" href={shopifyItem.onlineStoreUrl} bg='#216496' color='white' variant='solid' target={'_blank'} w='80%' size='lg'>購入する</Button>
                                        </>
                                    ) : null}
                                </DrawerHeader>
                                <DrawerBody>
                                    <Stack>
                                        {shopifyItem.descriptionHtml ? (
                                            <>
                                                <Box dangerouslySetInnerHTML={{ __html: shopifyItem.descriptionHtml }}></Box>
                                            </>
                                        ) : null}
                                        {shopifyItem.vendor ? (
                                            <>
                                                <Box
                                                    textAlign='end'
                                                    fontWeight='bold'
                                                    color='#484848'
                                                    fontSize='16px'
                                                >{shopifyItem.vendor}</Box>
                                            </>
                                        ) : null}
                                        {shopifyItem.variants.edges[0].node.price ? (
                                            <Box
                                                textAlign='end'
                                                fontWeight='bold'
                                                color='orangered'
                                                fontSize='16px'
                                            >
                                                ¥{numeral(shopifyItem.variants.edges[0].node.price).format('0,0')} ~
                                            </Box>
                                        ) : null}
                                        {shopifyItem.images ? (
                                            <Box py={4}>
                                                {shopifyItem.images.edges.map((item) => (
                                                    <Image
                                                        src={item.node.originalSrc}
                                                        alt={item.node.originalSrc} key={item.node.id}
                                                        py={4}
                                                    />
                                                ))}
                                            </Box>
                                        ) : null}
                                        {shopifyItem.onlineStoreUrl ? (
                                            <>
                                                <DrawerFooter
                                                    display='flex'
                                                    flexDirection='column'
                                                    py={10}
                                                >
                                                    {shopifyItem ? (
                                                        <>
                                                            <Box
                                                                py={4}
                                                                fontWeight='bold'
                                                            >wearcoord公式ストアで購入する</Box>
                                                            <Button as="a" href={shopifyItem.onlineStoreUrl} bg='#216496' color='white' variant='solid' target={'_blank'} w='100%' size='lg'>購入する</Button>
                                                        </>
                                                    ) : null}
                                                </DrawerFooter>
                                            </>
                                        ) : null}
                                    </Stack>
                                </DrawerBody>
                            </>
                        ) : (
                            allData ? (
                                <>
                                    <DrawerHeader
                                        textAlign='center'
                                        py={8}
                                        fontSize='20px'
                                        color='#216496'
                                        fontWeight='bold'
                                    >ウェア詳細</DrawerHeader>
                                    <Flex
                                        justifyContent='center'
                                    >
                                        {allData.moshimoLink ? (
                                            <>
                                                <Box dangerouslySetInnerHTML={{ __html: allData.moshimoLink }}></Box>
                                            </>
                                        ) : null}
                                    </Flex>
                                </>
                            ) : (
                                <Stack
                                    textAlign='center'
                                    py={10}
                                    color='#484848'
                                    fontWeight='bold'
                                >
                                    <Box>該当するアイテムの情報がありません</Box>
                                </Stack>
                            )
                        )
                    )}

                </DrawerContent>
            </Drawer>
        </>
    )
});