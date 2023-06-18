'use client'

import postsStore from '@/store/posts';
import usersStore from '@/store/users';
import { observer } from 'mobx-react-lite';
import styles from './page.module.scss'
import Image from 'next/image';

type Props = {
    params: {
        id: number
    }
}

const PostDetail = observer(({ params: { id } }: Props) => {
    const posts = postsStore.fetchPosts
    const post = [...posts].find((elem: any) => elem.id === Number(id)) || null

    const autor = [...usersStore.users].find(user => post?.userId === user.id)?.name || null

    if (!post || !autor) {
        return <div className={styles.container}>Пост не найден </div>;
    }

    return (
        <div className={styles.container}>
            <Image src='https://loremflickr.com/1280/1280'
                height={200}
                width={200}
                alt='Пост' />
            <h2 className={styles.postName}>
                Название:  {post.title}
            </h2>

            <h2 className={styles.postAutorName}>
                Автор: {autor}
            </h2>

            <div>
                Текст поста: {post.body}
            </div>
        </div>
    );
})

export default PostDetail;