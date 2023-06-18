'use client'

import React, { useState } from 'react'

import styles from './AddNewPost.module.scss'
import postsStore from '@/store/posts'
import usersStore from '@/store/users'
import paginationStore from '@/store/pagination'
import { observer } from 'mobx-react-lite'

interface AddNewPostProps {
    visible: boolean
    setVisible: (visible: boolean) => void
}

const AddNewPost: React.FC<AddNewPostProps> = observer(({ visible, setVisible }) => {
    const [postTitle, setPostTitle] = useState('')
    const [postBody, setPostBody] = useState('')
    const [name, setName] = useState('')

    const newPost = {
        "userId": usersStore.users.length + 1,
        "id": Date.now(),
        "title": postTitle,
        "body": postBody
    }

    const newUser = {
        "id": usersStore.users.length + 1,
        "name": name,
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    }

    const postNewTodo = async () => {
        // await addPost(newPost).then(data => postsStore.addNewPost(data))
        postsStore.addNewPost(newPost)
        usersStore.addNewUser(newUser)
        paginationStore.setTotalCount(postsStore.fetchPosts.length)
        setVisible(false)
    }

    return (
        <>
            {visible &&
                <div className={styles.modal}>
                    <div className={styles.modalContainer}>
                        <span onClick={() => setVisible(false)}>Отмена</span>

                        <div className={styles.modalWrapper}>
                            <input onChange={(e) => setPostTitle(e.target.value)}
                                type="text"
                                placeholder='Название поста' />

                            <textarea onChange={(e) => setPostBody(e.target.value)} />

                            <input onChange={(e) => setName(e.target.value)}
                                type="text"
                                placeholder='Ваше имя' />

                            <button data-testid='add' onClick={postNewTodo}>
                                Добавить
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
})

export default AddNewPost