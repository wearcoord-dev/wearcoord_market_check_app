import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import { FC, memo } from "react";
import FemaleTennis from "../../../../../../../public/img/lp/female_tennis.png";
import MaleTennis from "../../../../../../../public/img/lp/male_tennis.png";

const imageStyle = {
    width: '30%',
}

export const BeforeCreateCoord: FC = memo(() => {
    return (
        <Stack>
            <Flex
                w={'100%'}
                justifyContent={'space-evenly'}
                maxWidth={'500px'}
            >
                <Image {...imageStyle} src={MaleTennis} />
                <Image {...imageStyle} src={FemaleTennis} />
            </Flex>
            <Flex justifyContent='center' py={10}>
                <Text py={10} fontSize={'18px'} fontWeight={'bold'} color={'#484848'} >早速コーデを作りましょう!</Text>
            </Flex>
        </Stack>
    )
});