import {
  BackgroundProps,
  Button,
  Heading,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
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
      <Heading as={RouterLink} to="/">
        Posts app
      </Heading>
      <HStack>
        <Button as={RouterLink} to="/create-post" variant="solid">
          Create post
        </Button>
        <ColorModeSwitcher />
      </HStack>
    </HStack>
  )
}

export default Navbar
