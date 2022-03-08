import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Icon, Image, Stack, useDisclosure } from "@chakra-ui/react";
import { FC, memo, useEffect, useState } from "react";
import { useGetShopifyItem } from "../../hooks/useGetShopifyItem";

import numeral from "numeral";

type Props = {
    btnIcon: any;
    wearId: any;
    type: string;
}

export const TopDrawerBtn: FC<Props> = memo((props) => {
    const { btnIcon, wearId, type } = props;
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [shopifyId, setShopifyId] = useState<any>();
    const { getShopifyItem, shopifyItem } = useGetShopifyItem();

    const handleClick = () => {
        onOpen()
        getShopifyItem(wearId);
    }

    console.log(shopifyItem)

    const shopifyImg = (
        <>
            {shopifyItem ? (
                <>
                    {shopifyItem.images.edges.map((item) => {
                        <p>{item.node.originalSrc}</p>
                    })}
                </>
            ) : <p>null</p>}
        </>
    );


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
                        {shopifyItem ? (
                            <>
                                <Button as="a" href={shopifyItem.onlineStoreUrl} bg='#216496' color='white' variant='solid' target={'_blank'} w='80%' size='lg'>購入する</Button>
                            </>
                        ) : null}
                    </DrawerHeader>
                    {/* <DrawerHeader
                        textAlign='end'
                        fontWeight='bold'
                        color='#484848'
                    >{shopifyItem ? <>{shopifyItem.vendor}</> : null}</DrawerHeader> */}
                    <DrawerBody>
                        <Stack>
                            {shopifyItem ? (
                                <>
                                    <Box dangerouslySetInnerHTML={{ __html: shopifyItem.descriptionHtml }}></Box>
                                </>
                            ) : null}
                            {shopifyItem ? (
                                <>
                                    <Box
                                        textAlign='end'
                                        fontWeight='bold'
                                        color='#484848'
                                        fontSize='16px'
                                    >{shopifyItem.vendor}</Box>
                                </>
                            ) : null}
                            {shopifyItem ? (
                                <Box
                                    textAlign='end'
                                    fontWeight='bold'
                                    color='orangered'
                                    fontSize='16px'
                                >
                                    ¥{numeral(shopifyItem.variants.edges[0].node.price).format('0,0')} ~
                                </Box>
                            ) : null}
                            {shopifyItem ? (
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
                            {shopifyItem ? (
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
                </DrawerContent>
            </Drawer>
        </>
    )
});