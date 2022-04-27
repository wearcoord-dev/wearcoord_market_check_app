import {
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
} from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
    onClose: () => void;
    isOpen: boolean;
    onClickMale: () => void;
    onClickFemale: () => void;
    onClickCoord: () => void;
    onClickItems: () => void;
};

export const MenuDrawer: FC<Props> = memo((props) => {
    const {
        onClose,
        isOpen,
        onClickMale,
        onClickFemale,
        onClickCoord,
        onClickItems,
    } = props;
    return (
        <Drawer placement="top" size="xs" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerBody p={0} bg="gray.100">
                        <Button onClick={onClickCoord} w="100%" p={10}>
                            コーデを見る
                        </Button>
                        <Button onClick={onClickItems} w="100%" p={10}>
                            アイテムから探す
                        </Button>
                        <Button onClick={onClickMale} w="100%" p={10}>
                            男性向けウェア
                        </Button>
                        <Button onClick={onClickFemale} w="100%" p={10}>
                            女性向けウェア
                        </Button>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    );
});
