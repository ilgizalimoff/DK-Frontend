import styles from './Pagination.module.scss'
import React from 'react'
import paginationStore from '@/store/pagination'
import { observer } from 'mobx-react-lite';
import { getPosts } from '@/api';
import { getPageCount, getPagesArray } from '@/const';
import { useRouter } from 'next/navigation'

const Pagination = observer(() => {
    const totalPages = getPageCount(paginationStore.totalCount, paginationStore.limit)
    const router = useRouter()

    const pagesArray = getPagesArray(totalPages)

    const changePage = async (page: number) => {
        // await getPosts(postsStore.limit, page)
        //     .then(data => postsStore.setPosts(data))
        paginationStore.setPage(page)

        const params = new URLSearchParams(window.location.search);

        params.set('_page', String(page));
        router.push(`posts?${params.toString()}`)
    }

    return (
        <div className={styles.pagination}>
            <div className={styles.paginationContainer}>
                {pagesArray.map(p =>
                    <span onClick={() => changePage(p)}
                        key={p * 2000}
                        className={p === paginationStore.page
                            ? styles.page + ' ' + styles.page__current
                            : styles.page}>{p}</span>
                )}
            </div>
        </div>
    )
})

export default Pagination