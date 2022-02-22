import { Box, HStack, useRadio, useRadioGroup } from "@chakra-ui/react"
import { FC, memo, ReactNode, useCallback } from "react"
import { innerFemaleList, innerMaleList, socksFemaleList, socksMaleList } from "../common/InnerList"

type Props = {
    gender: string;
    type: string;
    setMannequinValue: ReactNode;
}


// 1. Create a component that consumes the `useRadio` hook
function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props)
    const { setMannequinValue } = props;

    const input = getInputProps()
    const checkbox = getCheckboxProps()

    const handleChange = useCallback((props) => {
        // console.log(props.target.value)
        setMannequinValue(props.target.value);
    }, []);

    return (
        <Box as='label'>
            <input {...input} name={props.name} onClick={handleChange} />
            <Box
                {...checkbox}
                cursor='pointer'
                borderWidth='1px'
                borderRadius='md'
                boxShadow='md'
                whiteSpace='nowrap'
                // bg='#f9f9f9'
                _checked={{
                    bg: '#216496',
                    color: 'white',
                    borderColor: 'teal.600',
                }}
                _focus={{
                    // boxShadow: 'outline',
                }}
                // px={10}
                py={3}
                width='40vw'
                textAlign='center'
                maxWidth='250px'
            >
                <img src={`../../../../../img/mannequin/${props.value}`} alt="" />
                <figcaption>{props.children}</figcaption>
            </Box>
        </Box>
    )
}

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
export const InnerSearchBox: FC<Props> = memo((props) => {
    const { gender, type, setMannequinValue } = props;

    let options = null;

    if (gender === 'male') {
        if (type === 'inner') {
            options = innerMaleList;
        } else if (type === 'socks') {
            options = socksMaleList;
        }
    }
    if (gender === 'female') {
        if (type === 'inner') {
            options = innerFemaleList;
        } else if (type === 'socks') {
            options = socksFemaleList;
        }
    }

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'framework',
        defaultValue: 'react',
        // onChange: console.log,
    })

    const group = getRootProps()

    return (
        <HStack {...group} py={6}>
            {options.map((value) => {
                const radio = getRadioProps({ value: value.url })
                return (
                    <RadioCard key={value.url} {...radio} name='mannequin' setMannequinValue={setMannequinValue}>
                        {value.text}
                    </RadioCard>
                )
            })}
        </HStack>
    )
})
