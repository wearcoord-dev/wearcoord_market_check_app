import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Icon, useDisclosure } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
    btnIcon: any;
    wearId: string;
    type: string;
}

export const TopDrawerBtn: FC<Props> = memo((props) => {
    const { btnIcon, wearId, type } = props;
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = () => {
        onOpen()
    }

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
                <DrawerBody>
                    {`ここに${wearId}のアイテムを表示`}
                </DrawerBody>
            </DrawerContent>
        </Drawer>
        </>
    )
});