import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
  Tooltip,
} from '@chakra-ui/react'
import { BiMoon, BiSun } from 'react-icons/bi'

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>

export const ColorModeSwitcher = (props: ColorModeSwitcherProps) => {
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(BiMoon, BiSun)

  return (
    <Tooltip label={`Switch to ${text} mode`}>
      <IconButton
        size="lg"
        fontSize="2xl"
        variant="ghost"
        color="current"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        aria-label={`Switch to ${text} mode`}
        {...props}
      />
    </Tooltip>
  )
}
