import { Box, HStack, useRadio, useRadioGroup } from "@chakra-ui/react"
import { FC, memo, useCallback } from "react"
import { colorList } from "../../../common/ColorList"

type Props = {
    valueColor: any;
    setValueColor: any;
}

// 1. Create a component that consumes the `useRadio` hook
function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props)

    const input = getInputProps()
    const checkbox = getCheckboxProps()

    // console.log(props)

    // 再選択でチェックリムーブ
    // https://qiita.com/KenAra/items/0743197b8c78b2b885df
    // https://zenn.dev/nbr41to/articles/3f1ae8cbc532b6

    return (
        <Box as='label'>
            <input {...input} />
            <Box
                {...checkbox}
                cursor='pointer'
                borderWidth='1px'
                borderRadius='md'
                boxShadow='md'
                backgroundColor={props.value}
                _checked={{
                    border: '4px',
                    borderColor: '#216496',
                    boxShadow: 'dark-lg'
                }}
                _focus={{
                    // boxShadow: 'outline',
                }}
                px={10}
                py={3}
                height='30px'
                width='60px'
            >
                {/* {props.children} */}
            </Box>
        </Box>
    )
}

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
export const SearchColorSelect: FC<Props> = memo((props) => {
    const { valueColor, setValueColor } = props;

    const options = colorList;

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'framework',
        defaultValue: 'react',
        onChange: setValueColor,
    })

    const group = getRootProps()

    return (
        <HStack {...group} py={6}>
            {options.map((value) => {
                const radio = getRadioProps({ value })
                return (
                    <RadioCard key={value} {...radio}>
                        {/* {value} */}
                    </RadioCard>
                )
            })}
        </HStack>
    )
})
