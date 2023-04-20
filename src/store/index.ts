import { configureStore } from '@reduxjs/toolkit'
import coins from './slices/coins'
const store = configureStore({
    reducer: {
        coins
    },
})



export default store

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch