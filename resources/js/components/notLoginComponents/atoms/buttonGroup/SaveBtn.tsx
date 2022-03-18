import { Button, ButtonGroup } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
    onClickAllClose: () => void;
    onClickRegisterWear: () => void;
}

export const SaveBtn: FC<Props> = memo((props) => {
    const { onClickAllClose, onClickRegisterWear } = props;

    return (
        <ButtonGroup pt={6} justifyContent='center' spacing='10' width={{md:'600px'}} margin={{ md: 'auto' }}>
            <Button onClick={onClickAllClose} fontSize={'12px'} w={'40%'} px={10} py={7} variant='outline'>閉じる</Button>
            <Button onClick={onClickRegisterWear} fontSize={'12px'} w={'40%'} px={10} py={7} bg='#216496' color='white' variant='solid'>確定する</Button>
        </ButtonGroup>
    )
});