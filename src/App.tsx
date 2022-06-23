import {
  ChakraProvider,
  extendTheme,
  withDefaultColorScheme,
} from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { HomePage, PostForm, NotFoundPage } from './pages/index'

export const App = (): JSX.Element => {
  const theme = extendTheme(withDefaultColorScheme({ colorScheme: 'blue' }))

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-post" element={<PostForm />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  )
}
