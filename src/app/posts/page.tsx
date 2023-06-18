'use client'

import Image from 'next/image'
import styles from './page.module.scss'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import AddNewPost from '@/components/AddNewPost/AddNewPost';
import Pagination from '@/components/Pagination/Pagination';
import postsStore from '@/store/posts'
import paginationStore from '@/store/pagination'
import usersStore from '@/store/users'
import { observer } from 'mobx-react-lite';

const Posts = observer(() => {
  const [visible, setVisible] = useState(false)

  const startIndex = (paginationStore.page - 1) * paginationStore.limit;
  const endIndex = startIndex + paginationStore.limit;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const limit = params.get('_limit');
    const page = params.get('_page')

    if (limit && page) {
      paginationStore.setLimit(Number(limit));
      paginationStore.setPage(Number(page));
    }
  }, [])

  return (
    <div className={styles.container}>
      <AddNewPost
        visible={visible}
        setVisible={setVisible} />

      <button className={styles.addBtn}
        onClick={() => setVisible(true)}>
        Добавить пост
      </button>

      <div className={styles.posts}>
        {postsStore.fetchPosts
          .slice(startIndex, endIndex)
          .map(post =>
            <div key={post.id} className={styles.postItem}>
              <Image src='https://loremflickr.com/1280/1280'
                height={200}
                width={200}
                alt='Пост' />

              <h2 className={styles.postName}>
                Название:  {post.title}
              </h2>

              <h2 className={styles.postAutorName}>
                Автор:  {usersStore.users.find(user => post.userId === user.id)?.name}
              </h2>

              <Link href={'/post/' + post.id}>
                Подробнее
              </Link>
            </div>)}
      </div>

      <Pagination />
    </div>
  )
})

export default Posts