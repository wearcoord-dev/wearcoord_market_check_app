import { Box, HStack, useRadio, useRadioGroup } from "@chakra-ui/react"
import { FC, memo, useState } from "react"
import { capsList, capsListFemale, pantsList, pantsListFemale, shoesList, shoesListFemale, topsList, topsListFemale } from "../../../common/CategoryList"

type Props = {
    type: string;
    defaultGender: string;
    valueCategory: any;
    setValueCategory: any;
}


// 1. Create a component that consumes the `useRadio` hook
function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props)
    const { selectedCategory } = props;

    const input = getInputProps()
    const checkbox = getCheckboxProps()

    // 既に選んでいるものにチェックを入れる

    if (props.value === selectedCategory) {
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
            // width='150px'
            // textAlign='center'
            >
                {props.children}
            </Box>
        </Box>
    )
}

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
export const SearchCategorySelect: FC<Props> = memo((props) => {
    const { type, defaultGender, setValueCategory, valueCategory } = props;

    let options = null;

    // export function SearchCategorySelect() {
    if (type === 'caps') {
        if (defaultGender == 'male') {
            options = capsList;
        } else if (defaultGender == 'female') {
            options = capsListFemale;
        }
    }
    if (type === 'tops') {
        if (defaultGender == 'male') {
            options = topsList;
        } else if (defaultGender == 'female') {
            options = topsListFemale;
        }
    }
    if (type === 'pants') {
        if (defaultGender == 'male') {
            options = pantsList;
        } else if (defaultGender == 'female') {
            options = pantsListFemale;
        }
    }
    if (type === 'shoes') {
        if (defaultGender == 'male') {
            options = shoesList;
        } else if (defaultGender == 'female') {
            options = shoesListFemale;
        }
    }

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'framework',
        defaultValue: 'react',
        onChange: setValueCategory,
    })

    const group = getRootProps()

    return (
        <HStack {...group} py={6}>
            {options.map((value) => {
                const valueStr = value.value;
                const radio = getRadioProps({ value: valueStr })
                return (
                    <RadioCard key={valueStr} {...radio} selectedCategory={valueCategory}>
                        {value.text}
                    </RadioCard>
                )
            })}
        </HStack>
    )
})
