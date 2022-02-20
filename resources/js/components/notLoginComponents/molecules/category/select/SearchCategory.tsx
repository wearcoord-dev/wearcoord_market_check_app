import { Box, HStack, useRadio, useRadioGroup } from "@chakra-ui/react"
import { FC, memo } from "react"
import { capsList, topsList } from "../../../common/CategoryList"

type Props = {
    type: string;
}


// 1. Create a component that consumes the `useRadio` hook
function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props)

    const input = getInputProps()
    const checkbox = getCheckboxProps()

    return (
        <Box as='label'>
            <input {...input} />
            <Box
                {...checkbox}
                cursor='pointer'
                borderWidth='1px'
                borderRadius='md'
                boxShadow='md'
                _checked={{
                    bg: '#216496',
                    color: 'white',
                    borderColor: 'teal.600',
                }}
                _focus={{
                    // boxShadow: 'outline',
                }}
                px={10}
                py={3}
                width='150px'
                textAlign='center'
            >
                {props.children}
            </Box>
        </Box>
    )
}

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
export const SearchCategorySelect: FC<Props> = memo((props) => {
    const { type } = props;

    let options = null;

    // export function SearchCategorySelect() {
        if(type === 'caps'){
            options = capsList;
        }
        if(type === 'tops'){
            options = topsList;
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
                const valueStr = value.value;
                const radio = getRadioProps({ value: valueStr })
                return (
                    <RadioCard key={valueStr} {...radio}>
                        {value.text}
                    </RadioCard>
                )
            })}
        </HStack>
    )
})

// render(<Example />)