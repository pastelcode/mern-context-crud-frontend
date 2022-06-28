import { useState, createContext, Dispatch, SetStateAction } from 'react'

export interface PostsContext {
  posts: string[]
  setPosts: Dispatch<SetStateAction<string[]>>
}

export const postsContext = createContext<PostsContext>({} as PostsContext)

interface Props {
  children: JSX.Element | JSX.Element[]
}

const PostsContainer = ({ children }: Props) => {
  const [posts, setPosts] = useState<string[]>([])

  return (
    <postsContext.Provider value={{ posts, setPosts }}>
      {children}
    </postsContext.Provider>
  )
}

export default PostsContainer
