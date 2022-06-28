import {
  ChakraProvider,
  extendTheme,
  withDefaultColorScheme,
} from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import PostsContainer from './context/postsContext'
import { HomePage, PostForm, NotFoundPage } from './pages'

export const App = (): JSX.Element => {
  const theme = extendTheme(withDefaultColorScheme({ colorScheme: 'twitter' }))

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <PostsContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create-post" element={<PostForm />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </PostsContainer>
      </Router>
    </ChakraProvider>
  )
}
