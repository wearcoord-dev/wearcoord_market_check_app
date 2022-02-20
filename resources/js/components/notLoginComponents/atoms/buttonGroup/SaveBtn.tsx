import { Button, ButtonGroup } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
    onClickAllClose: () => void;
}

export const SaveBtn: FC<Props> = memo((props) => {
    const { onClickAllClose } = props;

    return (
        <ButtonGroup pt={6} justifyContent='center' spacing='10'>
            <Button onClick={onClickAllClose} px={10} variant='outline'>閉じる</Button>
            <Button px={10} bg='#216496' color='whiteAlpha.700' variant='solid'>確定する</Button>
        </ButtonGroup>
    )
});