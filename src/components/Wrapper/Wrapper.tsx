'use client'

import { useEffect } from 'react'
import { getAllPosts, getUsers } from '@/api'
import postsStore from '@/store/posts'
import paginationStore from '@/store/pagination'
import usersStore from '@/store/users'
import { observer } from 'mobx-react-lite'

const Wrapper = observer(({
    children,
}: {
    children: React.ReactNode
}) => {

    useEffect(() => {
        getAllPosts()
            .then(data => {
                paginationStore.setTotalCount(data.length)
                postsStore.setPosts(data)
            }
            )

        getUsers()
            .then(data => usersStore.setUsers(data))
    }, [])

    return (
        <>
            {children}
        </>
    )
})

export default Wrapper