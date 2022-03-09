import { Button, Icon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { FC, memo, ReactNode } from "react";
import { Show3D } from "./Show3D";
import { MdOutlineSwipe } from 'react-icons/md';

type Props = {
    modelSrc: string;
}

const style = {
    text: {
        paddingLeft: '10px',
        fontWeight: 'bold',
    }
}

export const ShowModal: FC<Props> = memo((props) => {
    const { modelSrc } = props;
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <>
            <Button
                onClick={onOpen}
                p={4}
                boxSizing='content-box'
            >
                <Icon
                    color="#484848"
                    w={8}
                    h={8}
                    as={MdOutlineSwipe}
                />
                {/* @ts-ignore */}
                <p style={style.text}>3Dモデルで見る</p>
            </Button>

            <Modal isCentered closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>3Dモデル</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Show3D
                            modelSrc={modelSrc}
                        />
                    </ModalBody>

                    <ModalFooter>
                        {/* <Button colorScheme='blue' mr={3}>
                            Save
                        </Button> */}
                        <Button onClick={onClose}>閉じる</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
});