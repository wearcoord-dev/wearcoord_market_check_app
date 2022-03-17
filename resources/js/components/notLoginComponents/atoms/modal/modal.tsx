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
            <Button py={8} minWidth='150px' background='#216496' color='white' onClick={onOpen}>{children}</Button>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>コーデを削除しますか？</ModalHeader>
                    <ModalCloseButton />
                    <ModalFooter>
                        <Button colorScheme='red' mr={3} onClick={onClickResetMannequin}>
                            削除する
                        </Button>
                        <Button variant='ghost' onClick={onClose}>削除せずに閉じる</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
})