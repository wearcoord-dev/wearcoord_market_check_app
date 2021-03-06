import { Button, localStorageManager, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
    onClickResetMannequin: () => void;
}

export const DeleteModal: FC<Props> = memo((props) => {
    const { children, onClickResetMannequin } = props;
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button maxWidth={'200px'} width={'20vw'} py={8} minWidth='150px' background='#216496' color='white' onClick={onOpen} justifyContent={'space-evenly'}>{children}</Button>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>コーデを削除しますか？</ModalHeader>
                    <ModalCloseButton />
                    <ModalFooter pt={10}>
                        <Button fontSize={'12px'} w={'40%'} px={10} py={7} colorScheme='red' mr={6} onClick={onClickResetMannequin}>
                            削除する
                        </Button>
                        <Button fontSize={'12px'} w={'40%'} px={10} py={7} variant='ghost' onClick={onClose}>削除せずに閉じる</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
})