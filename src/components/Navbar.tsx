import {
  BackgroundProps,
  Heading,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { ColorModeSwitcher } from '../ColorModeSwitcher'

const Navbar = () => {
  const background = useColorModeValue<
    BackgroundProps['background'],
    BackgroundProps['background']
  >('blackAlpha.200', 'whiteAlpha.200')

  return (
    <HStack
      as="nav"
      position="sticky"
      top={0}
      justifyContent="space-between"
      padding={6}
      background={background}
    >
      <Heading>Posts app</Heading>
      <ColorModeSwitcher />
    </HStack>
  )
}

export default Navbar
