import { Button, Stack } from "@chakra-ui/react";
import { FC, memo, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { OpenBtn } from "../atoms/button/OpenBtn";
import { TopCoord } from "../organisms/coord/TopCoord";

export const SampleTop: FC = memo(() => {
    const history = useHistory();

    const onClickChangeMannequin = useCallback(() => history.push("/sample/mannequin"), []);

    return (
        <>
            <TopCoord />

            {/* <Stack direction='row' spacing={4} align='center'>
                <OpenBtn />

                <Button onClick={onClickChangeMannequin} background='#216496' color='white' variant='solid'>
                    マネキンを変更する
                </Button>
            </Stack> */}
        </>
    )
});