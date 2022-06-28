import { useContext } from 'react'
import { postsContext, PostsContext } from '../context/postsContext'

const usePosts = () => {
  return useContext<PostsContext>(postsContext)
}

export default usePosts
