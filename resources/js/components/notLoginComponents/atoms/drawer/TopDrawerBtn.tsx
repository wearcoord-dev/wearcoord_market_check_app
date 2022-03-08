import { Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Icon, useDisclosure } from "@chakra-ui/react";
import { FC, memo, useEffect, useState } from "react";
import { useGetShopifyItem } from "../../hooks/useGetShopifyItem";

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
                    <DrawerHeader>{`${type} drawer contents`}</DrawerHeader>
                    <DrawerHeader>{shopifyItem ? <p>{shopifyItem.title}</p> : null}</DrawerHeader>
                    <DrawerHeader>{shopifyItem ? <p>{shopifyItem.vendor}</p> : null}</DrawerHeader>
                    <DrawerBody>
                        {shopifyItem ? (
                            <>
                                <div dangerouslySetInnerHTML={{ __html: shopifyItem.descriptionHtml }}></div>
                            </>
                        ) : <p>null</p>}
                        {shopifyItem ? (
                            <>
                                {shopifyItem.variants.edges[0].node.price}
                            </>
                        ) : <p>null</p>}
                        {shopifyItem ? (
                            <>
                                {shopifyItem.images.edges.map((item) => (
                                    < img src={item.node.originalSrc} key={item.node.id} />
                                ))}
                            </>
                        ) : <p>null</p>}
                        {shopifyItem ? (
                            <>
                                <DrawerFooter>
                                    <Button as="a" href={shopifyItem.onlineStoreUrl} bg='#216496' color='whiteAlpha.700' variant='solid' target={'_blank'}>購入する</Button>
                                </DrawerFooter>
                            </>
                        ) : <p>null</p>}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
});