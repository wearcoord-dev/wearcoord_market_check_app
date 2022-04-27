import {
    Button,
    localStorageManager,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    useDisclosure,
} from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = {
    onClickResetMannequin: () => void;
    onClickResetMannequinBrand: () => void;
};

export const DeleteModal: FC<Props> = memo((props) => {
    const { children, onClickResetMannequin, onClickResetMannequinBrand } =
        props;
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button
                maxWidth={'200px'}
                width={'20vw'}
                py={8}
                minWidth="150px"
                background="#216496"
                color="white"
                onClick={onOpen}
                justifyContent={'space-evenly'}
            >
                {children}
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>コーデを削除しますか？</ModalHeader>
                    <ModalCloseButton />
                    <ModalFooter pt={10}>
                        <Stack>
                            {localStorage.getItem('brand') ? (
                                <Button
                                    fontSize={'12px'}
                                    w={'80%'}
                                    px={10}
                                    py={7}
                                    colorScheme="red"
                                    mr={6}
                                    onClick={onClickResetMannequinBrand}
                                >
                                    ブランド情報を残して削除する
                                </Button>
                            ) : null}
                            <Button
                                fontSize={'12px'}
                                w={'80%'}
                                px={10}
                                py={7}
                                colorScheme="red"
                                mr={6}
                                onClick={onClickResetMannequin}
                            >
                                全て削除する
                            </Button>
                            <Button
                                fontSize={'12px'}
                                w={'80%'}
                                px={10}
                                py={7}
                                variant="ghost"
                                onClick={onClose}
                            >
                                削除せずに閉じる
                            </Button>
                        </Stack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
});
