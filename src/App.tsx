import {
  ChakraProvider,
  extendTheme,
  withDefaultColorScheme,
} from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import PostsProvider from './context/postsContext'
import { HomePage, PostForm, NotFoundPage } from './pages'

export const App = (): JSX.Element => {
  const theme = extendTheme(withDefaultColorScheme({ colorScheme: 'twitter' }))

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <PostsProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create-post" element={<PostForm />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </PostsProvider>
      </Router>
    </ChakraProvider>
  )
}
