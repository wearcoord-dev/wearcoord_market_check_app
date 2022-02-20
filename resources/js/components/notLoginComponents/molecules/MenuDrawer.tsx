import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
    onClose: () => void;
    isOpen: boolean;
    onClickHome: () => void;
    onClickMale: () => void;
    onClickFemale: () => void;
    onClickCoord: () => void;
}

export const MenuDrawer: FC<Props> = memo((props) => {
    const { onClose, isOpen, onClickHome, onClickMale, onClickFemale, onClickCoord } = props;
    return (
        <Drawer placement="top" size="xs" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerBody p={0} bg="gray.100">
                        <Button onClick={onClickHome} w="100%" p={10}>TOP</Button>
                        <Button onClick={onClickCoord} w="100%" p={10}>コーデを見る</Button>
                        <Button onClick={onClickMale} w="100%" p={10}>男性向けウェア</Button>
                        <Button onClick={onClickFemale} w="100%" p={10}>女性向けウェア</Button>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    );
});