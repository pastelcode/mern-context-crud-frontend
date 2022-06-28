import { useContext } from 'react'
import { postsContext, PostsContext } from '../context/postsContext'

const usePosts = () => {
  const { posts } = useContext<PostsContext>(postsContext)

  return {
    posts,
  }
}

export default usePosts
