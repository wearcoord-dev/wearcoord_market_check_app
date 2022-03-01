import { Box, HStack, useRadio, useRadioGroup } from "@chakra-ui/react"
import { FC, memo } from "react"
import { brandCapsList, brandPantsList, brandShoesList, brandTopsList, brandTopsListFemale } from "../../../common/BrandList"

type Props = {
    type: string;
    valueBrand: any;
    setValue: any;
    defaultGender: string;
}


// 1. Create a component that consumes the `useRadio` hook
function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props)
    const { selectedBrand } = props;

    const input = getInputProps()
    const checkbox = getCheckboxProps()

    // 既に選んでいるものにチェックを入れる

    if (props.value === selectedBrand) {
        checkbox['data-checked'] = '';
    }

    return (
        <Box as='label'>
            <input {...input} />
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
                px={10}
                py={3}
            >
                {props.children}
            </Box>
        </Box>
    )
}

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
export const SearchBrandSelect: FC<Props> = memo((props) => {
    const { type, valueBrand, setValue, defaultGender } = props;

    let options = null;

    if (type === 'caps') {
        options = brandCapsList;
    }
    if (type === 'tops') {
        if (defaultGender == 'male') {
            options = brandTopsList;
        } else if (defaultGender == 'female') {
            options = brandTopsListFemale;
        }
    }
    if (type === 'pants') {
        options = brandPantsList;
    }
    if (type === 'shoes') {
        options = brandShoesList;
    }

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'framework',
        defaultValue: 'react',
        onChange: setValue,
    })

    const group = getRootProps()

    return (
        <HStack {...group} py={6}>
            {options.map((value) => {
                const radio = getRadioProps({ value: value.value })
                return (
                    <RadioCard key={value.value} {...radio} selectedBrand={valueBrand}>
                        {value.text}
                    </RadioCard>
                )
            })}
        </HStack>
    )
})

// render(<Example />)